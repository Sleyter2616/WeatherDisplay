import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {searchAddress} from '../actions/search'
import Message from '../components/Message'

const SearchScreen = ({history}) => {
	const [address, setAddress] = useState('')

	const searchAddressReducer = useSelector((state) => state.searchAddress)
	const {location, error, loading} = searchAddressReducer

	const searchForecast = useSelector((state) => state.searchForecast)
	const {forecastData} = searchForecast

	const dispatch = useDispatch()

	const addressSubmit = (e) => {
		e.preventDefault()
		dispatch(searchAddress(address))
	}
	useEffect(() => {
		if (
			forecastData.hourlyPeriods.length !== 0 &&
			forecastData.dailyPeriods.length !== 0
		) {
			history.push('/forecast')
		}
	}, [history, forecastData])
	return (
		<FormContainer>
			<h1>Enter a Zip Code or Location</h1>
			{error && <Message> {error} </Message>}
			<Form onSubmit={(e) => addressSubmit(e)}>
				<Form.Group>
					<Form.Label>Enter a Valid Address or Zip Code</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter a Valid Address or Zip Code'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Search by Zip Code or Address
				</Button>
			</Form>
		</FormContainer>
	)
}

export default SearchScreen
