import { connect } from 'react-redux';
import { addMessageActionCreater, onMessageChangeActionCreater } from '../../Redux/dialogsPageReduser';
import Dialogs from './Diaologs';

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
		dialogs: state.dialogsPage.dialogs,
		newMessageText: state.dialogsPage.newMessageText
	}
}
let mapDispatchToProps = (dispatch) => {
	
	return {
		updatePostChange: (text) => {
			dispatch(onMessageChangeActionCreater(text))
		},

		addMessage: () => {
			dispatch(addMessageActionCreater())
		}
	}
}

const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer
