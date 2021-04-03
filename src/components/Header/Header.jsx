import React from 'react';
import logo from '../../images/icc-new-logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt=""/> 
           <nav>
               <a href="/Players">Players</a>
               <a href="/tournament">Tournament</a>
               <a href="/champions">World Champions</a>
           </nav>
        </div>
    );
};

export default Header;