import React from 'react'
import { connect } from "react-redux";
import { followSuccess, setCurrentPage, unfollowSuccess, toggleFollowingIsProgress } from '../../Redux/usersReduser';
import Users from './Users'
import Preloader from '../Common/Preloadr/Preloader';
import { getUsers, follow, unfollow } from '../../Redux/usersReduser';

class UsersContainer extends React.Component {


	componentDidMount() {

		this.props.getUsers()
	}

	onPageChange = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}


	render() {

		let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users pageCount={pageCount}
				currentPage={this.props.currentPage}
				onPageChange={this.onPageChange}
				users={this.props.users}
				followingIsProgress={this.props.followingIsProgress}
				follow={this.props.follow}
				unfollow={this.props.unfollow} />
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		totalUsersCount: state.usersPage.totalUsersCount,
		isFetching: state.usersPage.isFetching,
		followingIsProgress: state.usersPage.followingIsProgress,
	}
}


export default connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow})(UsersContainer)