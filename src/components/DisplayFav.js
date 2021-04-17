import React, {useState, useEffect} from 'react'
import {Form, Button, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

const DisplayFav = () => {
	const searchAddress = useSelector((state) => state.searchAddress)
	const {favorites} = searchAddress
	return (
		<ListGroup>
			<h2>Favorites</h2>
			{favorites
				? favorites.map((favorite) => (
						<ListGroup.Item key={favorite.name}>
							<h2>{favorite.name}</h2>
						</ListGroup.Item>
				  ))
				: null}
		</ListGroup>
	)
}

export default DisplayFav
