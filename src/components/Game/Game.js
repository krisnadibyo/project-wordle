import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessForm from '../GuessForm';
import GuessWord from '../GuessWord';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [words, setWords] = React.useState([])

  const handleSubmitForm = (word) => {
    if (words.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("Max tries "+NUM_OF_GUESSES_ALLOWED)
      return;
    }
    const newWord = {id: crypto.randomUUID(), word}
    let nextWords = [...words]
    nextWords.push(newWord)
    setWords(nextWords)
  }

  return (
  <>
    {range(0,NUM_OF_GUESSES_ALLOWED,1).map((i) => <Guess key={words[i] ? words[i].id : crypto.randomUUID()} word={words[i] && words[i].word}/>)}
    <GuessForm handleSubmitForm={handleSubmitForm}/> 
  </>);
}

export default Game;
