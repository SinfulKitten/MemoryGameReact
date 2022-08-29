import React from 'react'
import { useNavigate} from 'react-router-dom';

   


//Home page where players enter their player names and can click the 
//start button to start the game. Uses html form elements and a button

export default function Home() {

     const navigate = useNavigate();

    const navigateGamePage = () => {
    // 👇️ navigate to /
    navigate('/FIGHT!');
  };

  return (
    <div>
        <div className="memory_logo">
            <h3>Memory</h3>
        </div>
        <div className="game_message">
        <h1>Are you ready to play?</h1>
        </div>

        <form>
        <img className="P1_sprite" src='/images/player1.png' alt="player_1_sprite"/>
        <input type="text" id="P1_name" name="P1_name" placeholder='Name of player 1'></input>
        <img className="P2_sprite" src='/images/player2.png' alt="player_2_sprite"/>
        <input type="text" id="P1_name" name="P2_name" placeholder='Name of player 2' ></input>
        </form>

        <div className="start_button">
        <button type="button" onClick={navigateGamePage} >Lets Play</button>
        </div>
           
    </div>
  )
}
