import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Learn_more from './components/Learn_more'
import All_Services from './components/All_Services'
import Get_Direction from './components/Get_Direction'

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Location />
    <Contact />
    <Footer />
    <Routes>
      <Route path='/learn_more' element={<Learn_more />} />
      <Route path='/all_service' element={<All_Services />} />
      <Route path='/Get_Direction' element={<Get_Direction />} />
    </Routes>
    </>
  )
}

export default App