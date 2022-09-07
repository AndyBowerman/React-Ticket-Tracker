import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import team from './assets/data/team';

const App = () => {


  return (
    <div className="app">
      <Header />
      <Main teamInfo={team} />
    </div>
  );
}

export default App;