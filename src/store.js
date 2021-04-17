import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {searchReducer} from './reducers/searchReducers'

const reducer = combineReducers({
	search: searchReducer,
})

const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware))
export default store
