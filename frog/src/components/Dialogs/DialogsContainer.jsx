import React from 'react';
import { addMessageActionCreater, onMessageChangeActionCreater } from '../../Redux/dialogsPageReduser';
import Dialogs from './Diaologs';

const DialogsContainer = (props) => {

	let state = props.store.getState()

	let addMessage = () =>{
		props.store.dispatch(addMessageActionCreater())
	}

	let updatePostChange = (text) => {
		debugger
		props.store.dispatch(onMessageChangeActionCreater(text))
	}

	return <Dialogs addMessage={addMessage} 
						 updatePostChange={updatePostChange} 
						 dialogs={state.dialogsPage.dialogs} 
						 messages={state.dialogsPage.messages} 
						 messageText={state.dialogsPage.newMessageText}/>
}

export default DialogsContainer
