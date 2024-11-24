import React, { useEffect, useState } from 'react'
import Sidebar from '../Layouts/Sidebar'
import Topbar from '../Layouts/Topbar'
import EventDateTimePicker from '../Components/EventDateTimePicker'
import { TbCalendarTime } from 'react-icons/tb'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { SlLocationPin } from 'react-icons/sl'
import { BiCategoryAlt } from 'react-icons/bi'
import CountryFlags from '../Components/Country-Flags'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import dayjs from 'dayjs'
import EventTicketView from '../Components/Event-Ticket-View'
import AddTickets from '../Components/Add-Tickets'
import Tickets from '../Components/Tickets'
import Flare_Poster from '../Components/Flare-Poster'
import { useDispatch, useSelector } from 'react-redux'
import { eventgetbyid, eventpost, eventUpdateById } from '../Store/slice/event'
import EditTickets from '../Components/Edit-Ticket'
import { useNavigate, useParams } from 'react-router-dom'
const EditEvent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
const {data} = useSelector((state)=> state.event)

  const {id} = useParams()

  const [selectedFlag, setSelectedFlag] = useState("IN");
  const [eventStartDateTime, setEventStartDateTime] = useState(dayjs().format('DD-MM-YYYY h:mm A'))
  const [eventEndDateTime, setEventEndDateTime] = useState(dayjs().add(1, 'day').format('DD-MM-YYYY h:mm A'))
  const [openTicketView, setOpenTicketView] = useState(false)
  const [openEditTicketView, setOpenEditTicketView] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [eventCalender, setEventCalender] = useState('close')

useEffect(()=>{
  dispatch(eventgetbyid(id))
},[])


// useEffect(()=>{
// console.log(data.address)
// },[data])

  const [formData, setFormData] = useState( {
    organizer_id: '67416f3efe174b35753cb437',
    event_name: "",
    start_date: eventStartDateTime,
    end_date: eventEndDateTime,
    venue_name: '',
    address: '',
    event_description: "",
    flyer: '',
    tickets: []
  })


  useEffect(() => {
    if (data) {
      setFormData({
        organizer_id: data.organizer_id || '67416f3efe174b35753cb437',
        event_name: data.event_name || '',
        start_date: data.start_date || eventStartDateTime,
        end_date: data.end_date || eventEndDateTime,
        venue_name: data.venue_name || '',
        address: data.address || '',
        event_description: data.event_description || '',
        flyer: data.flyer || '',
        tickets: data.tickets || [],
      });
      setEventStartDateTime(data.start_date || eventStartDateTime);
      setEventEndDateTime(data.end_date || eventEndDateTime);
    }
  }, [data]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))

  }

  const getFlagCode = (countryCode) => {
    setSelectedFlag(countryCode)

    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedFlag: countryCode,
    }));
  }

  const storeTicketData = (addTicketData) => {
    setFormData((prev) => ({
      ...prev,
      tickets: [...prev.tickets, addTicketData]
    }))

    console.log(addTicketData)
  }



  const handleUpdateEvent = () => {
    console.log(formData)
    dispatch(eventUpdateById({id:id, formData: formData}))
    navigate('/event-list')
  }

  const handleDeleteTicket = (index) => {
    setFormData((prev) => ({
      ...prev,
      tickets: prev.tickets.filter((_, i) => i !== index),
    }));
  };

  const updateTicketData = (updatedTicket) => {
    setFormData((prev) => ({
        ...prev,
        tickets: prev.tickets.map((ticket) =>
            ticket.id === updatedTicket.id ? updatedTicket : ticket
        ),
    }));
};

  return (
    <>
      <Topbar />
      <Sidebar />

      <div className='main_layout pt-5 pb-5 px-8'>
        <h1 className='text-[30px]'>Edit Event</h1>

        <div className='container  mt-10'>
          <div className='grid md:grid-cols-6 grid-cols-1 gap-10'>

            <div className='col-span-4'>

              <form className='form-controller'>

                <div className='eventform-ctrl'>
                  <label className='text-[14px] mx-2 text-gray-300'>Event Name</label>
                  <input type='text' className='event-title mt-2' name='event_name' value={formData.event_name} placeholder='Title of the event'
                   
                    onChange={handleChange} />
                </div>

                <p className='text-[14px] mx-2 mt-6 text-gray-300'>Select Date & Time From the Calender</p>

                {/* Date time input field */}
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>

                  <div className='eventform-ctrl col-span-1'>
                    <div className='form-container'>
                      <input type='text' className='event-default mt-2' value={eventStartDateTime} placeholder='Start date & time' readOnly onClick={() => setEventCalender('open')} />
                      <TbCalendarTime className='icon' />
                    </div>

                  </div>

                  <div className='eventform-ctrl col-span-1'>
                    <div className='form-container'>
                      <input type='text' className='event-default mt-2' value={eventEndDateTime} placeholder='End date & time' readOnly onClick={() => setEventCalender('open')} />
                      <TbCalendarTime className='icon' />
                    </div>

                  </div>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                  <div className='eventform-ctrl col-span-1 mt-4'>
                    <label className='text-[14px] mx-2 text-gray-300'>Venue Name</label>
                    <div className='form-container'>
                      <input type='text' className='event-default mt-2' placeholder='Enter venu name ' name='venue_name' value={formData.venue_name} onChange={handleChange}/>
                      <HiOutlineBuildingOffice2 className='icon' />
                    </div>
                  </div>

                  <div className='eventform-ctrl col-span-1 mt-4'>
                    <label className='text-[14px] mx-2 text-gray-300'>Event Location</label>
                    <div className='form-container'>
                      <input type='text' className='event-default mt-2' placeholder='Enter event location ' name='address' value={formData.address} onChange={handleChange} />
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
                    <textarea rows={8} cols={8} name='event_description' value={formData.event_description} onChange={handleChange} className='event-default mt-2' placeholder='Show your attendence what they can expect from your event ... ' />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                  <div className='eventform-ctrl col-span-1  mt-4'>
                    <label className='text-[14px] mx-2 text-gray-300'>Phone Number</label>

                    <div className='form-container'>
                      <CountryFlags selectedFlag={selectedFlag} getFlagCode={getFlagCode} />
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
                  <button type='button' onClick={() => setOpenTicketView(true)} className='outline'> Add Tickets</button>
                </div>

              </form>

              <div className=' bg-gray-600 w-full my-5 h-px' />
              {/* Created Tickets View*/}
              <Tickets ticketData={formData.tickets} 
              onDeleteTicket={handleDeleteTicket}
              onEditTicket={(ticket) => {
        setSelectedTicket(ticket);
        setOpenEditTicketView(true);
    }}
              />

              <div className='flex gap-4 justify-start items-center ticket-buttons mt-14'>
                {/* <button type='button' className='outline'>Cancle</button> */}
                <button type='button' onClick={handleUpdateEvent}> Submit</button>
              </div>
            </div>

            <div className='col-span-2'>



              {/* Flare Image */}
              <Flare_Poster flayerPoster ={setFormData}/>

              {/* Date Time Picker for Selecting Date and Time for Form */}
              <EventDateTimePicker
                eventStartDateTime={setEventStartDateTime}
                eventEndDateTime={setEventEndDateTime}
                selectedDateTime={eventStartDateTime}
                eventCalender={eventCalender}
                setEventCalender={setEventCalender}
              />

              {/* <div className=' bg-gray-600 w-full mb-5 mt-3 h-px' /> */}

              {/* Tcket View Card to add image for the Event  */}
              <EventTicketView formData={formData} setOpenTicketView={setOpenTicketView} />


              {/* To create/customize Tickets for Events */}
              <AddTickets
                setOpenTicketView={setOpenTicketView}
                openTicketView={openTicketView}
                storeTicketData={storeTicketData}
              />

<EditTickets
    openEditTicketView={openEditTicketView}
    setOpenEditTicketView={setOpenEditTicketView}
    selectedTicket={selectedTicket}
    updateTicketData={updateTicketData}
/>

            </div>

          </div>
        </div>


      </div>

    </>
  )
}

export default EditEvent