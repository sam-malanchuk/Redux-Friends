// import axios
import axios from 'axios'

// define action types
export const API_CONNECT_START = 'API_CONNECT_START'
export const API_CONNECT_SUCCESS = 'API_CONNECT_SUCCESS'
export const API_CONNECT_FAILED = 'API_CONNECT_FAILED'

export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

// action creators
export function login(username, password) {
	return (dispatch) => {
		dispatch({ type: LOGGING_IN })

		return axios.post('http://localhost:5000/api/login', { username, password })
			.then((res) => {
				localStorage.setItem('token', res.data.token)
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
        axios.get('http://localhost:5000/api/friends')
            .then((res) => {
                dispatch({ type: API_CONNECT_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: API_CONNECT_FAILED, payload: err.response.data })
            })
    }
}