import React from 'react'
import { useNavigate} from 'react-router-dom';
import '../style/Home.css'


//Home page where players enter their player names and can click the 
//start button to start the game. Uses html form elements and a button

export default function Home() {

    const navigate = useNavigate();

    const navigateGamePage = () => {
    navigate('/FIGHT!');
  };

  //this allows collection of player names and also navigates to the
  //main gameplay page
  function navAndCollect() {
  navigateGamePage();
}

  return (
    <div className="Home">
        <div className="memory_logo">
            <h1>Memory</h1>
        </div>
        
        <form>
        <div className="player_column">
          <img className="P1_sprite" src='/images/player1.png' alt="player_1_sprite"/>
          <h2>Player 1</h2>
        </div>
        <h2>VS</h2>
        <div className='player_column'>
        <img className="P2_sprite" src='/images/player2.png' alt="player_2_sprite"/>
        <h2>Player 2</h2>
        </div>
        </form>
        <br/>
        <div className="game_message">
        <h2>Are you ready to play?</h2>
        </div>
        <div className="start_button">
        <button type="button" onClick={navAndCollect} >Lets Play</button>
        </div>

           
    </div>
  )
}
