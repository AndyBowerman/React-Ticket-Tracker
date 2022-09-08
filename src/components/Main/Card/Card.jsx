import React from 'react';
import Counter from './Counter';
import './Card.scss';

const Card = (props) => {

  const {name, role, id, img} = props;

  return (
    <div key={id} className="card">
      <div className="card__header">
        <h3 className='card__header--name'>{name}</h3>
        <p>{role}</p>
      </div>        
      <img className="card__image" src={img} alt="Coding background" />
      <Counter />
      <div className="card__overlay"></div>
    </div>
  )
}

export default Card