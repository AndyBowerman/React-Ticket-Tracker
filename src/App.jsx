import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import team from './assets/data/team';
import codingImg from './assets/images/coding-img.jpg';

const App = () => {


  return (
    <div className="app">
      <Header />
      <Main teamInfo={team} img={codingImg} />
    </div>
  );
}

export default App;