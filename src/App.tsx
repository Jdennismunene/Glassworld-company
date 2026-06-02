import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Learn_more from './components/Learn_more'
import All_Services from './components/All_Services'
import Get_Direction from './components/Get_Direction'

function App() {
  const location = useLocation()

  // hide navbar on this route
  const hideNavbar = location.pathname === '/Get_Direction'

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Location />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/learn_more" element={<Learn_more />} />
        <Route path="/all_service" element={<All_Services />} />
        <Route path="/Get_Direction" element={<Get_Direction />} />
      </Routes>
    </>
  )
}

export default App