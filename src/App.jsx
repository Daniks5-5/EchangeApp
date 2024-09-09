import { useState } from 'react'
import './App.css'
import EchangeSection from './components/EchangeSection/EchangeSection'
import MainSection from './components/MainSection/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
         <MainSection />
         <EchangeSection />

    </div>

  )
}

export default App
