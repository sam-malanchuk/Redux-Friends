// import action types
import {
	LOGGING_IN,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
} from './actions'

// state initial values
const initialState = {
    friends: [],
}

export default function(state = initialState, action) {
	switch (action.type) {
        //  insert reducer cases here
        case LOGGING_IN: {
			return {
				...state,
				isLoading: true,
			}
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				errorMessage: null,
			}
		}
		case LOGIN_FAILED: {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload.message,
			}
		}
        default:
            return state
    }
}