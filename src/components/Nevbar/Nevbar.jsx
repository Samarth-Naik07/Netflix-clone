import React, { useEffect, useRef } from 'react'
import './Nevbar.css'
import logo from "../../assets/BrandAssets_Logos_02-NSymbol.jpg"
import search from "../../assets/search5.jpg"
import profile from "../../assets/profile.png"
import bell_icon from "../../assets/bell-icon.png"
import dropdown from "../../assets/dropdown.png"
import { useNavigate } from 'react-router-dom'

const Nevbar = () => {

  const navRef = useRef();

  useEffect(() =>{
    window.addEventListener('scroll',()=>{
    if (window.scrollY >=80){
      navRef.current.classList.add('nevdark')
    }else{
      navRef.current.classList.remove('nevdark')
    }
  })
},[])


const navigate = useNavigate()


// document.getElementById("demo").addEventListener("click", myFunction);

function myFunction (){
  navigate('/login');
}

  return (



    <div className='nevbar'>

      <div ref={navRef} className="nevbar-left">
        <img src={logo} alt='' />
        <ul>
          <li>Home</li>
          <li>Tv show</li>
          <li>Web series</li>
          <li>Kids</li>
          <li>Movies</li>
          <li>Mylist</li>

        </ul>
      </div>
      <div className="nevbar-right">
        <img src={search} alt='' className='icon' />
        <p>children</p>
        <img src={bell_icon} alt='' className='bell_icon' />
        <div className='nevbar-profile'>
          <img src={profile} alt='' className='profile' />
          <img src={dropdown} alt='' />
          <div className='dpdown'>
            <p id="demo" onClick={()=>myFunction()}>logout</p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Nevbar
