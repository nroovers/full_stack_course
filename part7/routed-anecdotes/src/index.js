import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import loginReducer from './reducers/loginReducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    users: userReducer,
    login: loginReducer
})

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ))

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'))
}

renderApp()
// store.subscribe(renderApp)