import Posts_style from './Account_style/Posts.module.css'
import Post from './Post/Post';
import React from 'react';

const Posts = (props) => {

	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}></Post> )

	let onAddPost = () => {
		debugger
		props.addPost()
	}
	
	let onPostChange = (e) => {
		debugger
		let text = e.target.value
		props.updateNewPost(text)
	}
	return (
		<div>
			<div className={Posts_style.box}>
			<p className={Posts_style.header}>My posts</p>
			<textarea 
						type="text" 
						value={props.postsText} 
						className={Posts_style.input}
						onChange={onPostChange}></textarea>
			<button onClick={onAddPost} className={Posts_style.add}>send</button>
		</div>
			{postsElements}
		</div>
		
	);
}

export default Posts