import React from "react";

function GuessForm({ handleSubmitForm }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length != 5) {
      window.alert("WORD must be 5 length");
      return;
    }
    console.log({ guess });
    handleSubmitForm(guess);
    setGuess("");
  };
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter Guess: </label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          if (event.target.value.length > 5) {
            return;
          }
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessForm;
