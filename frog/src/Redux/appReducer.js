import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"
import { getAuthMe } from "./authReducer"

const SET_INITIALIZATION = 'SET_INITIALIZATION'

let initialState = {
	initialization: false
}

const appReducer = (state = initialState, action) => {
debugger

	switch (action.type) {
		
		case SET_INITIALIZATION:{
			return {
				...state,
				initialization: true
			}
		}
			
			
		default:
			return state
	}

}

export const isInitialization = () => ({ type: SET_INITIALIZATION})

export const initializeApp = () => (dispatch) => {
	dispatch(getAuthMe()).then(() => {
		dispatch(isInitialization())
	})
	
}


export default appReducer