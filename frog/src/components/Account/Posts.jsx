import Posts_style from './Account_style/Posts.module.css'
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from 'redux-form'

const Posts = (props) => {
	
	let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}></Post> )



	const newPost = (value) => {
		props.addPost(value.newPost)
	}
	return (
		<div>
			<div className={Posts_style.box}>
			<p className={Posts_style.header}>My posts</p>
			<NewPostForm onSubmit={newPost} />
		</div>
			{postsElements}
		</div>
		
	);
}

const newPost = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field className={Posts_style.input} placeholder='Enter new post' name='newPost' component='textarea' />
			<button className={Posts_style.add}>send</button>
		</form>
	)
}

const NewPostForm = reduxForm ({ form: 'accountNewPostForm'}) (newPost)


export default Posts