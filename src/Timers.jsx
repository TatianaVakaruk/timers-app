import React, { useState } from 'react';
import TimerForm from './TimerForm.jsx';
import Timer from './Timer.jsx';

const Timers = () => {
  const [items, setItems] = useState([]);
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
          <Timer items={items} key={item.id} item={item} setItems={setItems} />
        ))}
      </ul>
    </section>
  );
};
export default Timers;
