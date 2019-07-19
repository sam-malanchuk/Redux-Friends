// import action types
import {
	LOGGING_IN,
	LOGIN_SUCCESS,
    LOGIN_FAILED,
    API_CONNECT_START,
    API_CONNECT_SUCCESS,
    API_CONNECT_FAILED,
} from './actions'

// state initial values
const initialState = {
	isLoading: false,
	errorMessage: null,
    friends: [
        {
            id: 1,
            name: 'Temp Friend 1',
            age: 30,
            email: 'TempFriend1@lambdaschool.com'
          },
          {
            id: 2,
            name: 'Temp Friend 2',
            age: 45,
            email: 'TempFriend2@lambdaschool.com'
          },        
    ],
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
              fetching: true,
            }
          }
          case API_CONNECT_SUCCESS: {
            const newData = action.payload
            return {
              ...state,
              fetching: false,
              characters: newData,
            }
          }
          case API_CONNECT_FAILED: {
            return {
              ...state,
              fetching: false,
              errorMessage: action.payload.message,
            }
          }
        default:
            return state
    }
}