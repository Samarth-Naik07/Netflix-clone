import React from 'react'
import './Home.css'
import Nevbar from '../../components/Nevbar/Nevbar'
import hero_banner from '../../assets/bgimage.webp'
import hname from '../../assets/Nmovie.png'
import pbtn from '../../assets/play.png'
import wlater from '../../assets/wlater.png'
import Titlecards from '../../components/Titlecards/Titlecards'


const Home = () => {
  return (
    <div className='home'>
      <Nevbar />
      <div className='herro'>
        <img src={hero_banner} alt='' className='banner-image' />
        <div className='herro-camption'>
          <img src={hname} alt="" className='hcaptions' />
          <p> After Thanos, an intergalactic warlord, disintegrates half  of the universe,<br></br>
            the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.</p>
           <div className='h-btn'>
            
            <button className='btn'><img src={pbtn} />play</button>
            <button className='btn dark_btn'><img src={wlater} />watch later</button>
           </div>
        </div>
        <Titlecards/>


      </div>
    </div>
  )
}

export default Home
