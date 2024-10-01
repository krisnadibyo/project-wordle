import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


function Guess({word, answer}) {
  let result = checkGuess(word, answer)
  return  (
  <p className="guess">
    {range(5).map((i) => <span className={`cell ${result ? result[i].status : undefined}`} key={i}>{result ? result[i].letter : undefined}</span>)}
  </p>
);
}

export default Guess;
