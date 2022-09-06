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
      if (player1 !== "" && player2 !== "") {
        navigate('/FIGHT!');
      }
      else {
        setEmptyNames(true)
    }
   }
 
  const [emptyNames, setEmptyNames] = useState(false)
  const [player1, setplayer1] = useState("")
  const [player2, setplayer2] = useState("")

  return (
    <div>
    <form>
    <div className="playerColumn">
      <img className="P1Sprite" src='/images/player1.png' alt="player 1 sprite"/>
      <input type="p1name" placeholder='Player 1 name?' onChange={(e) => setplayer1(e.target.value)}/>
      <h2>{player1}</h2>

    </div>
    <div className="playerColumn">
      <h1>VS</h1>
    </div>
    <div className='playerColumn'>
    <input type="p2name" placeholder='Player 2 name?' onChange={(e) => setplayer2(e.target.value)}/>
    <img className="P2Sprite" src='/images/player2.png' alt="player 2 sprite"/>
    <h2>{player2}</h2>
    </div>
    </form>
    <br/>
    <div className="gameMessage">
      {emptyNames === true? <h2>No Empty Names Pls</h2> : <h2>Are you ready to play?</h2>}
    </div>
    <div className="startButton">
    <Button variant="flat" size="xxl" type="button" onClick={NavAndSubmitData} >Lets Play</Button>
    </div>
</div>
  );
}
