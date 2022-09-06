import React from 'react';
import './Counter.scss';

const Counter = () => {
  return (
    <div className="counter">
        <h3 className="counter__header">Counter</h3>
        <p className="counter__count">0</p>
        <div className="counter__container">
            <button className="counter__button">-</button>
            <button className="counter__button">+</button>
        </div>
    </div>
  )
}

export default Counter