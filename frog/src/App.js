import './App.css';
import Header from './components/Header';
import Side_bar from './components/Side_bar';
import User_content from './components/User_content';

const App = () => {
  return (
    <div className="frog-box">
      <Header></Header>
      <div className="content-box">
        <Side_bar></Side_bar>
        <User_content></User_content>
      </div>
    </div>
  );
}
export default App;
