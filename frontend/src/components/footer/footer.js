import React from 'react';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            copyright ©  Destination Unknown 2023
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__terms">
            <a href="/privacy-policy">Privacy Policy</a>
            <br />
            <a href="/terms-of-service">Terms of Service</a>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__contact">
            <a href="/about-us">About Us</a>
            <br />
            <a href="/contact-us">Contact Us</a>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
      <section className="footer-bottom">
        <p>{`© ${year} My Awesome Website. All Rights Reserved.`}</p>
      </section>
    </footer>
  );
};

export default Footer;

