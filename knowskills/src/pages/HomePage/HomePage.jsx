import React, { useEffect, useState } from "react";
import "./HomePage.css";

import slide1 from "../../assets/images/CarroseImagens/slide1_carrosel.png"

import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";

const HomePage = () => {
  return (
    <div>
      <div>
        <img style={{
          width: "100%",
          
        }} src={slide1} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
