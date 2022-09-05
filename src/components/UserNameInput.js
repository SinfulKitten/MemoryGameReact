import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';
import '../style/Home.css';
export default function UserNameInputForm() {

    const navigate = useNavigate();

    //submits player names to state and navigates to
    //the game page
    function NavAndSubmitData() {
            navigate('/FIGHT!');
    }
 
    
  const [player1, setplayer1] = useState("Player 1")
  const [player2, setplayer2] = useState("Player 2")

  return (
    <div>
    <form>
    <div className="player_column">
      <img className="P1_sprite" src='/images/player1.png' alt="player_1_sprite"/>
      <input type="p1name" placeholder='Player 1 name?' onChange={(e) => setplayer1(e.target.value)}/>
      <h2>Player 1</h2>
    </div>
    <div className="player_colum">
      <h1>VS</h1>
    </div>
    <div className='player_column'>
    <input type="p2name" placeholder='Player 2 name?' onChange={(e) => setplayer2(e.target.value)}/>
    <img className="P2_sprite" src='/images/player2.png' alt="player_2_sprite"/>
    <h2>Player 2</h2>
    </div>
    </form>
    <br/>
    <div className="game_message">
    <h2>Are you ready to play?</h2>
    </div>
    <div className="start_button">
    <Button variant="flat" size="xxl" type="button" onClick={NavAndSubmitData} >Lets Play</Button>
    </div>
</div>
  );
}
