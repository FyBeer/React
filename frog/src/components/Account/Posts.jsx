import Posts_style from './Account_style/Posts.module.css'
import Post from './Post/Post';
import React from 'react';

const Posts = (props) => {
	
	let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}></Post> )

	let onAddPost = () => {
		
		props.addPost()
	}
	
	let onPostChange = (e) => {
		
		
		let text = e.target.value
		props.PostChange(text)
	}
	return (
		<div>
			<div className={Posts_style.box}>
			<p className={Posts_style.header}>My posts</p>
			<textarea 
						type="text" 
						value={props.newPostText} 
						className={Posts_style.input}
						onChange={onPostChange}></textarea>
			<button onClick={onAddPost} className={Posts_style.add}>send</button>
		</div>
			{postsElements}
		</div>
		
	);
}

export default Posts