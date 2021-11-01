const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false
}

const authReduser = (state = initialState, action) => {


	switch (action.type) {
		
		case SET_USER_DATA:{
			return {
				...state,
				...action.data
			}
		}
			
			
		default:
			return state
	}

}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: {userId, login, email, isAuth} })

export default authReduser