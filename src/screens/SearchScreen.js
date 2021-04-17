import React, {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const SearchScreen = () => {
	const [zipCode, setZipCode] = useState(0)
	const [address, setAddress] = useState('')

	const zipCodeSubmit = () => {
		console.log('zip')
	}
	const addressSubmit = () => {
		console.log('add')
	}
	return (
		<FormContainer>
			<h1>Enter a Zip Code or Location</h1>
			<Form onSubmit={zipCodeSubmit}>
				<Form.Group>
					<Form.Label>Zip Code</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Zip Code'
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Search by Zip Code
				</Button>
			</Form>
			<Form onSubmit={addressSubmit}>
				<Form.Group>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Full Address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Search by address
				</Button>
			</Form>
		</FormContainer>
	)
}

export default SearchScreen
