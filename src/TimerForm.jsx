import React, { useState, useEffect } from 'react';

const TimerForm = ({ setItems }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: inputValue,
        seconds: 0,
      },
    ]);

    setInputValue('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          seconds: item.seconds + 1,
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
