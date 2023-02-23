import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Flowcarousel from './components/carousel'
import Flownavbar from './components/navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flownavbar></Flownavbar>
    <Flowcarousel></Flowcarousel> 
    </>
   
  )
}

export default App
