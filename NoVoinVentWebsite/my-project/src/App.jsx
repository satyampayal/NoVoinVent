import { useState } from 'react'
import Home from './Components/Home'
import Creativity from './Components/Creativity'
import Practise from './Components/Practise'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <Home/>
     <Creativity/>
     <Practise/>
    </>
  )
}

export default App
