import React, { useEffect, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { IoTicketOutline } from 'react-icons/io5'
import { MdModeEditOutline } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { TfiTime } from 'react-icons/tfi'

const Tickets = ({ ticketData,  onDeleteTicket, onEditTicket }) => {

    return (
        <>

            <h2 className='text-[30px]'>Tickets</h2>

            {ticketData.length > 0 ? (
                ticketData.map((items, index) => (
                    <div className='tkt-card p-3 rounded-[10px] my-10' key={index}>
                        <div className='grid md:grid-cols-6 items-center'>

                            <div className='col-span-2'>
                                <div className='date-info'>
                                    <div className='fixed-calender'>
                                        <h4 className='text-center text-[40px] font-400 mb-1'>24</h4>
                                        <p className='text-center text-[12px]'>Feb</p>
                                    </div>

                                    <div className='vertical-line' />
                                    <div className='fixed-calender'>
                                        <h4 className='text-center text-[40px] font-400 mb-1'>03</h4>
                                        <p className='text-center text-[10px]'>Apr</p>
                                    </div>

                                    <div className='up-dot' />
                                    <div className='down-dot' />
                                </div>
                            </div>

                            <div className='col-span-3'>
                                <div className='more-info px-10'>
                                    <span className='text-gray-600 text-[10px] font-[700]'>Time-Bound Ticket</span>
                                    <h5 className='text-[30px]'>Default Ticket</h5>
                                    <p className='text-[10px] flex gap-1 items-center'><TfiTime />
                                        Sale Period : 20/Jan/24 to 01/Feb/24
                                    </p>

                                    <p className='text-[10px] flex gap-1 items-center'><IoTicketOutline /> Qty: 100</p>

                                    <p className='text-gray-500 text-[10px] mt-3'>This ticket grants access without a fixed validity period, offering maximum flexibility for usage. ...
                                    </p>

                                </div>
                            </div>

                            <div className='col-span-1'>
                                <p className='text-[40px] flex gap-1 items-center'><BsCurrencyDollar className='text-[90px]' /> {items.price}</p>
                            </div>

                        </div>

                        <div className='actions flex gap-5 items-center'>
                            <button type='button' className='edit'  onClick={() => onEditTicket(items)}><MdModeEditOutline className='icon' /></button>
                            <button type='button' className='delete' onClick={() => onDeleteTicket(index)}><RiDeleteBin6Line className='icon' /></button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No Tickets Added</p>
            )}

            {/* <div className='tkt-card p-3 rounded-[10px] my-10'>
                <div className='grid md:grid-cols-6 items-center'>

                    <div className='col-span-2'>
                        <div className='date-info'>
                            <div className='fixed-calender'>
                                <h4 className='text-center text-[40px] font-400 mb-1'>24</h4>
                                <p className='text-center text-[12px]'>Feb</p>
                            </div>

                            <div className='vertical-line' />
                            <div className='fixed-calender'>
                                <h4 className='text-center text-[40px] font-400 mb-1'>03</h4>
                                <p className='text-center text-[10px]'>Apr</p>
                            </div>

                            <div className='up-dot' />
                            <div className='down-dot' />
                        </div>
                    </div>

                    <div className='col-span-3'>
                        <div className='more-info px-10'>
                            <span className='text-gray-600 text-[10px] font-[700]'>Time-Bound Ticket</span>
                            <h5 className='text-[30px]'>Default Ticket</h5>
                            <p className='text-[10px] flex gap-1 items-center'><TfiTime />
                                Sale Period : 20/Jan/24 to 01/Feb/24
                            </p>

                            <p className='text-[10px] flex gap-1 items-center'><IoTicketOutline /> Qty: 100</p>

                            <p className='text-gray-500 text-[10px] mt-3'>This ticket grants access without a fixed validity period, offering maximum flexibility for usage. ...
                            </p>

                        </div>
                    </div>

                    <div className='col-span-1'>
                        <p className='text-[40px] flex gap-1 items-center'><BsCurrencyDollar className='text-[90px]' /> 25.00</p>
                    </div>

                </div>

                <div className='actions flex gap-5 items-center'>
                    <button type='button' className='edit'><MdModeEditOutline className='icon'/></button>
                    <button type='button' className='delete'><RiDeleteBin6Line className='icon'/></button>
                </div>
            </div> */}

            {/* <div className='tkt-card p-3 rounded-[10px] my-10'>
                <div className='grid md:grid-cols-6 items-center'>

                    <div className='col-span-2'>
                        <div className='date-info'>
                            <h5 className='h-full' style={{ lineHeight: "9" }}>Open Ticket</h5>

                            <div className='up-dot' />
                            <div className='down-dot' />
                        </div>
                    </div>

                    <div className='col-span-3'>
                        <div className='more-info px-10'>
                            <span className='text-gray-600 text-[10px] font-[700]'>Flexible Ticket</span>
                            <h5 className='text-[30px]'>Default Ticket</h5>
                            <p className='text-[10px] flex gap-1 items-center'><TfiTime />
                                Sale Period : 20/Jan/24 to 01/Feb/24
                            </p>

                            <p className='text-[10px] flex gap-1 items-center'><IoTicketOutline /> Qty: 100</p>

                            <p className='text-gray-500 text-[10px] mt-3'>This ticket grants access without a fixed validity period, offering maximum flexibility for usage. ...
                            </p>

                        </div>
                    </div>

                    <div className='col-span-1'>
                        <p className='text-[40px] flex gap-1 items-center'><BsCurrencyDollar className='text-[90px]' /> 80.00</p>
                    </div>

                </div>


                <div className='actions flex gap-5 items-center'>
                    <button type='button' className='edit'><MdModeEditOutline className='icon'/></button>
                    <button type='button' className='delete'><RiDeleteBin6Line className='icon'/></button>
                </div>
            </div> */}

{/* 
            <EditTickets
                openEditTicketView={openEditTicketView}
                setOpenEditTicketView={setOpenEditTicketView}
                selectedTicket={selectedTicket} /> */}
                
        </>
    )
}

export default Tickets