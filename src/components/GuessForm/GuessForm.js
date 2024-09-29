import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessForm({handleSubmitForm, numGuesses}) {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (guess.length != 5) {
      window.alert("WORD must be 5 length")
      return;
    }
    console.log({guess})
    handleSubmitForm(guess)
    setGuess("")
  }  
  return (
  <form className='guess-input-wrapper'
    onSubmit={(event) => handleSubmit(event) }
  >
    <label htmlFor="guess-input">Enter Guess: </label>
    <input id="guess-input" type='text' 
      minLength={5}
      maxLength={5}
      disabled={numGuesses == NUM_OF_GUESSES_ALLOWED}
      value={guess}
      onChange={(event) => { setGuess(event.target.value.toUpperCase())} }
    />
  </form>);
}

export default GuessForm;
