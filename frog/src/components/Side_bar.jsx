import Style_site_bar from '../components_style/Side_bar.module.css'

const Side_bar = () => {
	return (
		<nav className={Style_site_bar.box}>
          <ul className={Style_site_bar.list}>
            <li className={Style_site_bar.item}>Profile</li>
            <li className={Style_site_bar.item}>Messages</li>
            <li className={Style_site_bar.item}>News</li>
            <li className={Style_site_bar.item}>Music</li>
            <li className={Style_site_bar.item}>Settings</li>
          </ul>
        </nav>
	);
}

export default Side_bar;