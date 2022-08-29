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
        <h1>insert player here</h1>
        <img className="winner_sprite" src='/images/winner.png' alt="winner"/>
        <div className="start_button">
        <button type="button" onClick={navigateGamePage} >PLAY AGAIN</button>
        </div>
    </div>
 

  )
}
