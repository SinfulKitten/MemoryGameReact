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
  var player1Name = document.getElementById('P1_name').value;
  var player2Name = document.getElementById('P2_name').value;
  navigateGamePage();
  console.log(player1Name, player2Name);
}

  return (
    <div>
        <div className="memory_logo">
            <h3>Memory</h3>
        </div>
        <div className="game_message">
        <h1>Are you ready to play?</h1>
        </div>

        <form>
        <div className="player_column">
          <img className="P1_sprite" src='/images/player1.png' alt="player_1_sprite"/>
          <input type="text" id="P1_name" name="P1_name" placeholder='player 1' required/>
        </div>
        <div className='player_column'>
        <img className="P2_sprite" src='/images/player2.png' alt="player_2_sprite"/>
        <input type="text" id="P2_name" name="P2_name" placeholder='player 2' required/>
        </div>
        </form>
        <br/>
        <div className="start_button">
        <button type="button" onClick={navAndCollect} >Lets Play</button>
        </div>

           
    </div>
  )
}
