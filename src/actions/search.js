import axios from 'axios'
import {
	SEARCH_ADDRESS_REQUEST,
	SEARCH_ADDRESS_FAIL,
	SEARCH_ADDRESS_SUCCESS,
	SEARCH_FORECAST_REQUEST,
	SEARCH_FORECAST_SUCCESS,
	SEARCH_FORECAST_FAIL,
	ADD_FAVORITE,
} from '../constants/search'

export const searchAddress = (address) => async (dispatch) => {
	try {
		dispatch({
			type: SEARCH_ADDRESS_REQUEST,
		})
		const {data} = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json`,
			{
				params: {
					address: address,
					key: 'AIzaSyAAC2ctVro_8XoLzZrAUt6eWZnWrv6Pjas',
				},
			}
		)
		const location = data.results[0].geometry.location
		console.log(location)
		dispatch({
			type: SEARCH_ADDRESS_SUCCESS,
			payload: location,
		})
		localStorage.setItem('location', JSON.stringify(location))
		dispatch(getForecast(location))
	} catch (error) {
		dispatch({
			type: SEARCH_ADDRESS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
export const getForecast = (location) => async (dispatch) => {
	console.log('in GET FORECAST:', location)
	try {
		dispatch({
			type: SEARCH_FORECAST_REQUEST,
			loading: true,
		})

		const {data} = await axios.get(
			`https://api.weather.gov/points/${location.lat},${location.lng}`
		)

		const forecastHourlySearch = data.properties.forecastHourly
		const forecastHourlyData = await axios.get(forecastHourlySearch)
		const hourlyPeriods = forecastHourlyData.data.properties.periods

		const forecastDailySearch = data.properties.forecast
		const forecastDailyData = await axios.get(forecastDailySearch)
		const dailyPeriods = forecastDailyData.data.properties.periods

		const forecastData = {
			hourlyPeriods,
			dailyPeriods,
		}
		console.log('forecast:', forecastData)
		dispatch({
			type: SEARCH_FORECAST_SUCCESS,
			payload: forecastData,
		})
	} catch (error) {
		dispatch({
			type: SEARCH_FORECAST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
export const addFavorite = (newFav) => (dispatch, getState) => {
	dispatch({
		type: ADD_FAVORITE,
		payload: newFav,
	})

	localStorage.setItem(
		'favorites',
		JSON.stringify(getState().addFavorite.favorites)
	)
}
