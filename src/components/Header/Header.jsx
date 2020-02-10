import React from 'react';
import vk from "../../vk.png";
import s from './Header.module.css';

const Header = () => {
    return(
        <header className = {s.header}>
        <img src={vk}/>
    </header>
    )
};

export default Header;