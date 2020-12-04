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

const Card = ({date, forecast, state}) => {
  const [min, max] = getMinMax(forecast)
  const classes = {
    "-1": "Card Prev",
    "0": "Card Current",
    "1": "Card Next",
  }[state] || "Card"

  return (
    <p className={classes}>{getDay(date)} will be {Math.round(max.main.temp - 273)}</p>
  )
}

export default Card
