import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reducer from './reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

const store = createStore(
    reducer,
    // using compose to use more than one middlewhere object
    compose(
		// redux middleware
		applyMiddleware(thunk, logger),
		// redux dev tools middleware
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
	),
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
