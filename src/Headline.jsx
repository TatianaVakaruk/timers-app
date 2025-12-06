import React from 'react';
import logo from '../img/2.png';
import photo from '../img/3.png';

const Headline = () => {
  return (
    <section className="headline">
      <div className="headline__content content">
        <div className="headline__description">
          <img className="headline__logo" src={logo} alt="logo" />
          <h2 className="headline__title">
            <span className="bold">Timers App.</span> Best landing page for web
            and mobile apps
          </h2>
          <div className="headline__buttons">
            <button className="button">Download Now</button>
            <button className="button button_white">Watch Video</button>
          </div>
        </div>
        <img
          className="headline__description_visible "
          src={photo}
          alt="decoration"
        />
      </div>
    </section>
  );
};
export default Headline;
