import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //v6

// imports dos componentes de página
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


// Componente Rota
const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<HomePage />} path="/" exact />

        <Route element={<LoginPage />} path="/login" />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
