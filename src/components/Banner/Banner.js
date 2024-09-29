import React from 'react';

function Banner({win, numGuesses=0, answer}) {
  return (
    <div className={`${win ? 'happy' : 'sad'} banner`}>
      <p hidden={!win}>
        <strong>Congratulations!</strong> Got it in
        {" "}
        <strong>{numGuesses} {numGuesses == 1 ? "guess" : "guesses"}</strong>.
      </p>
      <p hidden={win}>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>

  );
}

export default Banner;
