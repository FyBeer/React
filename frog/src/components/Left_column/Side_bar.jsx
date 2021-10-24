import { NavLink } from 'react-router-dom';
import Site_bar_style from './Left_column_style/Side_bar.module.css'

const Side_bar = (props) => {
	return (
		<nav className={Site_bar_style.box}>
          <ul className={Site_bar_style.list}>
            <li className={Site_bar_style.item}><NavLink to="/account" activeClassName={Site_bar_style.active}>Profile</NavLink></li>
            <li className={Site_bar_style.item}><NavLink to="/dialogs" activeClassName={Site_bar_style.active}>Messages</NavLink></li>
            <li className={Site_bar_style.item}><NavLink to="/news" activeClassName={Site_bar_style.active}>News</NavLink></li>
            <li className={Site_bar_style.item}><NavLink to="/music" activeClassName={Site_bar_style.active}>Music</NavLink></li>
            <li className={Site_bar_style.item}><NavLink to="/settings" activeClassName={Site_bar_style.active}>Settings</NavLink></li>
          </ul>
        </nav>
	);
}

export default Side_bar;