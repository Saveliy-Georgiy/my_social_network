import React from 'react';
import vk from "../vk.png";
import './Header.css';

const Header = () => {
    return(
        <header className='header'>
        <img src={vk}/>
    </header>
    )
};

export default Header;