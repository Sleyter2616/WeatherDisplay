import React, {useState, useEffect} from 'react'
import {Form, Button, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

const DisplayFav = ({name, location}) => {
	return (
		<ListGroup.Item>
			<h2>{name}</h2>
			<p>
				{location.lat} {location.lng}
			</p>
			<Button size='sm' value={location}>
				See Forecast
			</Button>
		</ListGroup.Item>
	)
}

export default DisplayFav
