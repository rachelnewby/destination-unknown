import React from 'react';
import Logo from '../assets/slogan.png';
// import {NavLink, Link} from 'react-router-dom';
import './hero.css'

const Hero = () => {
    return(
        <div className='heroWrapper'>
            <div>
            <div className="heroImage">
                    <img
                    src={Logo}
                    alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;