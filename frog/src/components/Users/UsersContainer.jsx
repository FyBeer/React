import { connect } from "react-redux";
import { followAC, setUsers, unfollowAC } from "../../Redux/usersReduser";
import Users from "./Users";

let mapToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}



let mapDispatchToProps = (dispatch) => {
	

	return {
		follow : (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsers(users))
		}
	}
}

let UsersContainer = connect (mapToProps, mapDispatchToProps) (Users)

export default UsersContainer