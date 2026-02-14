import React from 'react';
import logo from '../../../img/logo.png';
import photo from '../../../img/picture.png';

const Headline = () => {
  return (
    <section className="headline">
      <div className="headline__content content">
        <div className="headline__description">
          <img className="headline__logo" src={logo} alt="logo" />
          <h2 className="headline__title">
            <span className="bold">Timers App.</span> Best landing page for web and mobile apps
          </h2>
          <div className="headline__buttons">
            <button className="headline__button">Download Now</button>
            <button className="button button_white1">Watch Video</button>
          </div>
        </div>
        <img className="headline__description_visible " src={photo} alt="decoration" />
      </div>
    </section>
  );
};
export default Headline;
