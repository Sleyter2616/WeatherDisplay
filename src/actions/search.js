import axios from 'axios'
import dotenv from 'dotenv'
import {
	SEARCH_ADDRESS_REQUEST,
	SEARCH_ADDRESS_FAIL,
	SEARCH_ADDRESS_SUCCESS,
	SEARCH_FORECAST_REQUEST,
	SEARCH_FORECAST_SUCCESS,
	SEARCH_FORECAST_FAIL,
	ADD_FAVORITE,
} from '../constants/search'

dotenv.config()
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
					key: process.env.REACT_APP_API_KEY,
				},
			}
		)
		const location = data.results[0].geometry.location

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

		const maxTempDaily = hourlyPeriods.slice(0, 24).reduce((acc, cv) => {
			acc = cv.temperature > acc ? cv.temperature : acc
			return acc
		}, -Infinity)

		const minTempDaily = hourlyPeriods.slice(0, 24).reduce((acc, cv) => {
			acc = cv.temperature < acc ? cv.temperature : acc
			return acc
		}, Infinity)

		const forecastData = {
			hourlyPeriods,
			dailyPeriods,
			minTempDaily,
			maxTempDaily,
		}

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
