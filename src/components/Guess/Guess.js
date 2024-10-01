import React from "react";
import { range } from "../../utils";

function Guess({ checkLetter }) {
  return (
    <p className="guess">
      {range(0, 5, 1).map((i) => (
        <span
          className={`cell ${checkLetter && checkLetter[i].status}`}
          key={crypto.randomUUID()}
        >
          {checkLetter && checkLetter[i].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
