import axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 
		"API-KEY": "4589b469-6aad-44d7-bbc4-292bcf69b16e"
	}

})

export const getUsers = (currentPage, pageSize) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
}

export const authMe = () => {
	return instance.get(`auth/me`)
		.then(response => response.data)
}

export const follow = (userId) => {
	return instance.post(`follow/${userId}`)
		.then(response => response.data)
}
export const unfollow = (userId) => {
	return instance.delete(`follow/${userId}`)
		.then(response => response.data)
}

