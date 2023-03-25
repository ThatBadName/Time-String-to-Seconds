function convertStringToSeconds(durationString) {
  let time = 0
  const args = durationString.toLowerCase().split(' ')
  for (const arg of args) {
    const number = parseInt(arg)
    const span = arg.replace(number, '')
    if (span.startsWith(['y' || 'yr' || 'year' || 'years'])) time += (number * 60 * 60 * 24 * 365)
    else if (span.startsWith(['mo' || 'month' || 'months'])) time += (number * 60 * 60 * 24 * 30)
    else if (span.startsWith(['w' || 'wk' || 'week' || 'weeks'])) time += (number * 60 * 60 * 24 * 7)
    else if (span.startsWith(['d' || 'day' || 'days'])) time += (number * 60 * 60 * 24)
    else if (span.startsWith(['h' || 'hour' || 'hours'])) time += (number * 60 * 60)
    else if (span.startsWith(['m' || 'min' || 'mins' || 'minute' || 'minutes'])) time += (number * 60)
    else if (span.startsWith(['s' || 'sec' || 'secs' || 'second' || 'seconds'])) time += number
  }
  return time
}

function convertSecondsToDHMS(seconds) {
  seconds = Number(seconds)
  let years = 0
  let months = 0
  let weeks = 0
  let days = 0
  let hours = 0
  let minutes = 0

  while (seconds >= 60 * 60 * 24 * 365) {seconds -= 60 * 60 * 24 * 365; ++years}
  while (seconds >= 60 * 60 * 24 * 30) {seconds -= 60 * 60 * 24 * 30; ++months}
  while (seconds >= 60 * 60 * 24 * 7) {seconds -= 60 * 60 * 24 * 7; ++weeks}
  while (seconds >= 60 * 60 * 24) {seconds -= 60 * 60 * 24; ++days}
  while (seconds >= 60 * 60) {seconds -= 60 * 60; ++hours}
  while (seconds >= 60) {seconds -= 60; ++minutes}
  return {
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds
  }
}

module.exports = {
  convertStringToSeconds,
  convertSecondsToDHMS
}