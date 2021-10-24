import Header_style from './Header_style/Header.module.css'

const Header = (props) => {
	return (
		<div className={Header_style.box}>
			<h1 className={Header_style.greeting}>Hi, this is my game find a couple. <br /> Good luck</h1>
		</div>
	)
}

export default Header