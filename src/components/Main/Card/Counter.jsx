import React, { useState } from 'react';
import './Counter.scss';

const Counter = () => {

  let [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(++counter);
  }

  const decrementCounter = () => {
    return counter !== 0 ? setCounter(--counter) : counter;
  }

  return (
    <div className="counter">
        <p className="counter__count">{counter}</p>
        <div className="counter__container">
            <button className="counter__button" onClick={decrementCounter}>-</button>
            <button className="counter__button" onClick={incrementCounter}>+</button>
        </div>
    </div>
  )
}

export default Counter