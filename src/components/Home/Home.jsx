import React from "react";
import Imagenes from "./Imagenes";
import "./styles/home.css";
import familiaVitelineaPC from "./../../../public/graphics/familia-vitelinea-pc.png";
import logoUno from "../../../public/graphics/logo-uno.png";
import logoDos from "../../../public/graphics/logo-dos.png";


const Home = () => {
  return (
    <div className="contenedor">
     
      <Imagenes />
      
      <div className="contenido">
      <h3 className="informacion-titulo">Information nutrimental</h3>
        <div className="informacion-nutrimental">
          
          <strong className="informacion-cantidad">
            {" "}
            Vitalinea® Bebible Guayaba 217gr <br /> Valor promedio por porcién
            de 217ar <br />
            Porciones por envase: 1
          </strong>
          <br />
          <br />
          <strong className="informacion-cantidad-i">Ingredientes:</strong>
          <p className="parrafo-ingredientes">
            Leche descremada pasteurizada y/o reconstituida pasteurizada de
            vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
            (27.2mg/100g)), crema, almidén modificado, maltodextrina y cultivos
            lacticos.
          </p>
        </div>
        <div className="contenedor__lista">
            <ul className="informacion">
              <li className="lista">Contenido energético kj/kcal</li>
              <li className="lista">Proteínas (g)</li>
              <li className="lista">Grasas (lípidos) (g)</li>
              <li className="lista">Grasas saturadas (g)</li>
              <li className="lista">Carbohidratos (Hidratos de carbono) (g)</li>
              <li className="lista">Azúcares (g)</li>
              <li className="lista">Azúcares añadidos (g)</li>
              <li className="lista">Fibra dietética (g)</li>
              <li className="lista">Sodio(mg)</li>
              <li className="lista">Calcio(mg)</li>
              <li className="lista">%VNR*</li>
            </ul>
            <ul className="contenedor-lista-derecha">
              <li className="lista-derecha">413,2/97,9</li>
              <li className="lista-derecha">5.3 (g)</li>
              <li className="lista-derecha">2.1</li>
              <li className="lista-derecha">1.4</li>
              <li className="lista-derecha">12.4(g)</li>
              <li className="lista-derecha">7.7</li>
              <li className="lista-derecha">0.1 (g)</li>
              <li className="lista-derecha">0.0</li>
              <li className="lista-derecha">92.7</li>
              <li className="lista-derecha">199.6</li>
              <li className="lista-derecha">22</li>
            </ul>
          </div>
      </div>

      <div className="contenedor-familia">
        <h2 className="titulo-familia">LA FAMILIA VITALINEA</h2>

        <img  className="imagen-familia-vitalinea" src={familiaVitelineaPC} alt="" />
        <p className="vitalineo-griego">Vitalineo griego</p>
        <p className="vitalineo-azucar">Vitalineo sin Azúcar</p>
        <p className="vitalineo-azucar-uno">Vitalineo sin Azúcar</p>
      </div> 

       <div className="contenedor-logos">
        <img className="logo-circulo-azul" src={logoUno} alt="" />
        <img className="logo-negro" src={logoDos} alt="" />
      </div>
         
      <footer className="footer">
        <p className="parrafo-footer">
          Términos y condiciones! Politicas de pivacidad | Aviso de privacidad{" "}
          <br />
          Danone de México 2017 ©. Todos los derechos reservados <br /> 2017
        </p>
      </footer> 
    </div>
  );
};

export default Home;
