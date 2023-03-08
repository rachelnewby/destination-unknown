import React from 'react';
// import Logo from '../../assets/img-logo.png'
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            ©  Destination Unknown 2023
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__logo">
          {/* <NavLink to='/'><img src={Logo} alt="logo" /></NavLink> */}
            <a href="/privacy-policy">logo</a>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__team">
            Adam Hoar <a href="https://github.com/amh4" target="_blank" rel="noopener noreferrer">GitHub</a>  Chioma Igwe <a href="https://github.com/UserChi" target="_blank" rel="noopener noreferrer">GitHub</a>   Millie Severino <a href="https://github.com/MillieKS" target="_blank" rel="noopener noreferrer">GitHub</a>  Rachel Newby <a href="https://github.com/rachelnewby" target="_blank" rel="noopener noreferrer">GitHub</a>   Shaun Flood <a href="https://github.com/ShaunFlood" target="_blank" rel="noopener noreferrer">GitHub</a>


          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
      <section className="footer-bottom">
        <p>{`© ${year} The Tonalist Squad. All Rights Reserved.`}</p>
      </section>
    </footer>
  );
};

export default Footer;

