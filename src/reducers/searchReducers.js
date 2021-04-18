import {
	ADD_FAVORITE,
	SEARCH_ADDRESS_FAIL,
	SEARCH_ADDRESS_REQUEST,
	SEARCH_ADDRESS_SUCCESS,
	SEARCH_FORECAST_FAIL,
	SEARCH_FORECAST_REQUEST,
	SEARCH_FORECAST_SUCCESS,
} from '../constants/search'

export const addFavoriteReducer = (state = {favorites: []}, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return {
				favorites: [...state.favorites, action.payload],
			}
		default:
			return state
	}
}

export const searchAddressReducer = (
	state = {location: {}, favorites: []},
	action
) => {
	switch (action.type) {
		case SEARCH_ADDRESS_REQUEST:
			return {loading: true}
		case SEARCH_ADDRESS_SUCCESS:
			return {
				loading: false,
				location: action.payload,
			}
		case SEARCH_ADDRESS_FAIL:
			return {
				loading: false,
				error: action.payload,
			}

		default:
			return state
	}
}

export const searchForecastReducer = (state = {}, action) => {
	switch (action.type) {
		case SEARCH_FORECAST_REQUEST:
			return {loading: true}
		case SEARCH_FORECAST_SUCCESS:
			return {
				loading: false,
				forecastData: action.payload,
			}
		case SEARCH_FORECAST_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
