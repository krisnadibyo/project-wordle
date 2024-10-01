import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessForm from "../GuessForm";
import Banner from "../Banner/Banner";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);
  const [game, setGame] = React.useState("play");

  const handleSubmitForm = (word) => {
    if (words.length === NUM_OF_GUESSES_ALLOWED) {
      window.alert("Max tries " + NUM_OF_GUESSES_ALLOWED);
      return;
    }

    let nextWords = [...words, word];
    setWords(nextWords);

    if (word === answer) {
      setGame("win");
    } else if (nextWords.length === NUM_OF_GUESSES_ALLOWED) {
      setGame("lose");
    }
  };

  return (
    <>
      <GuessResult words={words} answer={answer} />
      <GuessForm
        handleSubmitForm={handleSubmitForm}
        numGuesses={words.length}
      />
      {game === "play" || (
        <Banner
          win={game === "win"}
          numGuesses={words.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
