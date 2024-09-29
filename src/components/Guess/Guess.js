import React from 'react';
import { range } from '../../utils';


function Guess({word=''}) {
  return  (
  <p className="guess">
    {range(0, 5, 1).map((i) => <span className="cell" key={Math.random()}>{word[i]}</span>)}
  </p>
);
}

export default Guess;
