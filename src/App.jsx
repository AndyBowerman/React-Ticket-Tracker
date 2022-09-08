import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import team from './assets/data/team';
import codingImg from './assets/images/coding-img.jpg';
import { useState } from 'react';

const App = () => {

  let [data, setData] = useState([...team]);

  const createUser = (userName, jobTitle) => {
    setData([...data, {id: data.length + 1, name: userName, role: jobTitle}])
  }

  const searchUser = (userName, jobTitle) => {
    setData([...data].filter(employee => {
      if(userName && jobTitle) {
        if(employee.name.toLowerCase() == userName.toLowerCase() && jobTitle.toLowerCase() == employee.role.toLowerCase()) {
          return employee;
        }
      } else if(userName) {
        if(employee.name.toLowerCase() == userName) {
          return employee;
        }
      } else if(jobTitle) {
        if(employee.role.toLowerCase() == jobTitle.toLowerCase()) {
          return employee;
        }
      }
    }))
  }

  return (
    <div className="app">
      <Header createUser={createUser} searchUser={searchUser} />
      <Main teamInfo={data} img={codingImg} />
    </div>
  );
}

export default App;