import React from 'react';

function GuessWord({words}) {
  console.log(words)
  return (
  <div className="guess-results" >
    {words.map(({id, word}) => <p key={id} className='guess'>{word}</p>)}
  </div>);
}

export default GuessWord;
