import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss";

const NavBar: React.FC = () => {
  return (
    <>
      <div className="navContainer">
        <Link to="/" className="linktag">
          Home
        </Link>
        <Link to="MarsRover" className="linktag">
          MarsRover
        </Link>
      </div>
    </>
  );
};
