import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessWord from '../GuessWord';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [words, setWords] = React.useState([])

  const handleSubmitForm = (word) => {
    const newWord = {id: crypto.randomUUID(), word}
    let nextWords = [...words]
    nextWords.push(newWord)
    setWords(nextWords)
  }

  return (
  <>
    <GuessWord words={words} />
    <GuessForm handleSubmitForm={handleSubmitForm}/> 
  </>);
}

export default Game;
