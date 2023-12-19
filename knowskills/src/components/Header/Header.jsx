import React, { useState } from "react";
import "./Header.css";

import Container from "../Container/Container";
import Nav from "../Nav/Nav";

const Header = () => {

  return (
    <header className="header">
        <div className="header-flex">
          <Nav />
        </div>
    </header>
  );
};

export default Header;
