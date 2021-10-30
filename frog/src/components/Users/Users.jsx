import React from 'react'
import usersStyle from './usersStyle/usersStyle.module.css'
import * as axios from 'axios'
import nonPhoto from '../../assets/image/nonPhoto.png'

class Users extends React.Component {


	componentDidMount () {

		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			this.props.setUsers(response.data.items)
		})
	}

	render () {
		return (
			<div className={usersStyle.box}>
				{
					this.props.users.map(u => <div className={usersStyle.userBox} key={u.id}>
						<div className={usersStyle.leftColumn}>
							<img src={u.photos.small != null ? u.photos.small : nonPhoto} className={usersStyle.avatar}></img>
							<div className={usersStyle.follow}>{u.followed
								? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}

export default Users