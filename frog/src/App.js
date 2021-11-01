import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Setting';
import { Route } from 'react-router-dom';
import Side_bar from './components/Left_column/Side_bar';
import UsersContainer from './components/Users/UsersContainer';
import AccountContainer from './components/Account/AccountContainer'
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

  return (
    <div className="frog-box">
      <HeaderContainer />
      <div className="content-box">
        <Side_bar />
        <div className="content-box__item">
          <Route path='/dialogs' component={DialogsContainer}></Route>
          <Route path="/profile/:userId" component={AccountContainer}></Route>
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
