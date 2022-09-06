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
        <h1>Player 1 Wins</h1>
        <img className="winnerSprite" src='/images/winner.png' alt="winner"/>
        <div className="startButton">
        <button type="button" onClick={navigateGamePage}>PLAY AGAIN</button>
        </div>
    </div>
  )
}
