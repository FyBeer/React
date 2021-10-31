const ADD_POST = 'ADD_POST'
const ON_POST_CHANGE = 'ON_POST_CHANGE'
const SET_USERS_ACCOUNT = 'SET_USERS_ACCOUNT'

let initialState = {
	posts: [
		{id:1, message:'Hi this is new web frog', likesCount: 15},
		{id:2, message:'This is messenger made in react', likesCount: 11},
		{id:3, message:'Take it', likesCount: 2},
		{id:4, message:'Thanks', likesCount: 333333}
	],
	newPostText: '',
	account: null
}

const accountPageReduser = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: 

		let newPostText = state.newPostText
			return {
				...state,
				newPostText: "",
				posts: [...state.posts, {id: 5, message: newPostText, likesCount: 0}]
			}
		

		case ON_POST_CHANGE: 
			return {
				...state,
				newPostText: action.newText
		}

		case SET_USERS_ACCOUNT: 
			return {
				...state,
				account: action.account
		}

		default:
			return state
	}

}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const onPostChangeActionCreater = (text) => ({ type: ON_POST_CHANGE, newText: text })
export const setUserAccount = (account) => ({type: SET_USERS_ACCOUNT, account })

export default accountPageReduser