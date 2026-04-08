import React, { useState, useEffect } from 'react';
import TimerForm from '../TimerForm/index.jsx';
import Timer from '../Timer/index.jsx';
import './index.scss';

const Timers = () => {
  const [timers, setTimers] = useState([]);
  useEffect(() => {
    const storedTimers = localStorage.getItem('timers');
    if (storedTimers) {
      const parsed = JSON.parse(storedTimers);
      const sorted = parsed.sort((a, b) => b.id - a.id);
      setTimers(sorted);
    }
  }, []);

  return (
    <section className="timers">
      <h2 className="timers__title">
        <span className="timers__bold">Why </span>
        do we use it?
      </h2>
      <p className="timers__description">
        This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
        Queen. To her surprise, she lost sight of her in a moment.
      </p>
      <div className="timers__content">
        <TimerForm setTimers={setTimers} />
        <ul className="timers__list">
          {timers.map(timer => (
            <Timer key={timer.id} initialTimer={timer} setTimers={setTimers} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Timers;
