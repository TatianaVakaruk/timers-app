import React, { useState } from 'react';
import moment from 'moment';
import './index.scss';

const TimerForm = ({ setTimers }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newTimer = {
      id: Date.now(),
      text: inputValue.trim() || `From ${moment().format('HH:mm')}`,
      seconds: 0,
      isRunning: true,
    };
    setTimers(prevTimers => {
      localStorage.setItem('timers', JSON.stringify([newTimer, ...prevTimers]));
      return [newTimer, ...prevTimers];
    });
    setInputValue('');
  };

  return (
    <>
      <form className="timers__form">
        <input
          type="text"
          placeholder="Timer Name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          className="timers__submit-button button__decoration"
          type="submit"
          onClick={handleSubmit}
        >
          Create Timer
        </button>
      </form>
      <span className="timers__line"></span>
    </>
  );
};

export default TimerForm;
