import React from 'react'
import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) {


    const handleClick = () => {

    }

  return (
    <div className='card'>
      <div>
        <img className='front' src={card.src} alt="card front" />
        <img className='back' src="/images/cover.png" 
        onClick={handleClick} alt="card back" />
      </div>
  </div>
  )
}
