import { useQuery } from 'react-query'
import Weather from './Weather.js'

const Locator = props => {
  const { isLoading, data, error } = useQuery('locationData', () =>
    new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    )
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <Weather userCity="Sydney"/>
  }

  return <Weather location={data}/>

}

export default Locator
