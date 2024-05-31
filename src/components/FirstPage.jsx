import React from "react";
import "./style/FirstPageStyle.css";
import logoOne from "./style/img/logoOne.png";
import KonectaCompanyLogo from "./style/img/KonectaCompanyLogo.png";

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
      <div id = "segundoElemento">
        <img src={KonectaCompanyLogo} id = "company" />
        <h1 id="plusIA">+ IA</h1>

      </div>
      {/* -------------------------- */}
      <footer id = "piedepagina">
        <div>
          <h5 id = "h5">
            Contactos
          </h5>
          <a className= "enlacesF"href="">konectaCompany@gmail.com</a>
          <a className= "enlacesF"href="">WhattApp</a>
          <a className= "enlacesF"href="">Instagram</a>
          <a className= "enlacesF"href="">Twitter</a>
          <a className= "enlacesF"href="">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default FirstPage;
