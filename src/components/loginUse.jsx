import React from "react";
import './style/LoginUse.css'
import hands from './img/hands.jpg'

export const UserPage = () =>{
  
  return(
    <div id = 'ImagenDeFondo'>
      <div id = 'cajaUsuario'>
        <img src = {hands} id = 'imagen' ></img>
        <h1 id = 'primerTitulo'>
          Inicio de sesion
        </h1> 
        <hr id='linea'/>
        <input type="text" id="cajaTextUser" placeholder="Documento de identidad" />
        <input type="password" id="cajaTextPass" placeholder="Contrasena" />
        <button id="botonIngresar">Ingresar</button>
        <a href="" id="linkContrasena">
          Has olvidado tu contrasena?
        </a>
        <a href="" id="linkRegistro">
          Aun no te has registrado?
        </a>
      </div>
    </div>
  );
}
