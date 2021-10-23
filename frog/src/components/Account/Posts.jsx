import Posts_style from './Account_style/Posts.module.css'
import Post from './Post/Post';

const Posts = () => {
	return (
		<div>
			<div className={Posts_style.box}>
			<p className={Posts_style.header}>My posts</p>
			<textarea type="text" className={Posts_style.input}></textarea>
			<button className={Posts_style.add}>send</button>
		</div>
		<Post message='Hi this is new web frog'></Post>
		<Post message='This is messenger made in react'></Post>
		<Post message='Take it'></Post>
		<Post message='Thanks'></Post>
		</div>
		
	);
}

export default Posts