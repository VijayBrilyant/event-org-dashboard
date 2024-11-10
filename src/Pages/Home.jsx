import React, { useEffect, useState } from 'react'
import Topbar from '../Layouts/Topbar'
import Sidebar from '../Layouts/Sidebar'
import Analytic from '../Components/Analytic'
import RecentActivity from '../Components/Recent-Activity'

const Home = () => {

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return 'Good Morning';
      if (hour >= 12 && hour < 17) return 'Good Afternoon';
      if (hour >= 17 && hour < 21) return 'Good Evening';
      return 'Good Night';
    };

    setGreeting(getGreeting());
  }, []);

  return (
    <>
      <Topbar />
      <Sidebar />

      <div className='main_layout pt-5 pb-5 px-8'>

        <div className='greet mb-6'>
          <h1 className='text-[30px]'>{greeting}, Manik</h1>
          <p className='text-gray-400 text-[12px]'>Here's your analytic details</p>
        </div>


        <Analytic />

        <RecentActivity />

      </div>
    </>
  )
}

export default Home