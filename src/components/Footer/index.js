import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo-branca.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.codigofluente.com.br/" target="_blank" rel="noopener noreferrer">
        <img src={Logo} alt="Logo" />
      </a>
      <h2>
        {' '}
        <a href="https://www.codigofluente.com.br/" target="_blank" rel="noopener noreferrer">
          Código Fluente
        </a>
      </h2>
    </FooterBase>
  );
}

export default Footer;
