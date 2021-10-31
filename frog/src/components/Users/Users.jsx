import usersStyle from './usersStyle/usersStyle.module.css'
import nonPhoto from '../../assets/image/nonPhoto.png'

const Users = (props) => {

	let pages = []

		for (let i = 1; i <= props.pageCount; i++) {
			pages.push(i)
			
		}

	return (
		<div className={usersStyle.box}>
			<ul className={usersStyle.pagination}>
				<button className={usersStyle.previous}></button>
				{pages.map(p => {
				 return	<li className={`${usersStyle.paginationEl} ${props.currentPage === p && usersStyle.selected}`} 
								 onClick={(e) => {props.onPageChange(p) }}>{p}
							</li>
				})}
				<button className={usersStyle.next}></button>
			</ul>

			{
				props.users.map(u => <div className={usersStyle.userBox} key={u.id}>
					<div className={usersStyle.leftColumn}>
						<img src={u.photos.small != null ? u.photos.small : nonPhoto} className={usersStyle.avatar}></img>
						<div className={usersStyle.follow}>{u.followed
							? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
							: <button onClick={() => { props.follow(u.id) }}>Follow</button>}
						</div>
					</div>
					<div className={usersStyle.info}>
						<div className={usersStyle.userInfo}>
							<div className={usersStyle.name}>{u.name}</div>
							<div className={usersStyle.status}>{u.status}</div>
						</div>
						<div className={usersStyle.location}>
							<div className={usersStyle.country}>{"u.location.country"}</div>
							<div className={usersStyle.city}>{"u.location.city"}</div>
						</div>
					</div>
				</div>)
			}
		</div>
	)
}

export default Users