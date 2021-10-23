import './App.css';
import Account from './components/Account';
import Header from './components/Header';
import Side_bar from './components/Side_bar';

const App = () => {
  return (
    <div className="frog-box">
      <Header></Header>
      <div className="content-box">
        <Side_bar></Side_bar>
        <Account></Account>
      </div>
    </div>
  );
}
export default App;
