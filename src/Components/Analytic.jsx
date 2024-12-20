import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import { HiReceiptRefund } from 'react-icons/hi'
import { IoTicket } from 'react-icons/io5'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { TbRefresh } from 'react-icons/tb'
import AnalyticChart from './Analytic-Chart'



const Analytic = () => {
    const [totalSales, setTotalSales] = useState(0);
    const [totalTickets, setTotalTickets] = useState(0);
    const [visitors, setVisitors] = useState(0);
    const [refunded, setRefunded] = useState(0);
  
    // Function to handle the counter animation
    const animateCounter = (target, setter) => {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(target / 100); // Increment in small steps
        setter(start);
        if (start >= target) clearInterval(interval); // Stop when target is reached
      }, 20); // Adjust time for speed of the counter
    };
  
    useEffect(() => {
      // Trigger the counter animations after the page loads
      animateCounter(12084.02, setTotalSales); // For Total Sales
      animateCounter(28834, setTotalTickets); // For Total Tickets
      animateCounter(18896, setVisitors); // For Visitors
      animateCounter(2871, setRefunded); // For Refunded Amount
    }, []);

    return (
        <>

            <div className='container'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>

                    <div className='col-span-1'>

                        <div className='grid md:grid-cols-2 gap-5'>

                            <div className='col-span-1'>
                                <div className='theme-card rounded-[10px] p-3'>

                                    <div className='card_title flex justify-between items-center gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='icon '>
                                                <RiMoneyDollarCircleFill className='text-[15px] card-icon' />
                                            </div>
                                            <p className='text-[10px] font-[600] text-gray-300' style={{ letterSpacing: "1px" }}>Total Sales</p>

                                        </div>

                                        <div className='refresh'>
                                            <TbRefresh className='refresh-icon' />
                                        </div>
                                    </div>

                                    <h5 className='text-white text-[20px] font-[600] mt-4 mb-1 counter' >{`$${totalSales.toFixed(2)}`}</h5>
                                    <div className='flex items-center gap-1 mb-1 pb-1' style={{ borderBottom: "1px solid #ededed12" }}>
                                        <FiArrowUpRight className='text-[10px]' style={{ color: "#24d5b5" }} />
                                        <p className='text-[10px]' style={{ color: "#24d5b5" }}> 12.3% <span className='text-gray-600'>+$1,453.89 today</span></p>
                                    </div>


                                    <Link to='/'>
                                        <p className='flex gap-2 items-center text-[11px]'>View Report <BsArrowRight /> </p>
                                    </Link>


                                </div>
                            </div>

                            <div className='col-span-1'>
                                <div className='theme-card rounded-[10px] p-3'>

                                    <div className='card_title flex justify-between items-center gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='icon '>
                                                <IoTicket className='text-[15px] card-icon' />
                                            </div>
                                            <p className='text-[10px] font-[600] text-gray-300' style={{ letterSpacing: "1px" }}>Total Tickets</p>

                                        </div>

                                        <div className='refresh'>
                                            <TbRefresh className='refresh-icon' />
                                        </div>
                                    </div>



                                    <h5 className='text-white text-[20px] font-[600] mt-4 mb-1 counter'>{totalTickets}</h5>
                                    <div className='flex items-center gap-1 mb-1 pb-1' style={{ borderBottom: "1px solid #ededed12" }}>
                                        <FiArrowUpRight className='text-[10px]' style={{ color: "#24d5b5" }} />
                                        <p className='text-[10px]' style={{ color: "#24d5b5" }}> 20.1% <span className='text-gray-600'>+2,676 today</span></p>
                                    </div>


                                    <Link to='/'>
                                        <p className='flex gap-2 items-center text-[11px]'>View Report <BsArrowRight /> </p>
                                    </Link>


                                </div>
                            </div>

                            <div className='col-span-1'>
                                <div className='theme-card rounded-[10px] p-3'>

                                <div className='card_title flex justify-between items-center gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='icon '>
                                                <FaUsers className='text-[15px] card-icon' />
                                            </div>
                                            <p className='text-[10px] font-[600] text-gray-300' style={{ letterSpacing: "1px" }}>Vistor</p>

                                        </div>

                                        <div className='refresh'>
                                            <TbRefresh className='refresh-icon' />
                                        </div>
                                    </div>

                                    <h5 className='text-white text-[20px] font-[600] mt-4 mb-1 counter'>{visitors}</h5>
                                    <div className='flex items-center gap-1 mb-1 pb-1' style={{ borderBottom: "1px solid #ededed12" }}>
                                        <FiArrowUpRight className='text-[10px]' style={{ color: "#24d5b5" }} />
                                        <p className='text-[10px]' style={{ color: "#24d5b5" }}> 5.6% <span className='text-gray-600'>+676 today</span></p>
                                    </div>


                                    <Link to='/'>
                                        <p className='flex gap-2 items-center text-[11px]'>View Report <BsArrowRight /> </p>
                                    </Link>


                                </div>
                            </div>

                            <div className='col-span-1'>
                                <div className='theme-card rounded-[10px] p-3'>

                                <div className='card_title flex justify-between items-center gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='icon '>
                                                <HiReceiptRefund className='text-[15px] card-icon' />
                                            </div>
                                            <p className='text-[10px] font-[600] text-gray-300' style={{ letterSpacing: "1px" }}>Refunded</p>

                                        </div>

                                        <div className='refresh'>
                                            <TbRefresh className='refresh-icon' />
                                        </div>
                                    </div>


                                    <h5 className='text-white text-[20px] font-[600] mt-4 mb-1 counter'>{`$${refunded.toFixed(2)}`}</h5>
                                    <div className='flex items-center gap-1 mb-1 pb-1' style={{ borderBottom: "1px solid #ededed12" }}>
                                        <FiArrowDownRight className='text-[10px]' style={{ color: "#ff0033" }} />
                                        <p className='text-[10px]' style={{ color: "#ff0033" }}> -5.6% <span className='text-gray-600'>$-676 today</span></p>
                                    </div>


                                    <Link to='/'>
                                        <p className='flex gap-2 items-center text-[11px]'>View Report <BsArrowRight /> </p>
                                    </Link>


                                </div>
                            </div>

                        </div>


                    </div>

                    <div className='col-span-1'>
                       <AnalyticChart/>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Analytic