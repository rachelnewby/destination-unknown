import React, { useState } from 'react';

import './footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              @DestinatioN UnknowN
          </section>       
        </section>
        <section className="footer-info-center">
          <section className="footer-info__git">
            github idk
          </section>
          <section className="footer-info__terms">
            policy
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__contact">
            Our Story
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;