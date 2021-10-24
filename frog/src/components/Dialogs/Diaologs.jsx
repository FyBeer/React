import Dialogs_style from './Dialogs_style/Dialogs.module.css'
import Dialog from './Dialog_item/Dialog_item';
import Message from './Message_item/Message_item';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsData.dialogs.map( d =>  <Dialog name={d.name} id={d.id}></Dialog>)

	let messagesElements = props.dialogsData.messages.map( m =>  <Message message={m.message} id={m.id}></Message>)

	return (
		<div className={Dialogs_style.box}>
			<div className={Dialogs_style.dialogs}>
				{dialogsElements}
			</div>
			<div className={Dialogs_style.messages}>
				{messagesElements}
			</div>

		</div>
	)
}

export default Dialogs