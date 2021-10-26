import Posts_style from './Account_style/Posts.module.css'
import { addPostActionCreater, onPostChangeActionCreater } from '../../Redux/accountPageReduser';
import Post from './Post/Post';
import React from 'react';

const Posts = (props) => {

	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}></Post> )

	let addPost = () => {
		props.dispatch(addPostActionCreater())
	}
	
	let onPostChange = (e) => {
		let text = e.target.value
		props.dispatch(onPostChangeActionCreater(text))
	}
	debugger
	return (
		<div>
			<div className={Posts_style.box}>
			<p className={Posts_style.header}>My posts</p>
			<textarea 
						type="text" 
						value={props.postsText} 
						className={Posts_style.input}
						onChange={onPostChange}></textarea>
			<button onClick={addPost} className={Posts_style.add}>send</button>
		</div>
			{postsElements}
		</div>
		
	);
}

export default Posts