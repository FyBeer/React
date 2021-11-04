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
import Login from './components/login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Preloader from './components/Common/Preloadr/Preloader';
import { initializeApp } from './Redux/appReducer';

class App extends Component {


  componentDidMount() {
		this.props.initializeApp()
	}
  
  render () {

    if (!this.props.initialization) return <Preloader />

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
            <Route path='/login' component={Login}></Route>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization
})

export default compose(
  withRouter,
  connect(mapStateToProps,{initializeApp})
)(App)
