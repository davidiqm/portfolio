import React from "react";
import "./Header.css";

export function Header() {
  return <> 
    <header class="header">
      <a href="#">Logo</a>
      <nav className="navigation">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Educación</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Skillset</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  </>;
}

