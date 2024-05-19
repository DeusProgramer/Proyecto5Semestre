import React from "react";
import './style/RegisterUse.css'

export const RegisterUse = () =>{

  return(
    <div id = 'imagenDeFondo'>
      <div id = 'cajaCentral'>
        <h1 id = 'tituloPrimario'>
          Registro 
        </h1> 
        <hr/>
        <input type = "text" className = 'cajasTexto' placeholder = "Documento de Identidad"/>
        <input type = "text" className = 'cajasTexto' placeholder = "Codigo de Verificacion"/>
        <input type = "password" className = 'cajasTexto' placeholder = "Contraseña"/>
        <input type = "password" className = 'cajasTexto' placeholder = "Confirmar Contraseña"/>
        <button id = 'botonDos'> 
          Registrarse
        </button>
       </div>
    </div>
  );
}
