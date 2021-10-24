import Posts_style from './Account_style/Posts.module.css'
import Post from './Post/Post';
import React from 'react';

const Posts = (props) => {

	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}></Post> )

	let newPostEl = React.createRef()

	let addPost = () => {
		let text = newPostEl.current.value

		alert(text)
	}
	
	return (
		<div>
			<div className={Posts_style.box}>
			<p className={Posts_style.header}>My posts</p>
			<textarea ref={newPostEl} type="text" className={Posts_style.input}></textarea>
			<button onClick={addPost} className={Posts_style.add}>send</button>
		</div>
			{postsElements}
		</div>
		
	);
}

export default Posts