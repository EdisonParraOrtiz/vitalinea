import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/shared/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <h1>Edison</h1>
   
    </div>
  )
}

export default App
