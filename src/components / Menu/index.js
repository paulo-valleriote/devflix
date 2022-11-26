import React from "react";
import logo from '../../assets/logo-devflix-1.png'
import Button from "../Button";
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={logo} alt='Devflix logo' className="Logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;