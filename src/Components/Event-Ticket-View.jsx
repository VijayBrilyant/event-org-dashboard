import React from 'react'
import EvntImg from '../assets/halloween.png';
import { IoLocationOutline } from 'react-icons/io5';
import { MdAdd, MdOutlineAccessTime } from 'react-icons/md';

const EventTicketView = ({ formData, setOpenTicketView }) => {
    return (
        <>
            <div className='ticket-card rounded-[10px]'>
                <div className='ticket-image'>
                    <img src={EvntImg} alt='' />
                </div>

                <div className='ticket-populate'>
                    <div className='flex justify-between'>
                        <div className='info'>
                            <h2 className='text-[20px] text-gray-300'>{formData.eventname === '' ? 'Event Title' : formData.eventname}</h2>
                            <p className='text-[10px] '>Party Event</p>
                        </div>

                        <div className='event-date'>

                        </div>

                    </div>

                    <div className='flex items-center gap-3 mt-1'>
                        <p className='text-[10px] flex items-center gap-1'><IoLocationOutline /> London </p>
                        <p className='text-[10px] flex items-center gap-1'><MdOutlineAccessTime /> 8:00 PM </p>
                    </div>

                    <p className='text-[20px] mt-4'>About Event</p>
                    {/* <p className='text-[10px] text-gray-500'>Halloween is a holiday celebrated on October 31 that marks the beginning of Allhallowtide, a time to remember the dead. </p> */}

                    <p className='animate-pulse text-[10px]  h-2 bg-gray-800 rounded my-1'></p>
                    <p className='animate-pulse text-[10px]  h-2 bg-gray-800 rounded my-1'></p>


                    <button type='button' 
                    className='white-btn rounded-[8px] flex justify-center items-center text-[12px] mt-11'
                    onClick={()=>setOpenTicketView(true)}
                    >
                    <MdAdd className='text-[20px]' />
                     Add tickets</button>
                </div>

            </div>
        </>
    )
}

export default EventTicketView