const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const TOGGLE_FOLLOWING_IS_PROGRESS = 'TOGGLE_FOLLOWING_IS_PROGRESS'

let initialState = {
	users: [],
	pageSize: 15,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingIsProgress: []
}


const usersReduser = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					return u.id === action.userId ? {...u, followed: true } : u
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					return u.id === action.userId ? {...u, followed: false } : u
				})
			}
		case SET_USERS:
			return {
				...state,
				users: action.users
			}

			case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}

			case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			}

			case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

			case TOGGLE_FOLLOWING_IS_PROGRESS:
			return {
				...state,
				followingIsProgress: action.isFetching 
				? [...state.followingIsProgress, action.userId] 
				:state.followingIsProgress.filter(id => id != action.userId)
			}
			

		default:

			return state
	}

}

export const follow = (userId) => ({type: FOLLOW, userId })
export const unfollow = (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching })
export const toggleFollowingIsProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IS_PROGRESS, isFetching, userId})

export default usersReduser