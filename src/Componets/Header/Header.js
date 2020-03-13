import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h3 style={{color: 'deeppink'}}>REACT USERS INFORMATION AND SALARY APP</h3>
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;