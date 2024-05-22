import { useState } from 'react'

function App() {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    let newOutputString = outputString + letter;
    const regex = /(.)\1{2,}/g;
    newOutputString = newOutputString.replace(regex, (match) => '_'.repeat(match.length));
    setOutputString(newOutputString);
  };

  const renderTiles = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet.map((letter, index) => (
      <button key={index} className="tile" onClick={() => handleClick(letter)}>
        {letter}
      </button>
    ));
  };

  return (
    <>
      <div className="app">
        <div className="tiles-container">
          {renderTiles()}
        </div>
        <div className="output-container">
          <span >{outputString}</span>
        </div>
      </div>

    </>
  )
}

export default App
