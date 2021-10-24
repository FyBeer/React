import './App.css';
import Account from './components/Account/Account';
import Dialogs from './components/Dialogs/Diaologs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Setting';
import Side_bar from './components/Left_column/Side_bar';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="frog-box">
        <Header></Header>
        <div className="content-box">
          <Side_bar></Side_bar>
          <div className="content-box__item">
            <Route path='/dialogs' component={Dialogs}></Route>
            <Route path='/account' component={Account}></Route>
            <Route path='/music' component={Music}></Route>
            <Route path='/news' component={News}></Route>
            <Route path='/settings' component={Settings}></Route>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
