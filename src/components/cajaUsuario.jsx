import React from "react";
import "./style/cajaUsuario.css";
import hands from "../img/hands.jpg";

export const CajaUsuario = () => {
  return (
    <section id="caja">
      <h1 id="tituloIni">Iniciar Sesión</h1>
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
      <img src={hands} id="imagenManos" />
    </section>
  );
};
