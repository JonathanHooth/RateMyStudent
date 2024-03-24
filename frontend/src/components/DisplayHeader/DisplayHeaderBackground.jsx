import React from 'react'
import dinoTxt from '../../resources/dinoboi.png';
import './DisplayHeaderBackground.css';

const Header2 = () => {
  return (
    <header className="headerBg">
        <img src={dinoTxt} className = "logoTxt" alt="Logo"/>
    </header>
  );
}

export default Header2;