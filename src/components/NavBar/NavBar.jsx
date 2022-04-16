import React from "react";
import './NavBar.css';


function NavBar(props)
{
    return (
        <div className="navbar">
            <div className="nav">
                <div className="logo">
                    Atenea Sport
                </div>
                <div className="navItem">
                    <a href="">Inicio</a>
                    <a href="">Mujer</a>
                    <a href="">Hombre</a>
                    <a href="">Ofertas</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;