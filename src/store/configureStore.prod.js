import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'

const middleware = syncHistory(browserHistory)
// add middlewares as neccessary
const enhancer = applyMiddleware(middleware, thunk)

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer)
}
