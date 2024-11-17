import React, { useState } from 'react'
import Sidebar from '../Layouts/Sidebar'
import Topbar from '../Layouts/Topbar'
import EventDateTimePicker from '../Components/EventDateTimePicker'
import { TbCalendarTime } from 'react-icons/tb'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { SlLocationPin } from 'react-icons/sl'
import { BiCategoryAlt } from 'react-icons/bi'
import CountryFlags from '../Components/Country-Flags'
import { MdAdd, MdOutlineAlternateEmail } from 'react-icons/md'
import dayjs from 'dayjs'
import EventTicketView from '../Components/Event-Ticket-View'
import AddTickets from '../Components/Add-Tickets'
import Tickets from '../Components/Tickets'
const CreateEvent = () => {
  const [eventStartDateTime, setEventStartDateTime] = useState(dayjs().format('DD-MM-YYYY h:mm A'))
  const [eventEndDateTime, setEventEndDateTime] = useState(dayjs().add(1, 'day').format('DD-MM-YYYY h:mm A'))
  const [openTicketView, setOpenTicketView] = useState(false)

  const [formData, setFormData] = useState({
    eventname: "",
    eventStart: eventStartDateTime,
    eventEnd: eventEndDateTime
  })

  const handleChange = (key, value) => {

    setFormData((prevState) => ({
      ...prevState,
      [key]: value
    })

    )
  }

  console.log(formData.eventname)

  return (
    <>
      <Topbar />
      <Sidebar />

      <div className='main_layout pt-5 pb-5 px-8'>
        <h1 className='text-[30px]'>Create Event</h1>

        <div className='container  mt-10'>
          <div className='grid md:grid-cols-6 grid-cols-1 gap-10'>

            <div className='col-span-4'>

              <form className='form-controller'>

                <div className='eventform-ctrl'>
                  <label className='text-[14px] mx-2 text-gray-300'>Event Name</label>
                  <input type='text' className='event-title mt-2' placeholder='Title of the event'
                    value={formData.eventname}
                    onChange={(e) => handleChange('eventname', e.target.value)} />
                </div>

                <p className='text-[14px] mx-2 mt-6 text-gray-300'>Select Date & Time From the Calender</p>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>

                  <div className='eventform-ctrl col-span-1'>
                    <div className='form-container'>
                      <input type='text' className='event-default mt-2' value={eventStartDateTime} placeholder='Start date & time' readOnly />
                      <TbCalendarTime className='icon' />
                    </div>

                  </div>

                  <div className='eventform-ctrl col-span-1'>
                    <div className='form-container'>
                      <input type='text' className='event-default mt-2' value={eventEndDateTime} placeholder='End date & time' readOnly />
                      <TbCalendarTime className='icon' />
                    </div>

                  </div>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                  <div className='eventform-ctrl col-span-1 mt-4'>
                    <label className='text-[14px] mx-2 text-gray-300'>Venue Name</label>
                    <div className='form-container'>
                      <input type='text' className='event-default mt-2' placeholder='Enter venu name ' />
                      <HiOutlineBuildingOffice2 className='icon' />
                    </div>
                  </div>

                  <div className='eventform-ctrl col-span-1 mt-4'>
                    <label className='text-[14px] mx-2 text-gray-300'>Event Location</label>
                    <div className='form-container'>
                      <input type='text' className='event-default mt-2' placeholder='Enter event location ' />
                      <SlLocationPin className='icon' />
                    </div>
                  </div>
                </div>


                <div className='eventform-ctrl  mt-4'>
                  <label className='text-[14px] mx-2 text-gray-300'>Event Category</label>
                  <div className='form-container'>
                    <input type='text' className='event-default mt-2' placeholder='Enter event category (Optional) ' />
                    <BiCategoryAlt className='icon' />
                  </div>
                </div>

                <div className='eventform-ctrl  mt-4'>
                  {/* <label className='text-[14px] mx-2 text-gray-300'></label> */}
                  <div className='form-container'>
                    <textarea rows={8} cols={8} className='event-default mt-2' placeholder='Show your attendence what they can expect from your event ... ' />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                  <div className='eventform-ctrl col-span-1  mt-4'>
                    <label className='text-[14px] mx-2 text-gray-300'>Phone Number</label>

                    <div className='form-container'>
                      <CountryFlags />
                      <input type='text' className='event-default-flag mt-2' placeholder='Enter your phone number ' />
                    </div>

                  </div>

                  <div className='eventform-ctrl col-span-1  mt-4'>
                    <label className='text-[14px] mx-2 text-gray-300'>Email</label>

                    <div className='form-container'>
                      <input type='email' className='event-default mt-2' placeholder='Enter your email ' />
                      <MdOutlineAlternateEmail className='icon' />
                    </div>

                  </div>

                </div>

                <div className='flex gap-4 justify-start items-center ticket-buttons mt-14'>
                  {/* <button type='button' className='outline'>Cancle</button> */}
                  <button type='button' onClick={()=>setOpenTicketView(true)} className='outline'> Add Tickets</button>
                </div>

              </form>

              <div className=' bg-gray-600 w-full my-5 h-px' />
              {/* Added/Created Tickets */}
              <Tickets />

              <div className='flex gap-4 justify-start items-center ticket-buttons mt-14'>
                  {/* <button type='button' className='outline'>Cancle</button> */}
                  <button type='button'> Submit</button>
                </div>
            </div>

            <div className='col-span-2'>

              {/* Date Time Picker for Selecting Date and Time for Form */}
              <EventDateTimePicker
                eventStartDateTime={setEventStartDateTime}
                eventEndDateTime={setEventEndDateTime}
                selectedDateTime={eventStartDateTime}
              />

              <div className=' bg-gray-600 w-full mb-5 h-px' />

              {/* Tcket View Card to add image for the Event  */}
              <EventTicketView formData={formData} setOpenTicketView={setOpenTicketView} />


              {/* To create/customize Tickets for Events */}
              <AddTickets
                setOpenTicketView={setOpenTicketView}
                openTicketView={openTicketView}
              />

            </div>

          </div>
        </div>


      </div>

    </>
  )
}

export default CreateEvent