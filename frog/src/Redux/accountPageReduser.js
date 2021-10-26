const ADD_POST = 'ADD_POST'
const ON_POST_CHANGE = 'ON_POST_CHANGE'

let initialState = {
	posts: [
		{id:1, message:'Hi this is new web frog', likesCount: 15},
		{id:2, message:'This is messenger made in react', likesCount: 11},
		{id:3, message:'Take it', likesCount: 2},
		{id:4, message:'Thanks', likesCount: 333333}
	],
	newPostText: ''
}

const accoutPageReduser = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			}

			state.posts.push(newPost)
			state.newPostText = ''

			return state

		case ON_POST_CHANGE:
			state.newPostText = action.newText

			return state

		default:
			return state
	}

}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const onPostChangeActionCreater = (text) => ({ type: ON_POST_CHANGE, newText: text })

export default accoutPageReduser