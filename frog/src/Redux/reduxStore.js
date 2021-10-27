import { combineReducers, createStore } from "redux"
import accoutPageReduser from "./accountPageReduser"
import dialogsPageReduser from "./dialogsPageReduser"
import sidebarReduser from "./sidebarReduser"

let redusers = combineReducers({
	accountPage: accoutPageReduser,
	dialogsPage: dialogsPageReduser,
	sidebar: sidebarReduser
})

let store = createStore(redusers)


window.store = store

export default store
