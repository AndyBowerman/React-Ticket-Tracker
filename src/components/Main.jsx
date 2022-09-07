import React from 'react';
import Card from './Card/Card';
import './Main.scss';


const Main = (props) => {
  
  const{teamInfo} = props;
  const infoCards = teamInfo.map(employee => <Card name={employee.name} role={employee.role} key={employee.id} />)

  return (
    <div className="card-container">
        {infoCards}
    </div>
  )
}

export default Main