import React from 'react';
import logo from "./logo1.png";
import s from './Header.module.css';

const Header = () => {
    return (

        <header className={s.header}>
            <div className={s.logo}>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={s.logoName}>
                    <span>CACTUSME</span>
                </div>
            </div>

        </header>
    )
};

export default Header;