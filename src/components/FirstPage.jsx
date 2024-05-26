import React from "react";
import "./style/FirstPageStyle.css";
import logoOne from "./style/img/logoOne.png";

function FirstPage() {
  return (
    <div id="body">
      {/* -------------------------- */}
      <header id="encabezado">
        <img src={logoOne} id="logo" />
        <h2 id="tituloE">Konecta</h2>
        <div id="contenedorEnlaces">
          <a href="" className="enlaces">
            Inicio
          </a>
          <a href="" className="enlaces">
            Servicios
          </a>
          <a href="" className="enlaces">
            Clientes
          </a>
        </div>
      </header>
      {/* -------------------------- */}
      <div id="primerElemento">
        <h2>Facilitamos tu búsqueda, ampliamos tus posibilidades</h2>
        <p>
          Bienvenido a Konecta. Somos una nueva empresa dedicada a conectar
          personas con oportunidades laborales mediante innovadoras soluciones
          digitales. Nacemos con la visión de revolucionar el mercado de
          reclutamiento a través de un sistema que permita encontrar talento y
          vacantes de manera ágil, eficaz y transparente. Queremos simplificar
          el proceso de contratación y que tanto empresas como candidatos tengan
          una experiencia satisfactoria. Para ello, estamos desarrollando una
          plataforma online rapida e intuitiva para usuarios y empresas.
        </p>
      </div>
    </div>
  );
}

export default FirstPage;
