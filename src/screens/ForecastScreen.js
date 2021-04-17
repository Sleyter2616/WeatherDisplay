import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'

const ForcastScreen = () => {
	const dispatch = useDispatch()

	useEffect(() => {}, [dispatch])

	return <div>Welcome to Forcast screen</div>
}

export default ForcastScreen
