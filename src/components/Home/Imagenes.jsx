import React from "react";
import "./styles/imagenes.css";
import imagenfresaPC from "..//../../public/graphics/Imagen-fresa-pc.png";
import logoAzul from "..//../../public/graphics/logo-azul.png";
import logoCafe from "..//../../public/graphics/logo-cafe.png";
import logoScroll from "..//../../public/graphics/logo-scroll.png";

const Imagenes = () => {
  return (
    <div className="contenedor-imagenes">
      <div className="información-imagenes">
        <img className="imagen_fresa" src={imagenfresaPC} alt="imagen_fresa" />
      </div>
      <div className="contenedor_sabores">
        <p className="p-sabor">Sabor a:</p>
        <a className="boton__fresa" href="#">
          Fresa
        </a>
        <a className="boton__guayaba" href="#">
          Guayaba
        </a>
        <a className="boton__toronja" href="#">
          Toronja
        </a>
      </div>
      <div className="descripcion">
        <p className="titulo-vitalinea">Vitalinea® Bebible Fresa 217 gr.</p>
        <p className="parrafo-descripcion">
          iLa presentacién ideal para llevar contigo! Vitalinea ebible es la
          opción si eres de las personas que siempre estn activas y quieren
          probar algo sano, rico y práctico.
        </p>
      </div>
      <div className="botones-logo">
        <a className="boton-walmart" href="#">
          Comprar en walmart
        </a>
        <img className="logo-azul" src={logoAzul} alt="logo azul" />
        <img className="logo-cafe" src={logoCafe} alt="logo cafe" />
        <img className="logo-scroll" src={logoScroll} alt="logo scroll" />
      </div>
    </div>
  );
};

export default Imagenes;
