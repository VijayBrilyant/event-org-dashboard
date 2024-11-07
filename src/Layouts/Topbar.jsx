import React from 'react'
import { RiArrowRightWideFill } from 'react-icons/ri';

const Topbar = () => {
    const togglemenu = () => {
        const mainlayout = document.querySelectorAll('.main_layout');
        const topbarmenu = document.querySelectorAll('.topbarmenu');
        const toggleArrow = document.querySelectorAll('.icon-arrow');
        const toggleIcon = document.querySelectorAll('.toggle-icon');
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

    }

    return (
        <>
            <nav className='topbarmenu'>
            <div className='strapbottom-border mx-8' style={{borderBottom:"1px solid gray"}}>
            <p></p>
            </div>
         
                <button type='button' className='toggle-icon' onClick={togglemenu}><RiArrowRightWideFill className='icon-arrow'/></button>

            </nav>
        </>
    )
}

export default Topbar