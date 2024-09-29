import React from 'react';

function GuessForm() {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (guess.length != 5) {
      window.alert("WORD must be 5 length")
      return;
    }
    console.log({guess})
    setGuess("")
  }  
  return (
  <form className='guess-input-wrapper'
    onSubmit={(event) => handleSubmit(event) }
  >
    <label for="guess-input">Enter Guess: </label>
    <input id="guess-input" type='text' 
      value={guess}
      onChange={(event) => {
        if (event.target.value.length > 5) {
          return;
        }
        setGuess(event.target.value.toUpperCase())
      
      } }
    />
  </form>);
}

export default GuessForm;
