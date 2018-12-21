import React from "react";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="quarter">
          <Link to="/concelloteo" className="menu-item">
            <img src="images/logo_pequeno.png" alt="logo" />
          </Link>
        </div>

        <nav className="menu">
          <Link to="/" className="menu-item">
            Inicio
          </Link>
          <Link to="/cultura" className="menu-item">
            Cultura
          </Link>
          <Link to="/deporte" className="menu-item">
            Deporte
          </Link>
          <Link to="/avisos" className="menu-item">
            Avisos
          </Link>
          <Link to="/infoteo" className="menu-item">
            InfoTeo
          </Link>
        </nav>
        <div className="quarter" />
      </header>
    );
  }
}

export default Header;
