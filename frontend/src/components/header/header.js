import React from 'react';
import logo from './logo2.png';

function Header() {
  return (
    <header style={{display: 'flex', alignItems: 'center', backgroundColor: 'hsl(30 , 5%, 85%)', height: '40px'}}>
      <img src={logo} alt="logo" style={{ height: '50px', width: '50px', marginRight: '10px' }}/>
    </header>
  );
}

export default Header;