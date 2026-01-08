import React, { useState, useEffect, useRef } from 'react';
import toggle from '../img/8.png';
import delete1 from '../img/9.png';
import { setInterval } from 'core-js';

const Timer = ({ item, setItems }) => {
  const [timer, setTimer] = useState(item);
  useEffect(() => {
    if (!timer.isRunning) return;
    const interval = setInterval(() => {
      setTimer((prev) => ({ ...prev, seconds: (prev.seconds += 1) }));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer.isRunning]);
  const toggleTimer = () =>
    setTimer((prev) => ({ ...prev, isRunning: !isRunning }));
  const removeItem = () =>
    setItems((prev) => prev.filter((item) => item.id !== timer.id));
  const formatTime = (s) =>
    [s / 3600, (s % 3600) / 60, s % 60]
      .map((v) => String(Math.floor(v)).padStart(2, '0'))
      .join(':');

  return (
    <li className="timers__forms">
      <h6 className="timers__forms-title">{timer.text}</h6>
      <span
        style={{ backgroundColor: 'rgb(231, 232, 234)' }}
        className="timers__forms-value"
      >
        {formatTime(timer.seconds)}
      </span>
      <button
        onClick={() => toggleTimer(timer.id)}
        className="timers__forms_toggle-button
        timers__forms_toggle-button-paused"
      >
        <img src={toggle} alt="timer toggle" />
      </button>
      <button
        onClick={() => removeItem(item.id)}
        className="timers__forms_delete-button"
      >
        <img src={delete1} alt="delete" />
      </button>
    </li>
  );
};

export default Timer;
