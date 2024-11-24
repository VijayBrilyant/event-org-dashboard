import React, { useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { RiArrowRightWideFill } from 'react-icons/ri';

const EditTickets = ({ openEditTicketView, setOpenEditTicketView, selectedTicket, updateTicketData }) => {
    const [salesPeriod, setSalesPeriod] = useState(false);
    const [validTime, setValidTime] = useState(false);
    const [limitQty, setLimitQty] = useState(false);

    const [getTicketData, setGetTicketData] = useState(selectedTicket || {
        id: '',
        ticket_name: '',
        qty: '',
        price: '',
        sale_start: '',
        sale_end: '',
        valid_start: '',
        valid_end: '',
        ticket_description: ''
        // hideTire: false,
        // hideTicket: false,
        // disableTicket: false
    })

    useEffect(() => {
        if (selectedTicket) {
            setGetTicketData(selectedTicket);
        }
    }, [selectedTicket]);

    const handleChange = (e) => {
        setGetTicketData({ ...getTicketData, [e.target.name]: e.target.value })
    }

    const handleCheckBox = (e) => {
        const { name, checked } = e.target;
        setGetTicketData((prev) => ({ ...prev, [name]: checked }))
    }


    const handleUpdateTicket = () => {
        updateTicketData(getTicketData); // Send updated ticket data to parent
        setOpenEditTicketView(false); // Close the EditTickets modal
    };

    return (
        <>
            <div className={`side-ticked-card ${openEditTicketView === true ? 'open-side-ticket-card' : ''}`}>

                <div className='ticket-form px-10 py-5'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[30px] text-gray-400'>Edit Ticket</h3>

                        <button type='button' onClick={() => setOpenEditTicketView(false)} className='close-ticket'><GrClose className='text-[30px]' /></button>
                    </div>

                    <div className=' bg-gray-600 w-full my-5 h-px' />

                    <form >

                        <div className='grid md:grid-cols-5 grid-cols-2 gap-1 my-5'>

                            <div className='col-span-3 ticket-form-ctrl'>
                                <label>Name</label>
                                <input type='text' placeholder='Ticket Name'  value={getTicketData.ticket_name || '' } name='ticket_name' onChange={handleChange} />
                            </div>

                            <div className='col-span-1 ticket-form-ctrl'>
                                <label>Qty</label>
                                <input type='number' placeholder='Unlimited' name='qty' value={getTicketData.qty || '' }  onChange={handleChange} />
                            </div>

                            <div className='col-span-1 ticket-form-ctrl'>
                                <label>Price</label>
                                <input type='number' placeholder='$' name='price'   value={getTicketData.price || ''}  onChange={handleChange} />
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
                                        <input type='dateTime-local' placeholder='Start Date' className='col-span-5' name='sale_start' onChange={handleChange} />
                                        <p className='col-span-1 flex justify-center m-0'><RiArrowRightWideFill /></p>
                                        <input type='dateTime-local' placeholder='End Date' className='col-span-5' name='sale_end' onChange={handleChange} />
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
                                        <input type='dateTime-local' placeholder='Start Time' className='col-span-5' name='valid_start' onChange={handleChange} />
                                        <p className='col-span-1 flex justify-center m-0'><RiArrowRightWideFill /></p>
                                        <input type='dateTime-local' placeholder='End Time' className='col-span-5' name='valid_end' onChange={handleChange} />
                                    </div>
                                </div>
                            ) : (
                                <div className='col-span-2' />
                            )}

                        </div>

                        <div className='ticket-form-ctrl'>
                            <label>Description</label>
                            {/* <textarea cols={4} rows={4} placeholder='' type='text' name='ticket_description' onChange={handleChange}  /> */}
                            <input type='text' placeholder='Description'  value={getTicketData.ticket_description || ''}  className='col-span-5' name='ticket_description' onChange={handleChange} />
                        </div>



                        {/* Ticket Options */}
                        <div className=' bg-gray-700 w-full my-5 h-px' />

                        <h4>Ticket Options</h4>

                        {/* <div className='grid grid-cols-4 gap-1 my-5'>

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
                        </div> */}

                        {/* Hide Tier */}
                        {/* <div className='grid grid-cols-4 gap-1 my-5'>

                            <div className='col-span-2 ticket-form-ctrl'>

                                <label htmlFor='hideTire' className='checkbox-custom-label'>
                                    <input type='checkbox' name='hideTire' id='hideTire'
                                        checked={getTicketData.hideTire}
                                        onChange={handleCheckBox}
                                    />
                                    <span className='checkbox-custom'></span> <p className='text-[10px]'>Hide Tier
                                        <br />
                                        <span className='text-gray-400 font-[200]'>Customers will not see this ticket</span>
                                    </p>
                                </label>

                            </div>

                        </div> */}

                        {/* Hide Ticket */}
                        {/* <div className='grid grid-cols-4 gap-1 my-5'>

                            <div className='col-span-2 ticket-form-ctrl'>

                                <label htmlFor='hideTicket' className='checkbox-custom-label'>
                                    <input type='checkbox' name='hideTicket' id='hideTicket'
                                        checked={getTicketData.hideTicket}
                                        onChange={handleCheckBox}
                                    />
                                    <span className='checkbox-custom'></span> <p className='text-[10px]'>Hide Price
                                        <br />
                                        <span className='text-gray-400 font-[200]'>Customers will not see the price of this ticket</span>
                                    </p>
                                </label>

                            </div>

                        </div> */}

                        {/* Disable Ticket */}
                        {/* <div className='grid grid-cols-4 gap-1 my-5'>

                            <div className='col-span-4 ticket-form-ctrl'>

                                <label htmlFor='disableTicket' className='checkbox-custom-label'>
                                    <input type='checkbox' name='disableTicket' id='disableTicket'
                                        checked={getTicketData.disableTicket}
                                        onChange={handleCheckBox}
                                    />
                                    <span className='checkbox-custom'></span> <p className='text-[10px]'>Disable Ticket
                                        <br />
                                        <span className='text-gray-400 font-[200]'>Ticket remains visible but customers will not be able to purchase this ticket</span>
                                    </p>
                                </label>

                            </div>

                        </div> */}



                        <div className='flex gap-4 justify-end items-center ticket-buttons mt-14'>
                            <button type='button' className='outline'>Cancle</button>
                            <button type='button' onClick={handleUpdateTicket}>Update Ticket</button>
                        </div>
                    </form>

                </div>

                <div className={`overlayblack-blur ${openEditTicketView === true ? 'open-overlayblack-blur' : ''}`} onClick={() => setOpenEditTicketView(false)} />
            </div>
        </>
    )
}

export default EditTickets