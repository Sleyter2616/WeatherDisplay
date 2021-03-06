import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
	searchAddressReducer,
	searchForecastReducer,
	addFavoriteReducer,
} from './reducers/searchReducers'

const reducer = combineReducers({
	searchAddress: searchAddressReducer,
	searchForecast: searchForecastReducer,
	addFavorite: addFavoriteReducer,
})

const locationFromStorgage = localStorage.getItem('location')
	? JSON.parse(localStorage.getItem('location'))
	: ''
const favoritesFromStorage = localStorage.getItem('favorites')
	? JSON.parse(localStorage.getItem('favorites'))
	: ''
const initialState = {
	searchAddress: {
		loading: false,
		location: locationFromStorgage,
	},
	addFavorite: {
		favorites: favoritesFromStorage,
	},
	searchForecast: {
		loading: false,
		forecastData: {
			hourlyPeriods: [],
			dailyPeriods: [],
			minTempDaily: -Infinity,
			maxTempDaily: Infinity,
		},
	},
}
const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)
export default store
