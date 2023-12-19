import React, { useContext } from "react";
import "./Nav.css";

import logotipo_darkTheme from "../../assets/images/logotipo-darkTheme.png"

import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const Nav = () => {
  const { userData } = useContext(UserContext);

  return (
    <nav className='navbar'>


      <Link to="/">
        <img
          className="logotipo" 
          src={logotipo_darkTheme}
          alt="Event Plus Logo"
        />
      </Link>

      <div className="navbar__items-box">
        <Link to="/" className="navbar__item">
          Skills
        </Link>

        <Link to="/login" className="navbar__item_button">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
