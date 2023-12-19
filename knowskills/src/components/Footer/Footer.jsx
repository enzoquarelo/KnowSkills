import React from 'react';
import './Footer.css';

import { Link } from "react-router-dom"
import Nav from "../Nav/Nav";

import logotipo_darkTheme from "../../assets/images/logotipo-darkTheme.png"

// import Container from '../Container/Container';

const Footer = ({ textRights = "Escola Senai de Iinformática - 2023" }) => {

    return (

        <footer className='footer-page'>
            <div className='footer-box'>
                <div className="navbar-footer">
                    <h2>WSTower</h2>

                    <div className='linksFooter'>
                        <Link to="/" className="navbar__item">
                            Skills
                        </Link>

                        <Link to="/login" className="navbar__item">
                            Login
                        </Link>
                    </div>
                </div>

                <div className='midia-box'>
                    <h2>Redes Sociais</h2>
                    <nav className='midiaLinks'>
                        <a href="">Facebook</a>
                        <a href="">Twitter</a>
                        <a href="">Youtube</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;