import React from 'react'
import './styles/imagenes.css'
import imagenfresa from'..//../../public/graphics/Imagen-producto fresa.png'

const Imagenes = () => {
  return (
    <div className='contenedor-imagenes'>
        <img src={imagenfresa} alt="imagen_fresa" className="imagenfresa" />
    </div>
  )
}

export default Imagenes