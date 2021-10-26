import './App.css';
import Account from './components/Account/Account';
import Dialogs from './components/Dialogs/Diaologs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Setting';
import Side_bar from './components/Left_column/Side_bar';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  debugger
  
  return (
    <BrowserRouter>
      <div className="frog-box">
        <Header></Header>
        <div className="content-box">
          <Side_bar sidebarData={props.state.sidebar} ></Side_bar>
          <div className="content-box__item">
            <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage}
                                                          dispatch={props.dispatch} ></Dialogs>} ></Route>
            <Route path='/account' render={() => <Account accountData={props.state.accountPage} 
                                                          dispatch={props.dispatch}></Account>}></Route>
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
