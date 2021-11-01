import { applyMiddleware, combineReducers, createStore } from "redux"
import accountPageReduser from "./accountPageReduser"
import authReduser from "./authReduser"
import dialogsPageReduser from "./dialogsPageReduser"
import sidebarReduser from "./sidebarReduser"
import usersReduser from "./usersReduser"
import thunkMiddleware from 'redux-thunk'

let redusers = combineReducers({
	accountPage: accountPageReduser,
	dialogsPage: dialogsPageReduser,
	sidebar: sidebarReduser,
	usersPage: usersReduser,
	auth: authReduser
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))
window.store = store

export default store
