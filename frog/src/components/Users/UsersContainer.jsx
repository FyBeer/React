import React from 'react'
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, setIsFetching, toggleFollowingIsProgress } from '../../Redux/usersReduser';
import Users from './Users'
import Preloader from '../Common/Preloadr/Preloader';
import { usersAPI } from '../../api/api'

class UsersContainer extends React.Component {


	componentDidMount() {
		this.props.setIsFetching(true)
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.setIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
	}

	onPageChange = (pageNumber) => {
		this.props.setIsFetching(true)
		this.props.setCurrentPage(pageNumber)
		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.setIsFetching(false)
			this.props.setUsers(data.items)
		})
	}


	render() {

		let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users pageCount={pageCount}
				currentPage={this.props.currentPage}
				onPageChange={this.onPageChange}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				followingIsProgress={this.props.followingIsProgress}
				toggleFollowingIsProgress={this.props.toggleFollowingIsProgress} />
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


export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toggleFollowingIsProgress})(UsersContainer)