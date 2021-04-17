import {
	SEARCH_ADDRESS_FAIL,
	SEARCH_ADDRESS_REQUEST,
	SEARCH_ADDRESS_SUCCESS,
	SEARCH_FORECAST_FAIL,
	SEARCH_FORECAST_REQUEST,
	SEARCH_FORECAST_SUCCESS,
} from '../constants/search'

export const searchAddressReducer = (state = {location: {}}, action) => {
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

export const searchForecastReducer = (state = {forcast: {}}, action) => {
	switch (action.type) {
		case SEARCH_FORECAST_REQUEST:
			return {loading: true}
		case SEARCH_FORECAST_SUCCESS:
			return {
				loading: false,
				forecast: action.payload,
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
