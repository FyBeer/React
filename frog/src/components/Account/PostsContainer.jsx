import Posts from "./Posts"
import { addPostActionCreater, onPostChangeActionCreater } from '../../Redux/accountPageReduser';
import { connect } from "react-redux";


let mapStateToProps = (state) => {
	return {
		state: state.accountPage
	}
}

let mapDispatchToProps = (dispatch) => {
	
	return {
		addPost: () => {
			dispatch(addPostActionCreater())
		},
		PostChange: (text) => {
			dispatch(onPostChangeActionCreater(text))
		}
	}
}

let PostsContainer = connect (mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer