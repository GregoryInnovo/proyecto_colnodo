import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.css";
import img from "../assets/Img/logo@2x.png";
import "../assets/styles/components/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


/* 
  Componente del header
*/
const Header = () => {
  return (
    <header className="header">     
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg  py-1" id="mainNav">
      <div className="container px-4 px-lg-0">
      <a className="navbar-brand"><img className="logo" src={img} /></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="select-item" href="inicio">Inicio</a></li>
                        <li className="nav-item"><a className="select-item" href="nosotros">Nosotros</a></li>
                        <li className="nav-item"><a className="select-item" href="carta">Menú</a></li>
                        <li className="nav-item"><a className="select-item" href="servicios">Servicios</a></li>
                        <li className="nav-item"><a className="select-item" href="reserva">Reservar</a></li>
                        <li className="nav-item"><a className="select-item" href="mapa">Mapa</a></li>
                    </ul>
                    <ul className = "navbar-nav p-3">
                        <li className="nav-item">
                            <a className="icono-1 select-item" href="carrito"><FontAwesomeIcon icon={faShoppingBasket}/></a>
                        </li>
                    </ul>
                </div>

      </div>
    
    </nav> 


    </header>
  );
};

export default Header;
