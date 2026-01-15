import React, { useState, useEffect } from 'react';
import moment from 'moment';
const TimerForm = ({ setTimers }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTimer = {
      id: new Data(),
      text: inputValue.trim() || `From ${moment().format('HH:mm')}`,
      seconds: 0,
      isRunning: true,
    };
    setTimers((prevTimers) => {
      localStorage.setItem('timers', JSON.stringify([...prevTimers, newTimer]));
      return [...prevTimers, newTimer];
    });
    setInputValue = '';
  };

  return (
    <div className="timers__content">
      <form className="timers__form">
        <input
          type="text"
          placeholder="Timer Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="timers__submit-button button1"
          type="submit"
          onClick={handleSubmit}
        >
          Create Timer
        </button>
      </form>
      <span className="timers__line"></span>
    </div>
  );
};

export default TimerForm;
