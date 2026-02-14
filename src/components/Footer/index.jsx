import React from 'react';
import love from '../../../img/heart.png';
import twitter from '../../../img/twitter.png';
import facebook from '../../../img/facebook.png';
import instagram from '../../../img/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content content">
        <span className="footer__logo">Timers App</span>
        <div className="footer__terms">
          <span>
            <span className="move__shift">Created with</span>
            <img src={love} alt="love" />
            <span className="move__span">
              by
              <span className="bold"> Sergey Azovskiy</span>
            </span>
          </span>
          <span className="move__app"> © Timers App, 2025</span>
        </div>
        <ul className="footer__social-icons">
          <li>
            <a href="#">
              <img className="image__border" src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="image__border" src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="image__border" src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
