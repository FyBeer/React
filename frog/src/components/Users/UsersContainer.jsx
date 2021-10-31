import React from 'react'
import { connect } from "react-redux";
import { followAC, setCurrentPage, setTotalUsersCount, setUsers, unfollowAC, setIsFetching } from '../../Redux/usersReduser';
import Users from './Users'
import * as axios from 'axios'
import Preloader from '../Common/Preloadr/Preloader';

class UsersContainer extends React.Component {


	componentDidMount () {
		this.props.setIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setIsFetching(false)
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChange = (pageNumber) => {
		this.props.setIsFetching(true)
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setIsFetching(false)
			this.props.setUsers(response.data.items)
		})
	}


	render () {

		let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		return <>
		{this.props.isFetching ? <Preloader /> : null}
			<Users pageCount={pageCount}
						  currentPage={this.props.currentPage}
						  onPageChange={this.onPageChange}
						  users={this.props.users}
						  unfollow={this.props.unfollow} 
						  follow={this.props.follow} /> 
		</>
	}
}

let mapToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		totalUsersCount: state.usersPage.totalUsersCount,
		isFetching: state.usersPage.isFetching
	}
}


export default connect (mapToProps, {
	follow: followAC,
	unfollow: unfollowAC,
	setUsers: setUsers,
	setCurrentPage: setCurrentPage,
	setTotalUsersCount: setTotalUsersCount,
	setIsFetching: setIsFetching
}) (UsersContainer)