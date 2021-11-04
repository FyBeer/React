import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false
}

const authReducer = (state = initialState, action) => {


	switch (action.type) {
		
		case SET_USER_DATA:{
			return {
				...state,
				...action.payload
			}
		}
			
			
		default:
			return state
	}

}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, payload: {userId, login, email, isAuth} })

export const getAuthMe = () => (dispatch) => {
	return authAPI.authMe().then(data => {
		if (data.resultCode === 0) {
			let {id, login, email} = data.data
			dispatch(setAuthUserData(id, login, email, true))
		}
	})
}

export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0 ) {
			dispatch(getAuthMe()) 
		} else {
			let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
			dispatch(stopSubmit('login', {_error: message}))
		}
		 
	})
}

export const logout = () => (dispatch) => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}

export default authReducer