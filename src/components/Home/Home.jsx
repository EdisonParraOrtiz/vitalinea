import React from 'react'
import Imagenes from './Imagenes'
import './styles/home.css'

const Home = () => {
  return (
    <div className ='contenedor'>
        <Imagenes/>
        <h1 className ='imagen'> Imagen</h1>
    </div>
  )
}

export default Home