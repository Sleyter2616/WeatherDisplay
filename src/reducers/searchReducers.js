import {
	SEARCH_ZIP_FAIL,
	SEARCH_ZIP_REQUEST,
	SEARCH_ZIP_SUCCESS,
} from '../constants/search'

export const searchReducer = (
	state = {zipCode: 0, address: '', geoLoc: {}},
	action
) => {
	switch (action.type) {
		case SEARCH_ZIP_REQUEST:
			return {loading: true, zipCode: action.payload}
		case SEARCH_ZIP_SUCCESS:
			return {
				...state,
				loading: false,
				geoLoc: action.payload,
			}
		case SEARCH_ZIP_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
