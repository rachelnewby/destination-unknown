import React from 'react';
import Logo from '../assets/compare.png';
// import {NavLink, Link} from 'react-router-dom';
import './compare.css'

const CompareImage = () => {
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

export default CompareImage;