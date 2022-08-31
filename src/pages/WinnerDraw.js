import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Winner() {

         const navigate = useNavigate();

    const navigateGamePage = () => {
    // 👇️ navigate to /
    navigate('/FIGHT!');
  };

  return (
    <div>
        <h2>Well Done!</h2>
        <h1>ITS A DRAW</h1>
        <h6>get the cigars and banners</h6>
        <img className="winner_sprite" src='/images/Draw.png' alt="winner"/>
        <div className="start_button">
        <button type="button" onClick={navigateGamePage} >PLAY AGAIN</button>
        </div>
    </div>
 

  )
}
