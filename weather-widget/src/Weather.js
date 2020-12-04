import { useQuery } from 'react-query'
import { useState } from 'react'
import Card from './Card.js'
import { Slider } from './components/Slider.js'

const API_KEY = "ede9c8f8660863bcfcc189d771d12cfc"

const makeCityURL = city =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`

const makeLocationURL = location =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}`

const groupByDate = data => {
  const days = new Map()
  for (const d of data.list) {
      const date = d.dt_txt.split(' ')[0]
      days[date] = (days[date] || []).concat([d])
  }
  return days
}

const Weather = ({city, location}) => {
  const { isLoading, error, data } = useQuery('weatherData', () =>
    new Promise(resolve =>
      resolve(JSON.parse(localStorage.getItem('query'))[0].data)
    )
//    city
//    ? fetch(makeCityURL('Sydney')).then(res =>
//        res.json()
//      )
//    : fetch(makeLocationURL(location)).then(res =>
//        res.json()
//      )
  )
  const [activeCardIndex, setActiveCardIndex] = useState(1)

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  if (error) {
    return (
      <p>There was an error loading weather data.</p>
    )
  }

  const days = groupByDate(data)

  return (
    <Slider
      days={days}
      city={data.city.name}
    >
      {Object.entries(days).map((entry, i) => {
        const [date, forecast] = entry
        return (
          <Card
            key={i}
            date={date}
            forecast={forecast}
            city={data.city.name}
          />
        )
      })}
    </Slider>
  )
}

export default Weather
