import './App.css';
import Account from './components/Account/Account';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Setting';
import { Route } from 'react-router-dom';
import Side_bar from './components/Left_column/Side_bar';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (
    <div className="frog-box">
      <Header></Header>
      <div className="content-box">
        <Side_bar />
        <div className="content-box__item">
          <Route path='/dialogs' component={DialogsContainer}></Route>
          <Route path='/account' component={Account}></Route>
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/music' component={Music}></Route>
          <Route path='/news' component={News}></Route>
          <Route path='/settings' component={Settings}></Route>
        </div>
      </div>
    </div>
  );

}
export default App;
