import { useEffect, useState } from 'react';
import './Game.css';
import SingleCard from '../components/SingleCard';
import {useNavigate} from 'react-router-dom';

//importing the deck images
//initially non of the cards are matched , but i they are matched , 
//the that property is set to true
const cardImages = [
  {src : "/images/black 2.png", matched: false},
  {src : "/images/blackJoker.png", matched: false},
  {src : "/images/red2.png", matched: false},
  {src : "/images/redHeart2.png", matched: false},
  {src : "/images/redJoker.png", matched: false},
  {src : "/images/blackHeart8.png", matched: false},
]

function Game() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //when user selects their first card , the first choice will be set to that card , 
  //same logic for the second card
  const [choiceOne , setChoiceOne] = useState(null)
  const [choiceTwo , setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)



  //this will shuffle the cards
   //shuffles the deck of card and creates a duplicate set so that there are matching pairs
   //sorts the card according positive and negative	nnumbers
    //positive: card remains in place, negative: card swaps position
    //this is then mapped to each card objct within the array
    //making sure that the shuffled cards are used in the realtime game state
  const cardshuffler = () => {
    const shuffledcards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))
    setCards(shuffledcards)
  }


  //handle a choice
  const handleChoice = (card) => {
    console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

    const navigate = useNavigate();

    const navigateWinnerPage = () => {
    // 👇️ navigate to /
    navigate('/fatality');
  };


  //compare 2 selected cards
  //fires when the component first mounts automaticaly and then again
  //when a dependancy changes
  //only runs if both cards are selected
  //need to reset the turns so that the player can
  //make another move

 useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }

    }
  }, [choiceOne, choiceTwo])


//resets the choices and increases number of turns that the player 
//has taken
//  uses function to set the turns using the previous state


  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

    //checking some stuff
  console.log(cards, turns)

  //returns the main application

  
 // the main application return value needs have routes for displaying 
 // the pages that the user will view and the relevant routes depending
 // on what actions the user takes.

 // The user is greeted by the home page , after pressing the enter buttton ,
 // they are taken to the main gameplay page .

  //When either play wins , they are then routed to the page stating which player
//  has won the game

  return (
    <div className="App">
      <h1> Memory card game</h1>
      <button onClick={cardshuffler}>Start</button>    
      <div className='card-grid'>
      {cards.map(card => (
        <SingleCard key={card.id} card={card}
        handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo || card.matched}
        disabled={disabled}
       />
       
      ))}
      <div className="start_button">
        <button type="button" onClick={navigateWinnerPage} >test win page</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
