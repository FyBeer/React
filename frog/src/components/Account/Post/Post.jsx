import Post_style from '../Account_style/Post.module.css'

const Post = (props) => {
	return (
		<div className={Post_style.box}>
			<img src="" alt="" className={Post_style.avatar} />
			<p className={Post_style.text}>{props.message}</p>
		</div>
	);
}

export default Post