import React, { useContext, useEffect, useState } from "react";

import logotipo_darkTheme from "../../assets/images/logotipo-darkTheme.png"

import { useNavigate } from "react-router-dom";

import "./LoginPage.css";
import { UserContext, userDecodeToken } from "../../context/AuthContext";

const LoginPage = () => {

  return (
    <div className="layout-grid-login">
      <section className="login_section">
        <img src={logotipo_darkTheme} alt="" className="logotipoLogin"/>

        <div className="box-loginInput">
          <input type="text" placeholder="Insira seu Email:" />
          <input type="password" placeholder="Insira sua Senha:" />

          <button>Login</button>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
