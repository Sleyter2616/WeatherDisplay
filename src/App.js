import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchScreen from './screens/SearchScreen'
import ForcastScreen from './screens/ForecastScreen'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/search' component={SearchScreen} />
					<Route path='/forecast' component={ForcastScreen} />
					<Route path='/' exact component={SearchScreen} />
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	)
}

export default App
