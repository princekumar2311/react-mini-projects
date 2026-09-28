import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const useReff=useRef(0);
  const increaseUseStateCount=()=>{
    setCount(count+1);
  }

  useEffect(()=>{
    console.log('Component Re-renadered');
  })
  const increaseUseReffCount=()=>{
    useReff.current+=1;
    console.log(useReff.current);
  }
  return (
    <div>
      <h1>UseEffect Demo</h1>
      <h1>UseState Count:{count}</h1>
      <button onClick={increaseUseStateCount}>UseState Count</button>
      <h1>UseReff Count:{useReff.current}</h1>
      <button onClick={increaseUseReffCount}>UseReff Count</button>
    </div>
  )
}

export default App
