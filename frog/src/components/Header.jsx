import Header_style from '../components_style/Header.module.css'

const Header = () => {
	return (
		<header className={Header_style.box}>
        <img src="https://i.pinimg.com/474x/67/98/d0/6798d01efd794ba5b8919f72f2513383.jpg" alt="" className={Header_style.logotype} />
      </header>
	);
}

export default Header;