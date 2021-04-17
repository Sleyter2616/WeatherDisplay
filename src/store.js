import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
	searchAddressReducer,
	searchForecastReducer,
} from './reducers/searchReducers'

const reducer = combineReducers({
	searchAddress: searchAddressReducer,
	searchForecast: searchForecastReducer,
})

const locationFromStorgage = localStorage.getItem('location')
	? JSON.parse(localStorage.getItem('location'))
	: ''

const initialState = {
	searchAddress: {
		location: locationFromStorgage,
	},
}
const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)
export default store
