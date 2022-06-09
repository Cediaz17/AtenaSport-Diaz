import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar(props)
{
    return (
        <div className="navbar">
            <div className="nav">
                <a href="/">
                    <div className="logo">
                        <p>Atenea Sport</p>
                    </div>
                </a>
                <div className="navItem">
                    <NavLink to={'/'}> Inicio </NavLink>
                    <NavLink to={'/catalogo/Mujer'}> Mujer </NavLink>
                    <NavLink to={'/catalogo/Hombre'}> Hombre </NavLink>
                    <NavLink to={'/'}> Ofertas </NavLink>
                </div>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;