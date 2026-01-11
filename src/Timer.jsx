import React, { useState, useEffect, useRef } from 'react';
import toggle from '../img/8.png';
import delete1 from '../img/9.png';
import toggle1 from '../img/10.png';
import { setInterval } from 'core-js';

const Timer = ({ item, setItems }) => {
  const [timer, setTimer] = useState(item);
  const [timers, setTimers] = useState(() => {
    const saved = localStorage.getItem('timers');
    if (saved) {
      return JSON.parse(saved).map((timer) => {
        if (timer.isRunning) {
          const now = new Date();
          const elapsed = Math.floor(
            (now - new Date(timer.lastUpdated)) / 1000
          );
          return {
            ...timer,
            seconds: timer.seconds + elapsed,
            lastUpdated: now,
          };
        }
        return timer;
      });
    }
    return [];
  });
  const toggleTimer = (id) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id
          ? {
              ...timer,
              isRunning: !timer.isRunning,
              lastUpdated: new Data(),
            }
          : timer
      )
    );
  };
  const removeItem = () =>
    setItems((prev) => prev.filter((item) => item.id !== timer.id));
  const formatTime = (s) =>
    [s / 3600, (s % 3600) / 60, s % 60]
      .map((v) => String(Math.floor(v)).padStart(2, '0'))
      .join(':');
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('timers', JSON.stringify(timers));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [timers]);

  return (
    <li className="timers__forms">
      <h6 className="timers__forms-title">{timer.text}</h6>
      <span
        style={
          timer.isRunning
            ? { backgroundColor: 'rgb(231, 232, 234)' }
            : { backgroundColor: '#ff4876', opacity: 0.15 }
        }
        className="timers__forms-value"
      >
        {formatTime(timer.seconds)}
      </span>
      <button
        onClick={() => toggleTimer(timer.id)}
        className="timers__forms_toggle-button
        timers__forms_toggle-button-paused"
      >
        {timer.isRunning ? (
          <img src={toggle} alt="timer toggle" />
        ) : (
          <img src={toggle1} alt="paused" />
        )}
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
