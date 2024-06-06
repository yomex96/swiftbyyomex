import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
// import Verify from './pages/Verify/Verify'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import About from './pages/About/About'
import Forgetpassword from './components/Forgetpassword'

// import React, { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Home from './pages/Home/Home'
// import { Route, Routes } from 'react-router-dom'
// import Cart from './pages/Cart/Cart'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import Footer from './components/Footer/Footer'
// import LoginPopUp from './components/LoginPopUp/LoginPopUp'
// import About from './pages/About/About'



const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
        <Navbar setShowLogin={setShowLogin}  />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          {/* <Route path='/verify' element={<Verify />} /> */}
          <Route path='/myorders' element={<MyOrders />} />
          < Route path='/About' element={<About/>} />
          <Route path='/forgetpassword' element={<Forgetpassword/>}/>
          {/* <Route path='/reset-password/:randomString/:expirationTimestamp' element={<Resetpassword/>}/> */}

        </Routes>
      </div>
      <Footer />
    </>
  )
}

// const App = () => {

//   const [showLogin,setShowLogin] = useState(false)

//   return (
//     <>
//     {showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
//     <div className='app'>
//       <Navbar setShowLogin={setShowLogin}/>
//       <Routes>
//         < Route path='/' element={<Home />} />
//         < Route path='/Cart' element={<Cart />} />
//         < Route path='/Order' element={<PlaceOrder />} />
//         < Route path='/About' element={<About/>} />
//       </Routes>
//     </div>
//     <Footer />
//     </>
    
//   )

export default App
