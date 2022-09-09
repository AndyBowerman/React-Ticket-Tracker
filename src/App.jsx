import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import team from './assets/data/team';
import codingImg from './assets/images/coding-img.jpg';
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState([...team]);

  const createUser = (userName, jobTitle) => {
    setData([...data, {id: data.length + 1, name: userName, role: jobTitle}])
  }

  const searchByName = (userName) => {
    setData(data.filter(employee => {
      return employee.name.toLowerCase().includes(userName.toLowerCase());
    }))
  }

  const searchByJob = (jobTitle) => {
    setData(data.filter(employee => {
      return employee.role.toLowerCase().includes(jobTitle.toLowerCase());
    }))
  }

  return (
    <div className="app">
      <Header createUser={createUser} searchByName={searchByName} searchByJob={searchByJob} />
      <Main teamInfo={data} img={codingImg} />
    </div>
  );
}

export default App;