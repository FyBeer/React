import { combineReducers, createStore } from "redux"
import accoutPageReduser from "./accountPageReduser"
import dialogsPageReduser from "./dialogsPageReduser"
import sidebarReduser from "./sidebarReduser"
import usersReduser from "./usersReduser"

let redusers = combineReducers({
	accountPage: accoutPageReduser,
	dialogsPage: dialogsPageReduser,
	sidebar: sidebarReduser,
	usersPage: usersReduser
})

let store = createStore(redusers)

export default store
