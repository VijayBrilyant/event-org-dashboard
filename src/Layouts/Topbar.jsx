import React from 'react'
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiArrowRightWideFill } from 'react-icons/ri';
import userImg from '../assets/user.png';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const Topbar = () => {
    const togglemenu = () => {
        const mainlayout = document.querySelectorAll('.main_layout');
        const topbarmenu = document.querySelectorAll('.topbarmenu');
        const toggleArrow = document.querySelectorAll('.icon-arrow');
        const toggleIcon = document.querySelectorAll('.toggle-icon');
        const sidebar = document.querySelectorAll('.sidebar');
        const navcontent = document.querySelectorAll('.nav-content')
        mainlayout.forEach((item) => {
            item.classList.toggle('toggle_layout')
        })

        topbarmenu.forEach((item) => {
            item.classList.toggle('toggle_layout')
        })

        toggleArrow.forEach((item)=>{
            item.classList.toggle('icon-rotate')

        })

        toggleIcon.forEach((item)=>{
            item.classList.toggle('toggle-right')

        })

        sidebar.forEach((item)=>{
            item.classList.toggle('toggle-sidebar')

        })

        navcontent.forEach((item)=>{
            item.classList.toggle('d-none')

        })

    }

    return (
        <>
            <nav className='topbarmenu'>
            <div className='strapbottom-border mx-8 flex justify-end gap-5 items-center' style={{borderBottom:"1px solid gray"}}>

       <div className='nofity'>
       <IoNotificationsOutline className='icon text-[20px] text-gray-400'/>
       </div>

       <div className='user flex items-center gap-3 px-3'>
        <div className='user-icon'>
<img src={userImg} alt=''/>
        </div>
        <div className='info'>
        <p className='text-[13px]'>Manik Jingga</p>
        <p className='text-[10px] text-gray-500'>Admin Store</p>
        </div>

        <HiOutlineDotsHorizontal className='icon text-[20px] text-gray-400 mx-3'/>
       </div>
            </div>
         
                <button type='button' className='toggle-icon' onClick={togglemenu}><RiArrowRightWideFill className='icon-arrow'/></button>

            </nav>
        </>
    )
}

export default Topbar