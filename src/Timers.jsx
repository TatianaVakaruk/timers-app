import React, { useState, useEffect } from 'react';
import TimerForm from './TimerForm.jsx';
import Timer from './Timer.jsx';

const Timers = () => {
  const [items, setItems] = useState([]);
  const [timers, setTimers] = (useState = () => {
    const saved = localStorage.getItem('timers');
    if (saved) {
      // восстанавливаем lastUpdated и корректируем seconds для запущенных таймеров
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

  return (
    <section className="timers">
      <h2 className="timers__title">
        <span className="bold">Why </span>
        do we do it?
      </h2>
      <p className="timers__description">
        This sounded nonsense to Alice, so she said nothing, but set off at once
        toward the Red Queen. To her surprise, she lost sight of her in a
        moment.
      </p>
      <TimerForm setItems={setItems} />
      <ul className="timers__list">
        {items.map((item) => (
          <Timer key={item.id} items={items} item={item} setItems={setItems} />
        ))}
      </ul>
    </section>
  );
};
export default Timers;
