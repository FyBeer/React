import './App.css';
import Account from './components/Account/Account';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Setting';
import SidebarContainer from './components/Left_column/SidebarContainer';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="frog-box">
        <Header></Header>
        <div className="content-box">
          <SidebarContainer store={props.store} ></SidebarContainer>
          <div className="content-box__item">
            <Route path='/dialogs' render={() => <DialogsContainer store={props.store} ></DialogsContainer>} ></Route>
            <Route path='/account' render={() => <Account store={props.store}></Account>}></Route>
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
