import React, { useState, useRef } from 'react';
import toggle from '../img/8.png';
import delete1 from '../img/9.png';

const Timer = ({ key, item, items, setItems }) => {
  const intervalsRef = useRef({});

  const toggleTimer = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        // якщо таймер працює → STOP
        if (item.isRunning) {
          clearInterval(intervalsRef.current[id]);
          delete intervalsRef.current[id];

          return { ...item, isRunning: false };
        }

        // якщо таймер зупинений → START
        intervalsRef.current[id] = setInterval(() => {
          setItems((prevTimers) =>
            prevTimers.map((t) =>
              t.id === id ? { ...t, seconds: t.seconds + 1 } : t
            )
          );
        }, 1000);

        return { ...item, isRunning: true };
      })
    );
  };
  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
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
      <button
        onClick={() => toggleTimer(item.id)}
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
