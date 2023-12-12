import { useState } from 'react';
import { empresas } from '../data/empresas'
import { Link } from 'react-router-dom'

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/' >
          EmpresaTo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav" onClick={closeMenu}>
            <li className="nav-item">
              <Link to='/user' className="nav-link" >
                Sobre Mi
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${dropdownOpen ? 'show' : ''}`}
                href="#"
                role="button"
                onClick={toggleDropdown}
              >
                Dropdown link
              </a>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                {
                  empresas.map((item, index) => (
                    <li key={index} >
                      <Link to={`/empresa/${item.id}`} className="dropdown-item" >
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
