import Posts_style from './Account_style/Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {

	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}></Post> )
	
	return (
		<div>
			<div className={Posts_style.box}>
			<p className={Posts_style.header}>My posts</p>
			<textarea type="text" className={Posts_style.input}></textarea>
			<button className={Posts_style.add}>send</button>
		</div>
			{postsElements}
		</div>
		
	);
}

export default Posts