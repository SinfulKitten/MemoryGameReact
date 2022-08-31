import React from 'react'
import '../style/SingleCard.css'
import _ from "lodash";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        
        if (!disabled) {
            handleChoice(card)
        }
    }
//still working on double click issue
    const handledoubleClick = _.debounce(handleClick, 300)

    return (
        <div className="card">
            <div className={card.matched ? "matched" : ""}>
                <div className={flipped ? "flipped" : ""}>
                    <img className="front" src={card.src} alt="card front" />
                    <img className="back" src="/images/cover.png" onClick={handledoubleClick} onDoubleClick={handledoubleClick} alt="cover" />
                </div>
            </div>
        </div>
    )
}