import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessForm from '../GuessForm';
import { checkGuess } from '../../game-helpers' 
import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [words, setWords] = React.useState([])
  const [game, setGame] = React.useState("play")


  const handleSubmitForm = (word) =>  {
    if (words.length == NUM_OF_GUESSES_ALLOWED) {
      window.alert("Max tries "+NUM_OF_GUESSES_ALLOWED)
      return;
    }

    if (game !== "play") {
      window.alert("Game has ended please reload page")
      return;
    }
    const newWord = {id: crypto.randomUUID(), word}
    let nextWords = [...words]
    nextWords.push(newWord)
    setWords(nextWords)

    if (word === answer) {
      setGame("win")
      return;
    }
   
    if (nextWords.length == NUM_OF_GUESSES_ALLOWED) {
      setGame("lose")
    }
  }



  

  return (
  <>
    {range(0,NUM_OF_GUESSES_ALLOWED,1).map((i) => 
      <Guess key={words[i] ? words[i].id : crypto.randomUUID()} checkLetter={checkGuess(words[i] ? words[i].word : "",answer)}/>
    )}
    <GuessForm handleSubmitForm={handleSubmitForm}/> 
    {game === "play" || <Banner win={game === "win"} numGuesses={words.length}/>}

  </>);
}

export default Game;
