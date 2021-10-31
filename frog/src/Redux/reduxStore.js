import { combineReducers, createStore } from "redux"
import accountPageReduser from "./accountPageReduser"
import dialogsPageReduser from "./dialogsPageReduser"
import sidebarReduser from "./sidebarReduser"
import usersReduser from "./usersReduser"

let redusers = combineReducers({
	accountPage: accountPageReduser,
	dialogsPage: dialogsPageReduser,
	sidebar: sidebarReduser,
	usersPage: usersReduser
})

let store = createStore(redusers)
window.store = store

export default store
