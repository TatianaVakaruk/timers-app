import React, { useState } from 'react';
import CreateTime from './CreateTime.jsx';

const Timers = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddClick = () => {
    if (inputValue === '') {
      return null;
    }
    setItems([...items, inputValue]); // Добавляем новое значение в массив
    setInputValue(''); // Очищаем input
  };
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
      <div className="timers__content">
        <form className="timers__form">
          <input
            type="text"
            placeholder="Timer Name"
            value={inputValue}
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
          <CreateTime items={items} />
        </ul>
      </div>
    </section>
  );
};
export default Timers;
