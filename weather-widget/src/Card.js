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

const Card = ({date, forecast, state, city, onClick}) => {
  const [min, max] = getMinMax(forecast)
  const classes = {
    "-1": "Card Prev",
    "0": "Card Current",
    "1": "Card Next",
  }[state] || "Card"
  console.log(forecast)

  return (
    <div className={classes} onClick={onClick}>
      <h1 className="Card-heading">{getDay(date)}</h1>
      <p className="Card-subheading">{formatDate(max.dt_txt)}</p>
      <p className="Card-summary">{capitalize(max.weather[0].description)}</p>
      <img
        src={getIconURL(max.weather[0].icon)}
        alt={capitalize(max.weather[0].description)}
        className="Card-img"/>
      <p className="Card-temp">{Math.round(max.main.temp - 273)}&deg;C</p>
      <p className="Card-city">{city}</p>
    </div>
  )
}

export default Card
