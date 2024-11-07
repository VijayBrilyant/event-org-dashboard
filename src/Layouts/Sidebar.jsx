import React from 'react';
import logoImg from '../assets/logo3.png';

const Sidebar = () => {
  return (
    <>
      <nav className='sidebar'>
        <div className='logo flex items-center gap-4 mt-3 mx-2'>
          <img src={logoImg} alt='' />
          <h5 className='font-[700]'>Asana Spa</h5>
        </div>
      </nav>
    </>
  )
}

export default Sidebar