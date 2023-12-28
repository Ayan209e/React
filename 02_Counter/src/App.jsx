import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  // Counter between the values [0,20]
  const increase = () => {
    if(counter<20) setCounter(counter+1);
  }
  const decrease = () => {
    if(counter>0) setCounter(counter-1);
  }


  return (
    <>
      <h1>Counter</h1>
      <h2>Value : {counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
