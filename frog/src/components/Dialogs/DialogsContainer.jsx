import { connect } from 'react-redux';
import { addMessageActionCreater, onMessageChangeActionCreater } from '../../Redux/dialogsPageReduser';
import Dialogs from './Diaologs';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
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
