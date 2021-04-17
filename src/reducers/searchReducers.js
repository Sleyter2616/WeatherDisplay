import {
	SEARCH_ADDRESS_FAIL,
	SEARCH_ADDRESS_REQUEST,
	SEARCH_ADDRESS_SUCCESS,
} from '../constants/search'

export const searchReducer = (state = {location: {}}, action) => {
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
