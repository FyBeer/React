const SET_USER_DATA = 'SET_USER_DATA'
const ON_MESSAGE_CHANGE = 'ON_MESSAGE_CHANGE'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isFetching: false
}

const authReduser = (state = initialState, action) => {


	switch (action.type) {
		
		case SET_USER_DATA:{
			let newMessageText = state.newMessageText
			return {
				...state,
				...action.data
			}
		}
			
			
		default:
			return state
	}

}

export const setUSerData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} })

export default authReduser