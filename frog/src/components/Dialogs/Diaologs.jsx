import Dialogs_style from './Dialogs_style/Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {

	let path = "/dialogs/" + props.id

	return (
		<ul>
			<li>
				<NavLink to={path}>{props.name}</NavLink>
			</li>
		</ul>
	)
}

const Message = (props) => {
	return (
		<ul>
			<li>
				{props.message}
			</li>
		</ul>
	)
}

const Dialogs = (props) => {
	return (
		<div className={Dialogs_style.box}>
			<div className={Dialogs_style.dialogs}>
				<Dialog name='Knock Knock' id="1"></Dialog>
				<Dialog name='Frog Knock' id="2"></Dialog>
				<Dialog name='Tech Nology' id="3"></Dialog>
				<Dialog name='Team Lid' id="4"></Dialog>
			</div>
			<div className={Dialogs_style.messages}>
				<Message message='Hi, i love Lamashtu'></Message>
				<Message message='Frog take it'></Message>
				<Message message='New path for react'></Message>
				<Message message='Where my project bitch'></Message>
			</div>

		</div>
	)
}

export default Dialogs