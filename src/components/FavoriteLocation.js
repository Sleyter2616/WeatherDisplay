import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {addFavorite} from '../actions/search'
const FavoriteLocation = () => {
	const [name, setName] = useState('')
	const dispatch = useDispatch()
	const searchAddress = useSelector((state) => state.searchAddress)
	const {location} = searchAddress

	const favoriteHandler = (e) => {
		e.preventDefault()
		const fav = {
			location,
			name,
		}
		dispatch(addFavorite(fav))
	}

	return (
		<div>
			<Form onSubmit={favoriteHandler}>
				<Form.Group controlId='favoritename'>
					<Form.Label>Add to favorites</Form.Label>
					<Form.Control
						value={name}
						type='text'
						placeholder='Name to call'
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Button type='submit'> Submit to Favorites</Button>
			</Form>
		</div>
	)
}

export default FavoriteLocation
