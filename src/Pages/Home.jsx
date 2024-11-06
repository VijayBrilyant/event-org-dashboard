import React from 'react'
import Topbar from '../Layouts/Topbar'
import Sidebar from '../Layouts/Sidebar'

const Home = () => {
  

  return (
    <>
    <Topbar />
<Sidebar/>

    <div className='main_layout'>
    <p>Home Page</p>
    </div>
    </>
  )
}

export default Home