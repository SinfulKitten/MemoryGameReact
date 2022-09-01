import React from 'react'
import Button from 'react-bootstrap/Button';
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
        <div className="player_colum">
          <h1>VS</h1>
        </div>
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
        <Button variant="flat" size="xxl" type="button" onClick={navAndCollect} >Lets Play</Button>
        </div>

           
    </div>
  )
}
