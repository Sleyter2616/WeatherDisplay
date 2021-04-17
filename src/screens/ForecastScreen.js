import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Tabs, Tab, Carousel, Image} from 'react-bootstrap'
import FavoriteLocation from '../components/FavoriteLocation'
import DisplayFav from '../components/DisplayFav'

const ForcastScreen = () => {
	const dispatch = useDispatch()

	const [temp, setTemp] = useState(0)

	const searchForecast = useSelector((state) => state.searchForecast)

	const {forecastData} = searchForecast
	const {hourlyPeriods, dailyPeriods} = forecastData

	return (
		<>
			<DisplayFav />
			<Tabs defaultActiveKey='today' id='uncontrolled-tab-example'>
				{hourlyPeriods ? (
					<Tab eventKey='today' title='24 Hour Forecast'>
						<Carousel pause='hover' className='bg-dark'>
							{hourlyPeriods.slice(0, 24).map((hour) => (
								<Carousel.Item key={hour.startTime}>
									<Image
										src={hour.icon}
										alt={hour.name}
										fluid
									/>
									<Carousel.Caption>
										<h3>
											DAY:{' '}
											{hour.startTime.substring(0, 10)}{' '}
											TIME:{' '}
											{hour.startTime.substring(11, 16)}
										</h3>
										<h5></h5>
										<h6>
											{hour.shortForecast}. It will be{' '}
											{hour.temperature}{' '}
											{hour.temperatureUnit}{' '}
										</h6>
									</Carousel.Caption>
								</Carousel.Item>
							))}
						</Carousel>
					</Tab>
				) : (
					<Tab eventKey='today' title='Today Forecast'></Tab>
				)}

				{dailyPeriods ? (
					<Tab eventKey='week' title='Week Forecast'>
						<Carousel pause='hover' className='bg-dark'>
							{dailyPeriods.map((day) => (
								<Carousel.Item key={day.startTime}>
									<Image
										src={day.icon}
										alt={day.name}
										fluid
									/>
									<Carousel.Caption>
										<h3>{day.name}</h3>
										<p>{day.detailedForecast}</p>
									</Carousel.Caption>
								</Carousel.Item>
							))}
						</Carousel>
					</Tab>
				) : (
					<Tab eventKey='weekly' title='Weekly Forecast'></Tab>
				)}
			</Tabs>
			<FavoriteLocation />
		</>
	)
}

export default ForcastScreen
