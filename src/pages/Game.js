import { useEffect, useState } from 'react';
import './Game.css';
import SingleCard from '../components/SingleCard';
import {useNavigate} from 'react-router-dom';

//importing the deck images
//initially non of the cards are matched , but i they are matched , 
//the that property is set to true
const cardImages = [
  {src : "/images/Clubs2.png", colour: "black", number: "2", matched: false},
  {src : "/images/Clubs3.png", colour: "black", number: "3", matched: false},
  {src : "/images/Clubs4.png", colour: "black", number: "4", matched: false},
  {src : "/images/Clubs5.png", colour: "black", number: "5", matched: false},
  {src : "/images/Clubs6.png", colour: "black", number: "6", matched: false},
  {src : "/images/Clubs7.png", colour: "black", number: "7", matched: false},
  {src : "/images/Clubs8.png", colour: "black", number: "8", matched: false},
  {src : "/images/Clubs9.png", colour: "black", number: "9", matched: false},
  {src : "/images/Clubs10.png", colour: "black", number: "10", matched: false},
  {src : "/images/ClubsA.png", colour: "black", number: "Ace", matched: false},
  {src : "/images/ClubsJ.png", colour: "black", number: "Jack", matched: false},
  {src : "/images/ClubsK.png", colour: "black", number: "King", matched: false},
  {src : "/images/ClubsQ.png", colour: "black", number: "Queen", matched: false},
  {src : "/images/Diamonds2.png", colour: "red", number: "2", matched: false},
  {src : "/images/Diamonds3.png", colour: "red", number: "3", matched: false},
  {src : "/images/Diamonds4.png", colour: "red", number: "4", matched: false},
  {src : "/images/Diamonds5.png", colour: "red", number: "5", matched: false},
  {src : "/images/Diamonds6.png", colour: "red", number: "6", matched: false},
  {src : "/images/Diamonds7.png", colour: "red", number: "7", matched: false},
  {src : "/images/Diamonds8.png", colour: "red", number: "8", matched: false},
  {src : "/images/Diamonds9.png", colour: "red", number: "9", matched: false},
  {src : "/images/Diamonds10.png", colour: "red", number: "10", matched: false},
  {src : "/images/DiamondsA.png", colour: "red", number: "Ace", matched: false},
  {src : "/images/DiamondsJ.png", colour: "red", number: "Jack", matched: false},
  {src : "/images/DiamondsK.png", colour: "red", number: "King", matched: false},
  {src : "/images/DiamondsQ.png", colour: "red", number: "Queen", matched: false},
  {src : "/images/Hearts2.png", colour: "red", number: "2", matched: false},
  {src : "/images/Hearts3.png", colour: "red", number: "3", matched: false},
  {src : "/images/Hearts4.png", colour: "red", number: "4", matched: false},
  {src : "/images/Hearts5.png", colour: "red", number: "5", matched: false},
  {src : "/images/Hearts6.png", colour: "red", number: "6", matched: false},
  {src : "/images/Hearts7.png", colour: "red", number: "7", matched: false},
  {src : "/images/Hearts8.png", colour: "red", number: "8", matched: false},
  {src : "/images/Hearts9.png", colour: "red", number: "9", matched: false},
  {src : "/images/Hearts10.png", colour: "red", number: "10", matched: false},
  {src : "/images/HeartsA.png", colour: "red", number: "Ace", matched: false},
  {src : "/images/HeartsJ.png", colour: "red", number: "Jack", matched: false},
  {src : "/images/HeartsK.png", colour: "red", number: "King", matched: false},
  {src : "/images/HeartsQ.png", colour: "red", number: "Queen", matched: false},
  {src : "/images/Spades2.png", colour: "black", number: "2", matched: false},
  {src : "/images/Spades3.png", colour: "black", number: "3", matched: false},
  {src : "/images/Spades4.png", colour: "black", number: "4", matched: false},
  {src : "/images/Spades5.png", colour: "black", number: "5", matched: false},
  {src : "/images/Spades6.png", colour: "black", number: "6", matched: false},
  {src : "/images/Spades7.png", colour: "black", number: "7", matched: false},
  {src : "/images/Spades8.png", colour: "black", number: "8", matched: false},
  {src : "/images/Spades9.png", colour: "black", number: "9", matched: false},
  {src : "/images/Spades10.png", colour: "black", number: "10", matched: false},
  {src : "/images/SpadesA.png", colour: "black", number: "Ace", matched: false},
  {src : "/images/SpadesJ.png", colour: "black", number: "Jack", matched: false},
  {src : "/images/SpadesK.png", colour: "black", number: "King", matched: false},
  {src : "/images/SpadesQ.png", colour: "black", number: "Queen", matched: false},
  {src : "/images/JokerBlack.png", colour: "black", number: "Joker", matched: false},
  {src : "/images/JokerRed.png", colour: "red", number: "Joker",matched: false},

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
   //sorts the card according positive and negative	numbers
    //positive: card remains in place, negative: card swaps position
    //this is then mapped to each card objct within the array
    //making sure that the shuffled cards are used in the realtime game state
  const cardshuffler = () => {
    const shuffledcards = [...cardImages]
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
      if (choiceOne.number === "Joker" && choiceTwo.number === "Joker") {
                setCards(prevCards => {
          return prevCards.map(card => {
            if (card.number === choiceOne.number) {
              
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      }
      else if (choiceOne.number === choiceTwo.number && choiceOne.colour === choiceTwo.colour) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.number === choiceOne.number && card.colour === choiceOne.colour) {
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
    //TODO: when the full card array matched == true
    // navigate to winner page
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
      <button onClick={cardshuffler}>Reset Game</button>    
      <div className='card-grid'>
      {cards.map(card => (
        <SingleCard key={card.id} card={card}
        handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo || card.matched}
        disabled={disabled}
       />
       
      ))}
      </div>
    </div>
  );
}

export default Game;
