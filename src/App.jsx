import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/shared/Header'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
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
