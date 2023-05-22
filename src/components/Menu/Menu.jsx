// import { useState } from "react";
import { Link } from "react-router-dom";

// export default function Menu() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
  
//   return (
//     <div>
//       <div className={`mobile-menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <nav className="menu">
//         <Link to="/">
//           Início
//         </Link>
//         {' '}
        // <Link to="/formulario">
        //   Agendamento
        // </Link>
//         {' '}
        // <Link to="/orientacoes">
        //   Orientações 1° e 2° via do RG
        // </Link>
//         <Link to="/privacity">
//           Política de privacidade
//         </Link>
//       </nav>
      
//     </div>
//   )
// }
import React, { useState } from 'react';
import './Menu.css'; // Importe o arquivo CSS com as classes

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar a exibição do menu em dispositivos móveis
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Botão para abrir o menu em dispositivos móveis */}
      <div className={`mobile-menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menu de navegação */}
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">
              Início
            </Link></li>
          <li>
          <Link to="/formulario">
            Agendamento
          </Link>
          </li>
          <li>
          <Link to="/orientacoes">
            Orientações 1° e 2° via do RG
          </Link>
          </li>
          <li>
            <Link to="/privacity">
              Política de privacidade
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
