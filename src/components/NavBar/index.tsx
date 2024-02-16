import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link className="nav-logo" to="/">
            Mars-Mission
          </Link>
          <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenuOnMobile}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/marsrover"
                onClick={closeMenuOnMobile}
              >
                Mars Rover
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quiz" onClick={closeMenuOnMobile}>
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/funfact"
                onClick={closeMenuOnMobile}
              >
                Fun Facts
              </Link>
            </li>
          </ul>
          <div
            className={`hamburger ${showMenu ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <div
        className={`overlay ${showMenu ? "show" : ""}`}
        onClick={closeMenuOnMobile}
      ></div>
    </>
  );
};

export default NavBar;
