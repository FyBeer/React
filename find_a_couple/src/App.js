import './App.css';
import Game_box from './components/Game_box/Game_box';
import Header from './components/Header/Header';

function App(props) {
  return (
    <div className="App">
      <Header></Header>
      <Game_box cards={props.state} ></Game_box>
    </div>
  );
}

export default App;
