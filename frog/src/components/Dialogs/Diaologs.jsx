import React from 'react';
import Dialogs_style from './Dialogs_style/Dialogs.module.css'
import Dialog from './Dialog_item/Dialog_item';
import Message from './Message_item/Message_item';

const Dialogs = (props) => {

	let newMessages = React.createRef()

	let addMessage = () =>{
		let text = newMessages.current.value

		alert(text)
	}

	let dialogsElements = props.dialogsData.dialogs.map( d =>  <Dialog name={d.name} id={d.id}></Dialog>)

	let messagesElements = props.dialogsData.messages.map( m =>  <Message message={m.message} id={m.id}></Message>)

	return (
		<div className={Dialogs_style.box}>
			<div className={Dialogs_style.dialogs}>
				{dialogsElements}
			</div>
			<div className={Dialogs_style.messages}>
				{messagesElements}
				<textarea ref={newMessages} ></textarea>
				<button onClick={addMessage} ></button>
			</div>

		</div>
	)
}

export default Dialogs