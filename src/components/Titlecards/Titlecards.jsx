import React, { useEffect, useRef } from 'react'
import './Titlecards.css'
import cards from '../../assets/movies/cards'



const Titlecards = () => {



  const cardsRef = useRef();

  const handelwheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollleft += event.deltaY;
  }



  return (
    <div className='a'> 
    <div className='titlecards'>
      <h2>popular </h2>
      <div className='card_list' ref={cardsRef}>
        {cards.map((cards, index) => {
          return <div className='card' key={index}>
            <img src={cards.image} alt="" />
            <h3>{cards.name}</h3>
          </div>

        })}
      </div>
    </div>
    </div>
  )
}

export default Titlecards
