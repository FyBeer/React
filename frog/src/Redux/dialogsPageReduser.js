const ADD_MESSAGE = 'ADD_MESSAGE'
const ON_MESSAGE_CHANGE = 'ON_MESSAGE_CHANGE'

let initialState = {
	dialogs: [
			
		{id:1, name:'Nock Nock'},
		{id:2, name:'Frog Knock'},
		{id:3, name:'Tech Nology'},
		{id:4, name:'Team Lid'},
		{id:5, name:'H R'}
	],

	messages: [
		{id:1, message:'Hi, i love Lamashtu'},
		{id:2, message:'Frog take it'},
		{id:3, message:'New path for react'},
		{id:4, message:'Where my project bitch'},
		{id:5, message:'Good job my little boy'}
	],
	newMessageText: ''
}

const dialogsPageReduser = (state = initialState, action) => {
	
	let stateCopy = {
		...state,
		messages: [...state.messages]
	}

	switch (action.type) {
		
		case ADD_MESSAGE:{
			let newMessage = {
				id: 6,
				message: state.newMessageText
			}

			stateCopy.messages.push(newMessage)
			stateCopy.newMessageText = ''

			return stateCopy
		}
			

		case ON_MESSAGE_CHANGE: {

			stateCopy.newMessageText = action.newText

			return stateCopy
		}
			
	
		default:
			return state
	}

}

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE })
export const onMessageChangeActionCreater = (text) => ({ type: ON_MESSAGE_CHANGE, newText: text })

export default dialogsPageReduser