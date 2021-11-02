import React from 'react';
import { Redirect } from 'react-router';
import Dialogs_style from './Dialogs_style/Dialogs.module.css'
import Dialog from './Dialog_item/Dialog_item';
import Message from './Message_item/Message_item';

const Dialogs = (props) => {

	let onAddMessage = () =>{
		
		props.addMessage()
	}

	let onPostChange = (e) => {
		let text = e.target.value
		props.updatePostChange(text)
	}

	let dialogsElements = props.dialogs.map( d =>  <Dialog name={d.name} key={d.id} id={d.id}></Dialog>)

	let messagesElements = props.messages.map( m =>  <Message message={m.message} key={m.id} id={m.id}></Message>)
	

	
	return (
		<div className={Dialogs_style.box}>
			<div className={Dialogs_style.dialogs}>
				{dialogsElements}
			</div>
			<div className={Dialogs_style.messages}>
				{messagesElements}
				<textarea
					type="text"
					value={props.newMessageText}
					onChange={onPostChange}></textarea>
				<button onClick={onAddMessage} ></button>
			</div>

		</div>
	)
}

export default Dialogs