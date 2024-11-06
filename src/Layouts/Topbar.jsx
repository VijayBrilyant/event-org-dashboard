import React from 'react'

const Topbar = () => {
    const togglemenu =()=>{
        const mainlayout = document.querySelectorAll('.main_layout');
        const topbarmenu = document.querySelectorAll('.topbarmenu');
        mainlayout.forEach((item)=>{
            item.classList.toggle('toggle_layout')
        })

        topbarmenu.forEach((item)=>{
            item.classList.toggle('toggle_layout')
        })
    }

  return (
    <>
<nav className='topbarmenu'>
<p>topbar</p>
<button type='button' style={{background:"white", color:"black"}} onClick={togglemenu}>toggle menu</button>

</nav>
    </>
  )
}

export default Topbar