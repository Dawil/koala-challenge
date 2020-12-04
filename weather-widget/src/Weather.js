import { useQuery } from 'react-query'
import { useState } from 'react'
import Card from './Card.js'

const API_KEY = "ede9c8f8660863bcfcc189d771d12cfc"

const makeURL = city =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`

const groupByDate = data => {
  const days = new Map()
  for (const d of data.list) {
      const date = d.dt_txt.split(' ')[0]
      days[date] = (days[date] || []).concat([d])
  }
  return days
}

const Weather = props => {
  const { isLoading, error, data } = useQuery('weatherData', () =>
    new Promise(resolve =>
      resolve(JSON.parse(localStorage.getItem('query'))[0].data)
    )
//    fetch(makeURL('Sydney')).then(res =>
//      res.json()
//    )
  )
  const [activeCardIndex, setActiveCardIndex] = useState(1)
  window.setActiveCardIndex = setActiveCardIndex

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
    <div className="Card-Container" style={{ transform: `translateX(${200 + activeCardIndex * -185}px)` }}>
      {Object.entries(days).map((entry, i) => {
        const [date, data] = entry
        return (
          <Card key={i} state={i-activeCardIndex} date={date} forecast={data}/>
        )
      })}
    </div>
  )
}

export default Weather
