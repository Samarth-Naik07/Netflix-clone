import React, { useState } from 'react'
import './signup.css'
import logo from '../../assets/banner.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {
  const [signstate,setSignstate] =useState("Sign In");
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const navigate = useNavigate()

//   const handlesubmit = (e) => {
//     e.preventDefault()
//     axios.post('http://localhost:3001/signup',{name,email,password})
//     .then(result=>{console.log(result)
//       navigate('/')
//     })
//     .catch(err=>console.error(err))
//   }


  return (
    <div className='Login' o="true" >
      <img  src ={logo } className='Login-logo' alt=''/>
      <div className='login-form'> 
        <h1>sign in</h1> 
        <form  onSubmit={handlesubmit}>
          <input value={name}  onChange={(e)=> setName(e.target.value)} type='text' placeholder='your name' /> 
          <input value={email}  onChange={(e)=>setEmail(e.target.value) }type='text' placeholder='email' />
          <input value={password}  onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='password' />
          
          <button type='submit'>{signstate}</button>
          <div className='dis'>
            <div> 
                
                 <p >alread have an account? <link to="/login" href='#'  >sign up</link></p>
             </div>
           
            
            
          </div>
        </form>
        
      </div>
      
    </div>
   )
  }

export default Signin;
