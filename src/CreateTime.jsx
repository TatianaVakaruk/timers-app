import React, { useState, useEffect } from 'react';
import toggle from '../img/8.png';
import delete1 from '../img/9.png';
import moment from 'moment';

const CreateTime = ({ items }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = moment
    .utc(moment.duration(seconds, 'seconds').asMilliseconds())
    .format('HH:mm:ss');
  return (
    <>
      {items.map((item, index) => (
        <li key={index} className="timer">
          <h6 className="timer__title">{item}</h6>
          <span className="timer__value">{formattedTime}</span>
          <button className="timer__toggle-button">
            <img src={toggle} alt="timer toggle" />
          </button>
          <button className="timer__delete-button">
            <img src={delete1} alt="delete" />
          </button>
        </li>
      ))}
    </>
  );
};
export default CreateTime;
