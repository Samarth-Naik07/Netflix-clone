import React from 'react'
import Home from './pages/Home/Home.jsx'
import Reset from './pages/otp/otp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/login/login.jsx'
import Npassword from './pages/Npassword/Npassword.jsx'
import Rpassword from './pages/Rpassword/Rpassword.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Signup from './pages/signup/signup.jsx'


const App = () => {
  return (
      <div>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path ='/otp' element={<Reset />}></Route>  
          <Route path ='/Npassword' element={<Npassword />}></Route>
          <Route path ='/reset-password/:userId/:token' element={<Rpassword />}></Route>
          
          

        </Routes>
       </div>
    
  
    




  )
}

export default App
