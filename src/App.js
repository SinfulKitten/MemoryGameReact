import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

//importing the deck images
const cardImages = [
  {src : "/images/helmet-1.png"},
  {src : "/images/potion-1.png"},
  {src : "/images/ring-1.png"},
  {src : "/images/scroll-1.png"},
  {src : "/images/shield-1.png"},
  {src : "/images/sword-1.png"}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //when user selects their first card , the first choice will be set to that card , 
  //same logic for the second card
  const [choiceOne , setChoiceOne] = useState(null)
  const [choiceTwo , setChoiceTwo] = useState(null)



  //this will shuffle the cards
  const cardshuffler = () => {
    //shuffles the deck of card and creates a duplicate set so that there are maching pairs
    const shuffledcards = [...cardImages, ...cardImages]
    //sorts the card according positive and negative	nnumbers
    //positive: card remains in place, negative: card swaps position
    //this is then mapped to each card objct within the array
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    //making sure that the shuffled cards are used in the realtime game state
    setCards(shuffledcards)
  }

 
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }



  console.log(cards, turns)

  return (
    <div className="App">
      <h1> Memory card game </h1>
      <button onClick={cardshuffler}>Start</button>
      <div className='card-grid'>
      {cards.map(card => (
       <SingleCard key={card.id} card={card}
       handleChoice={handleChoice}
       />
      ))}
      </div>
    </div>
  );
}

export default App;
