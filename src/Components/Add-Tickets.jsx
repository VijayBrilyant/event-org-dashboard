import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { RiArrowRightWideFill } from 'react-icons/ri';

const AddTickets = ({setOpenTicketView, openTicketView}) => {
    const [salesPeriod, setSalesPeriod] = useState(false);
    const [validTime, setValidTime] = useState(false);
    const [limitQty, setLimitQty] = useState(false);
    const [hideTire, setHideTire] = useState(false);
    const [hideTicket, setHideTicket] = useState(false);
    const [disableTicket, setDisableTicket] = useState(false);
    return (
        <>
            <div className={`side-ticked-card ${openTicketView === true ? 'open-side-ticket-card':''}`}>

                <div className='ticket-form px-10 py-5'>
                <div className='flex justify-between items-center'>
                <h3 className='text-[30px] text-gray-400'>Add Ticket</h3>

<button type='button' onClick={()=>setOpenTicketView(false)} className='close-ticket'><GrClose className='text-[30px]' /></button>
                </div>

                    <div className=' bg-gray-600 w-full my-5 h-px' />

                    <form >

                        <div className='grid md:grid-cols-5 grid-cols-2 gap-1 my-5'>

                            <div className='col-span-3 ticket-form-ctrl'>
                                <label>Name</label>
                                <input type='text' placeholder='Ticket Name' />
                            </div>

                            <div className='col-span-1 ticket-form-ctrl'>
                                <label>Qty</label>
                                <input type='number' placeholder='Unlimited' />
                            </div>

                            <div className='col-span-1 ticket-form-ctrl'>
                                <label>Price</label>
                                <input type='number' placeholder='$' />
                            </div>

                        </div>

                        {/* To Select  Start and End Date */}
                        <div className='grid grid-cols-4 gap-1 my-5'>

                            <div className='col-span-2 ticket-form-ctrl'>

                                <label htmlFor='salesperiod' className='checkbox-custom-label'>
                                    <input type='checkbox' name='salesperiod' id='salesperiod'
                                        checked={salesPeriod}
                                        onChange={(e) => setSalesPeriod(e.target.checked)}
                                    />
                                    <span className='checkbox-custom'></span> <p className='text-[10px]'>Sale Period<br />
                                        <span className='text-gray-400 font-[200]'>When can the customer purchase this ticket?</span>
                                    </p>
                                </label>

                            </div>

                            {salesPeriod ? (
                                <div className='col-span-2'>
                                    <div className='grid grid-cols-11 ticket-form-ctrl items-center'>
                                        <input type='number' placeholder='Start Date' className='col-span-5' />
                                        <p className='col-span-1 flex justify-center m-0'><RiArrowRightWideFill /></p>
                                        <input type='number' placeholder='End Date' className='col-span-5' />
                                    </div>
                                </div>
                            ) : (
                                <div className='col-span-2' />
                            )}
                        </div>


                        {/* To Select Valid time */}
                        <div className='grid grid-cols-4 gap-1 my-5'>

                            <div className='col-span-2 ticket-form-ctrl'>

                                <label htmlFor='vaildity' className='checkbox-custom-label'>
                                    <input type='checkbox' name='vaildity' id='vaildity'
                                        checked={validTime}
                                        onChange={(e) => setValidTime(e.target.checked)}
                                    />
                                    <span className='checkbox-custom'></span> <p className='text-[10px]'>Valid From<br />
                                        <span className='text-gray-400 font-[200]'>When can the customers use these tickets?</span>
                                    </p>
                                </label>

                            </div>

                            {validTime ? (
                                <div className='col-span-2'>
                                    <div className='grid grid-cols-11 ticket-form-ctrl items-center'>
                                        <input type='number' placeholder='Start Time' className='col-span-5' />
                                        <p className='col-span-1 flex justify-center m-0'><RiArrowRightWideFill /></p>
                                        <input type='number' placeholder='End Time' className='col-span-5' />
                                    </div>
                                </div>
                            ) : (
                                <div className='col-span-2' />
                            )}

                        </div>

                        <div className='ticket-form-ctrl'>
                            <label>Description</label>
                            <textarea cols={4} rows={4} placeholder='' />
                        </div>



                        {/* Ticket Options */}
                        <div className=' bg-gray-700 w-full my-5 h-px' />

                        <h4>Ticket Options</h4>
                        <div className='grid grid-cols-4 gap-1 my-5'>

                            <div className='col-span-2 ticket-form-ctrl'>

                                <label htmlFor='limitqty' className='checkbox-custom-label'>
                                    <input type='checkbox' name='limitqty' id='limitqty'
                                        checked={limitQty}
                                        onChange={(e) => setLimitQty(e.target.checked)}
                                    />
                                    <span className='checkbox-custom'></span> <p className='text-[10px]'>Limit Purchase Qty
                                        <br />
                                        <span className='text-gray-400 font-[200]'>How many tickets can customers buy?</span>
                                    </p>
                                </label>

                            </div>

                            {limitQty ? (
                                <div className='col-span-2'>
                                    <div className='grid grid-cols-11 ticket-form-ctrl items-center'>
                                        <input type='number' placeholder='Min 1' className='col-span-5' />
                                        <p className='col-span-1 flex justify-center m-0'><RiArrowRightWideFill /></p>
                                        <input type='number' placeholder='Max 10' className='col-span-5' />
                                    </div>
                                </div>
                            ) : (
                                <div className='col-span-2' />
                            )}
                        </div>

                        {/* Hide Tier */}
                        <div className='grid grid-cols-4 gap-1 my-5'>

                            <div className='col-span-2 ticket-form-ctrl'>

                                <label htmlFor='hideTire' className='checkbox-custom-label'>
                                    <input type='checkbox' name='hideTire' id='hideTire'
                                        checked={hideTire}
                                        onChange={(e) => setHideTire(e.target.checked)}
                                    />
                                    <span className='checkbox-custom'></span> <p className='text-[10px]'>Hide Tier
                                        <br />
                                        <span className='text-gray-400 font-[200]'>Customers will not see this ticket</span>
                                    </p>
                                </label>

                            </div>

                        </div>

                        {/* Hide Ticket */}
                        <div className='grid grid-cols-4 gap-1 my-5'>

                            <div className='col-span-2 ticket-form-ctrl'>

                                <label htmlFor='hideTicket' className='checkbox-custom-label'>
                                    <input type='checkbox' name='hideTicket' id='hideTicket'
                                        checked={hideTicket}
                                        onChange={(e) => setHideTicket(e.target.checked)}
                                    />
                                    <span className='checkbox-custom'></span> <p className='text-[10px]'>Hide Price
                                        <br />
                                        <span className='text-gray-400 font-[200]'>Customers will not see the price of this ticket</span>
                                    </p>
                                </label>

                            </div>

                        </div>

                        {/* Disable Ticket */}
                        <div className='grid grid-cols-4 gap-1 my-5'>

                            <div className='col-span-4 ticket-form-ctrl'>

                                <label htmlFor='disableTicket' className='checkbox-custom-label'>
                                    <input type='checkbox' name='disableTicket' id='disableTicket'
                                        checked={disableTicket}
                                        onChange={(e) => setDisableTicket(e.target.checked)}
                                    />
                                    <span className='checkbox-custom'></span> <p className='text-[10px]'>Disable Ticket
                                        <br />
                                        <span className='text-gray-400 font-[200]'>Ticket remains visible but customers will not be able to purchase this ticket</span>
                                    </p>
                                </label>

                            </div>

                        </div>



                        <div className='flex gap-4 justify-end items-center ticket-buttons mt-14'>
                            <button type='button' className='outline'>Cancle</button>
                            <button type='button'>Create Ticket</button>
                        </div>
                    </form>

                </div>

                <div className={`overlayblack-blur ${openTicketView === true ? 'open-overlayblack-blur':''}`} onClick={()=>setOpenTicketView(false)}/>
            </div>
        </>
    )
}

export default AddTickets