import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-devflix-1.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={logo} alt="Devflix logo" className="Logo" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
