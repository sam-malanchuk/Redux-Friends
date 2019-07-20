// import action types
import {
	LOGGING_IN,
	LOGIN_SUCCESS,
    LOGIN_FAILED,
    API_CONNECT_START,
    API_CONNECT_SUCCESS,
    API_CONNECT_FAILED,
    ADD_CONNECT,
    ADD_SUCCESS,
    ADD_FAILED,
} from './actions'

// state initial values
const initialState = {
	isLoading: false,
	errorMessage: null,
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
        case API_CONNECT_START: {
            return {
              ...state,
              isLoading: true,
            }
        }
        case API_CONNECT_SUCCESS: {
            const newData = action.payload
            return {
              ...state,
              isLoading: false,
              friends: newData,
            }
        }
        case API_CONNECT_FAILED: {
            return {
              ...state,
              isLoading: false,
              errorMessage: action.payload.message,
            }
        }
        case ADD_CONNECT: {
			return {
                ...state,
                isLoading: true,
			}
        }
        case ADD_SUCCESS: {
            const newData = action.payload
			return {
                ...state,
                isLoading: false,
                friends: newData,
			}
        }
        case ADD_FAILED: {
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