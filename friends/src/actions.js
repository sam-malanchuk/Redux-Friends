// import axios
import axios from 'axios'

// define action types
export const API_CONNECT_START = 'API_CONNECT_START'
export const API_CONNECT_SUCCESS = 'API_CONNECT_SUCCESS'
export const API_CONNECT_FAILED = 'API_CONNECT_FAILED'

export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const ADD_CONNECT = 'ADD_CONNECT'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_FAILED = 'ADD_FAILED'


// action creators
export function login(username, password) {
	return (dispatch) => {
		dispatch({ type: LOGGING_IN })

		return axios.post('http://localhost:5000/api/login', { username, password })
			.then((res) => {
				localStorage.setItem('token', res.data.payload)
				dispatch({ type: LOGIN_SUCCESS })
			})
			.catch((err) => {
				const payload = err.response ? err.response.data : err
				dispatch({ type: LOGIN_FAILED, payload })
			})
	}
}

export function getFriends() {
    return (dispatch) => {
        dispatch({ type: API_CONNECT_START })

        const headers = {
            Authorization: localStorage.getItem('token'),
        }

        axios.get('http://localhost:5000/api/friends', { headers })
            .then((res) => {
                dispatch({ type: API_CONNECT_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: API_CONNECT_FAILED, payload: err.response.data })
            })
    }
}

export function addFriend(payload) {
    return (dispatch) => {
        dispatch({ type: ADD_CONNECT })

        const headers = {
            Authorization: localStorage.getItem('token'),
        }
        console.log('log out of addfriend', headers)
        axios.post('http://localhost:5000/api/friends', payload, { headers })
            .then((res) => {
                console.log('added and returned', res.data)
                dispatch({ type: ADD_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: ADD_FAILED, payload: err.response.data })
            })
    }
}