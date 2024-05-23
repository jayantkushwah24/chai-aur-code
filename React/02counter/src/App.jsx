import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20)
    setCounter(counter + 1);
    
    // setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);
    
  }
  const removeValue = () => {
    if(counter > 0) 
    setCounter(counter - 1);
  }

  return (
    <> 
      <h1>Counter Value : {counter}</h1>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
