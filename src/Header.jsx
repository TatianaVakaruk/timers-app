import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <span className="header__logo">Times App</span>
      <nav className="header__navigation">
        <ul className="header__links">
          <li>
            <a href="#" className="header__link">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Video Tour
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Reviews
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Pricing
            </a>
          </li>
        </ul>
        <button className="header__action-button button button_white">
          Get it free
        </button>
      </nav>
    </header>
  );
};
export default Header;
