import React, { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);


  function handleClick() {
    setCounter(counter + 1);
  }
  function handling(){
    setCounter(counter-1);
  }
  function refresh(){
    setCounter(0);
  }

  return (
    <div>
      <p>{ counter }</p>
      <button onClick={handleClick}>plus</button>
      <button onClick={handling}>minus</button>
      <button onClick={refresh}>restart</button>
    </div>
  )
}

export default App;


