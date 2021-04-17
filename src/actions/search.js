import axios from 'axios'
import {
	SEARCH_ADDRESS_REQUEST,
	SEARCH_ADDRESS_FAIL,
	SEARCH_ADDRESS_SUCCESS,
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

//GOOGLE API KEY
//AIzaSyAAC2ctVro_8XoLzZrAUt6eWZnWrv6Pjas
