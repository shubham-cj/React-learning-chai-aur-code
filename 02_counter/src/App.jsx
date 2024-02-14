import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(2)
  
  const addVal = () => {
    console.log(counter);
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  };

  const removeVal =() => {
    console.log(counter);
    if (counter > 0) {
      setCounter(counter-1)
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addVal}>Add Value {counter}</button>
      <button onClick={removeVal}>Remove Value {counter}</button>
      <br />
      <br />
      <footer>Footer {counter}</footer>
    </>
  )
}

export default App
