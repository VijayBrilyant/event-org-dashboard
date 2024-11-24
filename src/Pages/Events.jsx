import React, { useEffect, useState } from 'react'
import Topbar from '../Layouts/Topbar'
import Sidebar from '../Layouts/Sidebar'
import EventImg1 from '../assets/event2.png'
import EventImg2 from '../assets/event1.png'
import EventImg3 from '../assets/new-year.jpg'
import { ImLocation } from 'react-icons/im'
import { PiCalendarStarFill } from 'react-icons/pi'
import { VscEye } from 'react-icons/vsc'
import { RiArrowDownWideFill, RiDeleteBin6Line } from 'react-icons/ri'
import { MdOutlineModeEdit } from 'react-icons/md'
import shape1 from '../assets/shape1.png';
import { CgSearch } from 'react-icons/cg'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import {DateRange, createStaticRanges } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { startOfMonth, endOfMonth, subMonths, subYears, startOfYear, endOfYear, startOfToday, startOfYesterday, startOfWeek, endOfWeek, subWeeks } from "date-fns";
import { useDispatch, useSelector } from 'react-redux'
import { eventget } from '../Store/slice/event'

const Events = () => {
const dispatch =  useDispatch()
const {data} = useSelector((state)=> state.event)
let eventData = data;

useEffect(()=>{dispatch(eventget())},[dispatch])

useEffect(() => {
  console.log(eventData);
}, [eventData]);

  const [filterStatus, setFilterStatus] = useState('live')
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setDateRange({ startDate, endDate });

    console.log('start Date:-',startDate)
    console.log('end Date:-',endDate)
  };

  const selectionRange = {
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    key: 'selection',
  };

  const customStaticRanges = createStaticRanges([
    { label: "Today", range: () => ({ startDate: startOfToday(), endDate: new Date() }) },
    { label: "Yesterday", range: () => ({ startDate: startOfYesterday(), endDate: startOfYesterday() }) },
    { label: "Last Week", range: () => ({ startDate: startOfWeek(subWeeks(new Date(), 1)), endDate: endOfWeek(subWeeks(new Date(), 1)) }) },
    { label: "Last Month", range: () => ({ startDate: startOfMonth(subMonths(new Date(), 1)), endDate: endOfMonth(subMonths(new Date(), 1)) }) },
    { label: "This Year", range: () => ({ startDate: startOfYear(new Date()), endDate: endOfYear(new Date()) }) },
    { label: "Last Year", range: () => ({ startDate: startOfYear(subYears(new Date(), 1)), endDate: endOfYear(subYears(new Date(), 1)) }) },
  ]);

  const combinedRanges = [...customStaticRanges];

  return (
    <>

      <Topbar />
      <Sidebar />

      <div className='main_layout pt-5 pb-5 px-8'>
        <h1 className='text-[30px] mb-10'>My  Events</h1>

        <div className='flex items-center justify-between'>
          <div className='filter-action-btns flex gap-3 items-center'>
            <button type='button'
              onClick={() => setFilterStatus('seeall')}
              className={filterStatus === 'seeall' ? 'active' : ''}>All Events</button>

            <button type='button'
              onClick={() => setFilterStatus('live')}
              className={filterStatus === 'live' ? 'active' : ''}
            >live Events</button>

            <button type='button'
              onClick={() => setFilterStatus('draft')}
              className={filterStatus === 'draft' ? 'active' : ''}
            >Draft Events</button>

            <button type='button'
              onClick={() => setFilterStatus('cancelled')}
              className={filterStatus === 'cancelled' ? 'active' : ''}
            >Cancelled Events</button>

            <div className='search-events'>
              <input type='text' name='events' id='events' placeholder='Search your events ...' />
              <CgSearch className='icon' />
            </div>

          </div>

          <Link to='/create-event'>
            <div className='ticket-buttons'>
              <button type='button' className='flex items-center justify-center gap-3' style={{ fontSize: '12px' }}><IoMdAdd className='text-[16px]' /> Create New Event</button>
            </div>
          </Link>

        </div>


        <div className='grid md:grid-cols-4 grid-cols-1 gap-4 my-10'>

          <div className='col-span-3'>


{
  data.length > 0 ? (

    data.map((event, id)=>(
      <div className='event-list-card relative my-4' key={id}>
              <img src={shape1} alt='' className='shape1' />

              <div className='grid md:grid-cols-6'>

                <div className='col-span-2'>
                  <div className='event-card-img'>
                    <img src={event.flyer || EventImg1 } alt='' />
                    <div className='overlay-black-transparent' />
                  </div>
                </div>

                <div className='col-span-4'>
                  <div className='event-card-info px-4 py-3 pr-5'>
                    <div className='flex items-center gap-3 venu'>
                      <p className='flex items-center gap-1'><PiCalendarStarFill />    16th Jul 2024, </p>

                      <p className='flex items-center gap-1'><ImLocation className='text-[15px]' /> London</p>
                    </div>
                    <h3 className='text-[40px] font-[700]'>{event.event_name}</h3>

                    <p className='text-[12px] md:text-gray-400 pt-4 font-[300] pr-16'>Lorem ipsum is typically a corrupted version of De finibus bonorum et
                      malorum, a 1st-century BC text by the Ro.....</p>

                    <div className='user-img mt-4'>
                      <div className='user1' />
                      <div className='user2' />
                      <div className='user3' />
                      <div className='user4' />
                      <div className='user-joined'>
                        <p>34k+</p>
                      </div>

                    </div>


                    <div className='event-actions flex gap-3'>
                      <button className='btn-border-line flex items-center gap-2 border rounded-[100px] border-gray-500 px-3'>
                        <VscEye className='icon' /> <span className='text-[10px]'>View</span>
                      </button>

<Link to={`/edit-event/${event._id}`}>
<button className='rounded btn-border border border-gray-500'><MdOutlineModeEdit className='icon' /></button>
</Link>

                      <button className='rounded btn-border border border-gray-500'><RiDeleteBin6Line className='icon-delete' /></button>
                    </div>




                  </div>
                </div>

              </div>
            </div> 
    ))
   
  ):(
    <p>Loading</p>
  )
}



            {/* <div className='event-list-card relative my-4'>
              <img src={shape1} alt='' className='shape1' />

              <div className='grid md:grid-cols-6'>

                <div className='col-span-2'>
                  <div className='event-card-img'>
                    <img src={EventImg1} alt='' />
                    <div className='overlay-black-transparent' />
                  </div>
                </div>

                <div className='col-span-4'>
                  <div className='event-card-info px-4 py-3 pr-5'>
                    <div className='flex items-center gap-3 venu'>
                      <p className='flex items-center gap-1'><PiCalendarStarFill />    16th Jul 2024, </p>

                      <p className='flex items-center gap-1'><ImLocation className='text-[15px]' /> London</p>
                    </div>
                    <h3 className='text-[40px] font-[700]'>House Party 24</h3>

                    <p className='text-[12px] md:text-gray-400 pt-4 font-[300] pr-16'>Lorem ipsum is typically a corrupted version of De finibus bonorum et
                      malorum, a 1st-century BC text by the Ro.....</p>

                    <div className='user-img mt-4'>
                      <div className='user1' />
                      <div className='user2' />
                      <div className='user3' />
                      <div className='user4' />
                      <div className='user-joined'>
                        <p>34k+</p>
                      </div>

                    </div>


                    <div className='event-actions flex gap-3'>
                      <button className='btn-border-line flex items-center gap-2 border rounded-[100px] border-gray-500 px-3'>
                        <VscEye className='icon' /> <span className='text-[10px]'>View</span>
                      </button>

                      <button className='rounded btn-border border border-gray-500'><MdOutlineModeEdit className='icon' /></button>

                      <button className='rounded btn-border border border-gray-500'><RiDeleteBin6Line className='icon-delete' /></button>
                    </div>




                  </div>
                </div>

              </div>
            </div> */}

            {/* <div className='event-list-card relative my-4'>
              <div className='grid md:grid-cols-6'>

                <div className='col-span-2'>
                  <div className='event-card-img'>
                    <img src={EventImg2} alt='' />
                    <div className='overlay-black-transparent' />
                  </div>
                </div>

                <div className='col-span-4'>
                  <div className='event-card-info px-4 py-3 pr-5'>
                    <div className='flex items-center gap-3 venu'>
                      <p className='flex items-center gap-1'><PiCalendarStarFill />    31th Oct 2025, </p>

                      <p className='flex items-center gap-1'><ImLocation className='text-[15px]' /> London</p>
                    </div>
                    <h3 className='text-[40px] font-[700]'>Halloween DJ Night Event</h3>

                    <p className='text-[12px] md:text-gray-400 pt-4 font-[300] pr-16'>Lorem ipsum is typically a corrupted version of De finibus bonorum et
                      malorum, a 1st-century BC text by the Ro.....</p>

                    <div className='draft-btn mt-4'>
                      <p>Draft</p>
                    </div>


                    <div className='event-actions flex gap-3'>
                      <button className='btn-border-line flex items-center gap-2 border rounded-[100px] border-gray-500 px-3'>
                        <VscEye className='icon' /> <span className='text-[10px]'>View</span>
                      </button>

                      <button className='rounded btn-border border border-gray-500'><MdOutlineModeEdit className='icon' /></button>

                      <button className='rounded btn-border border border-gray-500'><RiDeleteBin6Line className='icon-delete' /></button>
                    </div>




                  </div>
                </div>

              </div>
              <img src={shape1} alt='' className='shape1' />
            </div>

            <div className='event-list-card relative my-4'>
              <div className='grid md:grid-cols-6'>

                <div className='col-span-2'>
                  <div className='event-card-img'>
                    <img src={EventImg3} alt='' />
                    <div className='overlay-black-transparent' />
                  </div>
                </div>

                <div className='col-span-4'>
                  <div className='event-card-info px-4 py-3 pr-5'>
                    <div className='flex items-center gap-3 venu'>
                      <p className='flex items-center gap-1'><PiCalendarStarFill />    31th Dec 2024, </p>

                      <p className='flex items-center gap-1'><ImLocation className='text-[15px]' /> New York</p>
                    </div>
                    <h3 className='text-[40px] font-[700]'>New Year DJ Night 25</h3>

                    <p className='text-[12px] md:text-gray-400 pt-4 font-[300] pr-16'>Lorem ipsum is typically a corrupted version of De finibus bonorum et
                      malorum, a 1st-century BC text by the Ro.....</p>

                    <div className='launched-btn mt-4'>
                      <p>Lunched</p>
                    </div>


                    <div className='event-actions flex gap-3'>
                      <button className='btn-border-line flex items-center gap-2 border rounded-[100px] border-gray-500 px-3'>
                        <VscEye className='icon' /> <span className='text-[10px]'>View</span>
                      </button>

                      <button className='rounded btn-border border border-gray-500'><MdOutlineModeEdit className='icon' /></button>

                      <button className='rounded btn-border border border-gray-500'><RiDeleteBin6Line className='icon-delete' /></button>
                    </div>




                  </div>
                </div>

              </div>
              <img src={shape1} alt='' className='shape1' />
            </div> */}

          </div>

          <div className='col-span-1'>
          <h4 className='mt-5 text-[12px] flex items-center justify-between bg-black px-4 py-3 rounded-[10px] mb-2'>Filter Event From Date <RiArrowDownWideFill /></h4>
            <DateRange
              ranges={[selectionRange]}
              onChange={handleSelect}
              staticRanges={combinedRanges}
            />
          </div>

        </div>



      </div>

    </>
  )
}

export default Events