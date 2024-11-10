import React, { useState } from 'react';
import logoImg from '../assets/logo3.png';
import {  RiHome3Fill, RiHome3Line, RiSettings4Fill, RiSettings4Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { MdEmojiEvents, MdOutlineEmojiEvents } from 'react-icons/md';
import { IoHelpBuoyOutline, IoHelpBuoySharp, IoTicket, IoTicketOutline } from 'react-icons/io5';
import { BsFileBarGraph, BsFillFileBarGraphFill } from 'react-icons/bs';


const Sidebar = () => {
  const location = useLocation()
 const [currentLocation, setcurrentLocation] = useState(location.pathname)
  console.log(currentLocation)
  return (
    <>
      <nav className='sidebar'>
        <div className='logo flex items-center gap-4 mt-3 mx-2'>
          <img src={logoImg} alt='' />
          {/* <h5 className='font-[700] nav-content'>Asana Spa</h5> */}
        </div>

        <div className='nav-list pt-12 mt-10'>

        <Link to='/'>
        <div className={`flex gap-3 items-center  relative py-2 mx-3 my-4 px-2 ${currentLocation === '/' ? 'nav-active' : 'nav-link'} `}>
        <div className='com-icon adj-icons'>
        { currentLocation === '/'? (<RiHome3Fill  className='text-[20px] mx-1 '/> ):(<RiHome3Line  className='text-[20px] mx-1'/> )  }
        </div>
        <p className='text-[13px] nav-content'>Dashboard</p>
        </div>
        </Link>

        <Link to='/events'>
        <div className={`flex gap-3 items-center  relative py-2 mx-3 my-4 px-2 ${currentLocation === '/events' ? 'nav-active' : 'nav-link'} `}>
        <div className='com-icon adj-icons'>
        { currentLocation === '/events'? (<MdEmojiEvents  className='text-[20px] mx-1'/> ):(<MdOutlineEmojiEvents  className='text-[20px] mx-1'/> )  }

        </div>
        <p className='text-[13px] nav-content'>Events</p>
        </div>
        </Link>

        <Link to='/tickets'>
        <div className={`flex gap-3 items-center  relative py-2 mx-3 my-4 px-2 ${currentLocation === '/tickets' ? 'nav-active' : 'nav-link'} `}>
        <div className='com-icon adj-icons'>
        { currentLocation === '/tickets'? (<IoTicket  className='text-[20px] mx-1'/> ):(<IoTicketOutline  className='text-[20px] mx-1'/> )  }
          
          </div>
        <p className='text-[13px] nav-content'>Tickets</p>
        </div>
        </Link>

        <Link to='/reports'>
        <div className={`flex gap-3 items-center  relative py-2 mx-3 my-4 px-2 ${currentLocation === '/reports' ? 'nav-active' : 'nav-link'} `}>
        <div className='com-icon adj-icons'>
        { currentLocation === '/reports'? (<BsFillFileBarGraphFill  className='text-[20px] mx-1'/> ):(<BsFileBarGraph  className='text-[20px] mx-1'/> )  }
        </div>
        <p className='text-[13px] nav-content'>Reports</p>
        </div>
        </Link>

       

       <div className='helper-nav'>
       <Link to='/settings'>
        <div className={`flex gap-3 items-center  relative py-2 mx-3 my-3 px-2 ${currentLocation === '/settings' ? 'nav-active' : 'nav-link'} `}>
        <div className='com-icon adj-icons'>
        { currentLocation === '/settings'? (<RiSettings4Fill  className='text-[20px] mx-1'/> ):(<RiSettings4Line  className='text-[20px] mx-1'/> )  }
        </div>
        <p className='text-[13px] nav-content'>Settings</p>
        </div>
        </Link>

        <Link to='/help'>
        <div className={`flex gap-3 items-center  relative py-2 mx-3 my-3 px-2 ${currentLocation === '/help' ? 'nav-active' : 'nav-link'} `}>
        <div className='com-icon adj-icons'>
        { currentLocation === '/help'? (<IoHelpBuoySharp  className='text-[20px] mx-1'/> ):(<IoHelpBuoyOutline  className='text-[20px] mx-1'/> )  }
        </div>
        <p className='text-[13px] nav-content'>Help Center</p>
        </div>
        </Link>
       </div>  
        </div>
      </nav>
    </>
  )
}

export default Sidebar