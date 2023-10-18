import React, { useState } from 'react';
import Display from './Components/Display';


function Button({ handleClick, name }) {
  console.log(name);
  return (
    <button onClick={handleClick}>{ name }</button>
  )
}

function App() {

  const [counter, setCounter] = useState(0);
  function handlePlusClick() {
    setCounter(counter + 1);	    
  }	  
  function handleMinusClick() {	  
    setCounter(counter - 1);	    
  }	  
  function handleZeroClick() {	  
    setCounter(0);	   
  }	  

  return(
    <div>
    <Display counter={counter}/>
    <Button handleClick={handlePlusClick} name='plus'/>
    <Button handleClick={handleMinusClick} name='minus'/>
    <Button handleClick={handleZeroClick} name='restart'/>
    </div>
  )



  
}

export default App;