import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home/Home'
import Nav from './components/shared/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/> 
      <Routes>
           <Route path='/' element={<Home/>} />   
          {/* <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/portfolio' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} /> */}

      </Routes>
      
   
    </div>
  )
}

export default App
