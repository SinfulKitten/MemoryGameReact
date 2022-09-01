# Memory

This project is based on the memory card game (A.K.A pairs depending on where you played it)

## Rules

This is a two player game, the objective is to score higher than your opponent by matching up more pairs of cards on the board based on the color and number (ace of clubs with ace of spades for example) with one match attempt per turn, the winner is decided once all cards are matched

## The Code Base

The project was made using React.js, JSX and CSS / React-Bootstrap for styling and animations,
meaning it can be run using `npm start`, but recommended to run `npm install` if it is your first time with the project

### The Game Logic

Initially, I made this project using the idea of declaring an array of the cards to turn them each into objects, including the full stack (heh) with their images and their appropriate details (their colour and their value).

To which this array would be mapped out within a JSX grid, using the useEffect and useState to keep their values in check (and an id for each card so that I do not make the error of placing a match by clicking the same card rapidly).

With that, came the user play, each card has 3 modes: `neutral`, `flipped` and `matched`. neutral is the cards set as they are, only once a user clicks on it, will it trigger a choice handler, which will give that card the `flipped` class, which will reveal the front of the card (and therefore the value), rendering it unclickable, should the user click another card and have it be a match for the first one, the chosen cards are given the `matched` class, which hides the cards but leaves them unclickable regardless. Should the second chosen card not be a match, both cards remove their `flipped` class, and are set back to neutral

### Points

For each match, the user is given 2 points, once the cards are all gone, the winner will be decided based on who accumulated the most points (though it is also possible to get a draw, that's an adventure on its own)

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
