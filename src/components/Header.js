import React from 'react'
import {useDispatch} from 'react-redux'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {SEARCH_FORECAST_RESET} from '../constants/search'

const Header = () => {
	const dispatch = useDispatch()

	const resetForecastHandler = () => {
		dispatch({
			type: SEARCH_FORECAST_RESET,
		})
	}
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<LinkContainer to='/'>
					<Navbar.Brand>Weather App</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<LinkContainer
							to='/search'
							onClick={resetForecastHandler}
						>
							<Nav.Link>
								<i className='fas fa-search' /> Search Tab
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/forecast'>
							<Nav.Link>
								<i className='fas fa-cloud-sun' /> Forecast Tab
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)
}

export default Header
