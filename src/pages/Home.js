import React from 'react'

{/**
Home page where players enter their player names and can click the 
start button to start the game. Uses html form elements and a button
*/}
export default function Home() {
  return (
    <div>
        <div className="memory_logo">
            <h3>Memory</h3>
        </div>
        <div className="game_message">
        <h1>Are you ready to play?</h1>
        </div>

        <form>
        <img className="P1_sprite" src='/images/player1.png'/>
        <input type="text" id="P1_name" name="P1_name" placeholder='Name of player 1'></input>
        <img className="P2_sprite" src='/images/player2.png' alt="player_2_sprote"/>
        <input type="text" id="P1_name" name="P2_name" placeholder='Name of player 2'></input>
        </form>

        <div className="start_button">
        <button type="button">Lets Play</button>
        </div>
           
    </div>
  )
}
