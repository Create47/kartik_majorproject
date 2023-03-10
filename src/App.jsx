
import { useState } from 'react'

import Flowcarousel from './components/carousel'
import Flowfooter from './components/footer'
import Flownavbar from './components/navbar'
import Signin from './components/signin'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
  <div>
    <Flownavbar></Flownavbar>
    

   

    <Flowcarousel></Flowcarousel> 
    <Signin></Signin>
    <Flowfooter></Flowfooter>
    </div>
    </>
  )
}

export default App
