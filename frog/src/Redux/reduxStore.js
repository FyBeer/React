import { applyMiddleware, combineReducers, createStore } from "redux"
import accountPageReducer from "./accountPageReducer"
import authReducer from "./authReducer"
import dialogsPageReducer from "./dialogsPageReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
	accountPage: accountPageReducer,
	dialogsPage: dialogsPageReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store
