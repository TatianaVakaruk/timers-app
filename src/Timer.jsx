import React from 'react';
import toggle from '../img/8.png';
import delete1 from '../img/9.png';

const Timer = ({ key, item }) => {
  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };
  return (
    <li key={key} className="timers__forms">
      <h6 className="timers__forms-title">{item.text}</h6>
      <span
        style={{ backgroundColor: 'rgb(231, 232, 234)' }}
        className="timers__forms-value"
      >
        {formatTime(item.seconds)}
      </span>
      <button className="timers__forms_toggle-button timers__forms_toggle-button-paused">
        <img src={toggle} alt="timer toggle" />
      </button>
      <button className="timers__forms_delete-button">
        <img src={delete1} alt="delete" />
      </button>
    </li>
  );
};

export default Timer;
