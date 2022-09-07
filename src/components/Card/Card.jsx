import React from 'react';
import Counter from './Counter';
import './Card.scss';

const Card = (props) => {

  const {name, role, id} = props;

  return (
    <div key={id} className="card">
        <h3 className="card__header">Name: {name}</h3>
        <h3 className="card__header">Role: {role}</h3>
        <Counter />
    </div>
  )
}

export default Card