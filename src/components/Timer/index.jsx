import React, { useState, useEffect, useRef } from 'react';
import pause from '../../../img/pause.png';
import del from '../../../img/delete.png';
import run from '../../../img/run.png';
import { setInterval } from 'core-js';
import moment from 'moment';

const getOtherStoredTimers = id =>
  JSON.parse(localStorage.getItem('timers') || []).filter(timer => timer.id !== id);

const Timer = ({ initialTimer, setTimers }) => {
  const [timer, setTimer] = useState(initialTimer);
  const { id, seconds, isRunning, lastUpdated } = timer;
  console.log(seconds);
  useEffect(() => {
    let intervalId = null;
    const passedTime = moment().diff(moment(lastUpdated), 'seconds');
    if (isRunning && passedTime) {
      setTimer(prevState => ({
        ...prevState,
        seconds: prevState.seconds + passedTime,
      }));
    }
    if (isRunning) {
      intervalId = +setInterval(() => {
        setTimer(prevState => ({
          ...prevState,
          seconds: prevState.seconds + 1,
        }));
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);
  useEffect(() => {
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [timer]);
  const onUnload = () => {
    localStorage.setItem(
      'timers',
      JSON.stringify([
        ...getOtherStoredTimers(id),
        { ...timer, lastUpdated: moment().toISOString() },
      ]),
    );
  };
  const onToggle = () => {
    setTimer(prevTimer => ({
      ...prevTimer,
      isRunning: !isRunning,
    }));
  };
  const onDelete = () => {
    localStorage.setItem('timers', JSON.stringify(getOtherStoredTimers(id)));
    setTimers(getOtherStoredTimers(id));
  };
  const formatTime = s =>
    [s / 3600, (s % 3600) / 60, s % 60].map(v => String(Math.floor(v)).padStart(2, '0')).join(':');

  return (
    <li className="timer">
      <h6 className="timer__title">{timer.text}</h6>
      <span
        style={
          timer.isRunning
            ? { backgroundColor: 'rgb(231, 232, 234)' }
            : { backgroundColor: '#ff487626' }
        }
        className="timer__value"
      >
        {formatTime(timer.seconds)}
      </span>
      <button
        onClick={onToggle}
        className="timer__toggle-button
        timer__toggle-button-paused"
      >
        {timer.isRunning ? <img src={pause} alt="timer toggle" /> : <img src={run} alt="paused" />}
      </button>
      <button onClick={onDelete} className="timer__delete-button">
        <img src={del} alt="delete" />
      </button>
    </li>
  );
};

export default Timer;
