import React, {useState, useEffect} from 'react'
import {Form, Button, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {getForecast} from '../actions/search'

const DisplayFav = ({name, location}) => {
	const dispatch = useDispatch()

	const checkForecast = (e) => {
		e.preventDefault()
		dispatch(getForecast(location))
	}
	return (
		<ListGroup.Item>
			<h2>{name}</h2>
			<p>
				{location.lat} {location.lng}
			</p>
			<Button size='sm' onClick={(e) => checkForecast(e)}>
				See Forecast
			</Button>
		</ListGroup.Item>
	)
}

export default DisplayFav
