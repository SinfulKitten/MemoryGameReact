import React from 'react'
import '../style/SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        console.log('disabled')
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={card.matched ? "matched" : ""}>
                <div className={flipped ? "flipped" : ""}>
                    <img className="front" src={card.src} alt="card front" />
                    <img className="back" src="/images/cover.png" onClick={handleClick} alt="cover" />
                </div>
            </div>
        </div>
    )
}