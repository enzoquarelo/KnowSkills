import React, { useState } from "react";
import "./Header.css";

import Container from "../Container/Container";
import Nav from "../Nav/Nav";

const Header = () => {

  return (
    <header className="header">
      <Container>
        <div className="header-flex">
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
