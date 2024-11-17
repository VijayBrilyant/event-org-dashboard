import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CreateEvent from './Pages/Create-Event'

const App = () => {
  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create-event' element={<CreateEvent/>}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App