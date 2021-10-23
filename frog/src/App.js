import './App.css';
import Account from './components/Account/Account';
import Header from './components/Header/Header';
import Side_bar from './components/Left_column/Side_bar';

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
