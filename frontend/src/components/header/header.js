import React from 'react';
import Logo from '../../assets/banner-logo.png';
import {NavLink, Link} from 'react-router-dom';
import './header.css'
import ScrollToTop from "../scroll-top/scroll-to-top";


const Header = () => {
    const handleLogoClick = () => {
        window.scrollTo(0, 0);
    };
    return(
        <nav>
            <div className='div-header'>
                <div className='div-png'>
                    <NavLink to='/' onClick={handleLogoClick}><img src={Logo} alt="logo" /></NavLink>
                </div>
            </div>
            
        </nav>
    )
}


export default Header;