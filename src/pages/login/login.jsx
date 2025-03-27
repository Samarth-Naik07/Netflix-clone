import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/banner.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import bcrypt from "bcryptjs"


const login = () => {
  const [signstate,setSignstate] =useState("Sign In");
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const navigate = useNavigate()
  const [error, setError] = useState('');
  
  


  const handlesubmit = (e) => {
    e.preventDefault();
    setError('');
    if (signstate === 'Sign In') {
      handleSignIn();
    } else {
      handleSignUp();
    }
  }


  const handleSignIn = async () => {
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result)
     if (result.data.message === 'Login successful') {
        navigate('/');
      }
      else {
        
        console.error(err=>setError(result.data.err)
        )
      }
    })
    .catch(err=>console.error(err))
    {
      setError('Invalid email or password')
    }
  }



  const  handleSignUp = (e) => {
    
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>{console.log(result)
      navigate('/')
    })
    .catch(err=>console.error(err))
  }


  return (
    <div className='Login' o="true" >
      <img  src ={logo } className='Login-logo' alt=''/>
      <div className='login-form'> 
        <h1>{signstate}</h1> 
        <form  onSubmit={handlesubmit}>
          {signstate==="Sign Up"?<input value={name}  onChange={(e)=> setName(e.target.value)} type='text' placeholder='your name' /> :<></>}
          <input value={email}  onChange={(e)=>setEmail(e.target.value) }type='text' placeholder='email' />
          <input value={password}  onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='password' />
          
          <button type='submit'>{signstate}</button>
          <div className='dis'>
            {signstate==="Sign In"?
            <div> 
                 <p >Forgot Password?<b  className="b" href='#' onClick={()=>{
                  navigate ("/otp")
 
                 }}>try</b></p>
                 <p >Don't have an account? <a href='#' onClick={()=>setSignstate("Sign Up")}>Sign up</a></p>
             </div>
           
            :<></>
             }

            
          </div>
        </form>
        
      </div>
      
    </div>
   )
  }

export default login;
