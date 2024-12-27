import { useState } from 'react'
import Home from './pages/Home'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Home/>
      <Hero/>
      </div>
      
      
    </>
  )
}

export default App
