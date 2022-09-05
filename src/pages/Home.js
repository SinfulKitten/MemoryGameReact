import React from 'react';
import '../style/Home.css';
import UserNameInputForm from '../components/UserNameInput';


//Home page where players enter their player names and can click the 
//start button to start the game. Uses html form elements and a button

export default function Home() {

  return (
    <div className="Home">
        <div className="memory_logo">
            <h1>Memory</h1>
        </div>
        
        <UserNameInputForm/>
        </div>
  )
}
