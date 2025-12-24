import React, { useState, useEffect } from 'react';
import toggle from '../img/8.png';
import delete1 from '../img/9.png';
import moment from 'moment';

const TimerForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddClick = (e) => {
    e.preventDefault();
    if (inputValue === '') {
      return;
    }
    setItems([...items, inputValue]); // Добавляем новое значение в массив
    setInputValue(''); // Очищаем input
  };
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
    <div className="timers__content">
      <form className="timers__form">
        <input
          type="text"
          placeholder="Timer Name"
          value={inputValue ?? ''}
          onChange={handleInputChange}
        />
        <button
          className="timers__submit-button button1"
          type="submit"
          onClick={handleAddClick}
        >
          Create Timer
        </button>
      </form>
      <span className="timers__line"></span>
      <ul className="timers__list">
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
      </ul>
    </div>
  );
};
export default TimerForm;
