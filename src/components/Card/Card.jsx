import React from 'react';
import Counter from './Counter';
import './Card.scss';

const Card = () => {
  return (
    <div className="card">
        <h3 className="card__header">Name</h3>
        <h3 className="card__header">Role</h3>
        <Counter />
    </div>
  )
}

export default Card