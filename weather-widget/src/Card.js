import styled from '@emotion/styled'

const Header = styled.h1`
  margin: 0;
  text-align: left;
  font-weight: normal;
`

const SubHeading = styled.p`
  margin: 0;
  font-size: 10pt;
  text-align: left;
`

const Summary = styled.p`
  text-align: left;
  font-size: 16pt;
`

const Img = styled.img`
  float: left;
  width: 60px;
  height: 60px;
  margin-top: 14px;
`

const Temp = styled.p`
  font-size: 28pt;
  font-weight: bold;
`

const City = styled.p`
  text-align: left;
  font-size: 16pt;
  position: absolute;
  opacity: 0;
  bottom: 0;
  transition: all 1s ease;
`

const getDay = date =>
  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
    new Date(date).getDay()
  ]

const getMinMax = forecast => {
  const sortedList = Array.from(forecast)
  sortedList.sort((first, second) =>
    first.main.temp - second.main.temp
  )
  return [sortedList[0], sortedList[sortedList.length - 1]]
}

const capitalize = str =>
  str.split(' ').map(d =>
    d[0].toUpperCase() + d.slice(1)
  ).join(' ')

const textifyMonth = month =>
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][month]

const formatDate = dateText => {
  const date = new Date(dateText)
  return [
    date.getDate(),
    textifyMonth(date.getMonth()),
    date.getFullYear(),
    date.getHours() % 12 + ':' +  String(date.getMinutes()).padStart(2, '0'),
    date.getHours() / 12 >= 1 ? 'pm' : 'am'
  ].join(' ')
}

const getIconURL = iconID =>
  `http://openweathermap.org/img/wn/${iconID}@2x.png`

const Card = ({date, forecast, city}) => {
  const [min, max] = getMinMax(forecast)

  return (
    <div>
      <Header>{getDay(date)}</Header>
      <SubHeading>{formatDate(max.dt_txt)}</SubHeading>
      <Summary>{capitalize(max.weather[0].description)}</Summary>
      <Img
        src={getIconURL(max.weather[0].icon)}
        alt={capitalize(max.weather[0].description)}
      />
      <Temp>{Math.round(max.main.temp - 273)}&deg;C</Temp>
      <City>{city}</City>
    </div>
  )
}

export default Card
