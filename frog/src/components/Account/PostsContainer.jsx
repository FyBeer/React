import Posts from "./Posts"
import { addPostActionCreater, onPostChangeActionCreater } from '../../Redux/accountPageReduser';


let PostsContainer = (props) => {

	let state = props.store.getState()


	let addPost = () => {
		props.store.dispatch(addPostActionCreater())
	}
	
	let PostChange = (text) => {
		props.store.dispatch(onPostChangeActionCreater(text))
	}

	debugger

	return <Posts updateNewPost={PostChange} addPost={addPost} posts={state.accountPage.posts} postsText={state.accountPage.newPostText} />
}

export default PostsContainer