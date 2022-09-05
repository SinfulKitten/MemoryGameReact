import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../style/Home.css';
import UserNameInputForm from '../components/UserNameInput';


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
        
        <UserNameInputForm/>
        </div>
  )
}
