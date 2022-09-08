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



  return (
    <div className="app">
      <Header createUser={createUser} />
      <Main teamInfo={data} img={codingImg} />
    </div>
  );
}

export default App;