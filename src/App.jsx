import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CreateEvent from './Pages/Create-Event'
import Events from './Pages/Events'
import EditEvent from './Pages/Edit-Event'

const App = () => {
  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/event-list' element={<Events/>}/>
    <Route path='/create-event' element={<CreateEvent/>}/>
    <Route path='/edit-event/:id' element={<EditEvent/>}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App