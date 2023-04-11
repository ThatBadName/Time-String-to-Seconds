# Time-String-to-Seconds
<iframe src="https://discord.com/widget?id=994642021425877112&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
A very simple light-weight package that can do a few simple functions on time strings

## Usage
Time strings should be formatted like `<number><length>`. <number> being the time (eg: 7) and <length> being the length (eg: years). If no valid input is provided (eg: `26lmao`) it will ignore it and return `0`. Something like `1m 17lmao` would return `60`

| Time Phrase | Valid Variations |
|---|---|
| Seconds | `s`, `sec`, `secs`, `second`, `seconds` |
| Minutes | `m`, `min`, `mins`, `minute`, `minutes` |
| Hours | `h`, `hour`, `hours` |
| Days | `d`, `day`, `days` |
| Weeks | `w`, `wk`, `week`, `weeks` |
| Months | `mo`, `month`, `months` |
| Years | `y`, `yr`, `year`, `years` |

## Installation
In your terminal run:
```
npm i @thatbadname/time-string-converter
```
and your done!

## Code Examples
### Converting to seconds
```js
const convert = require('time-string-converter')
console.log(convert.convertStringToSeconds('1m'))
// Output: 60
```
### Convert seconds to time string
```js
const convert = require('time-string-converter')
console.log(convert.convertSecondsToTimeObject(61))
/* Output:  {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 1
  }
*/
```
### Convert seconds to formatted string
```js
const convert = require('time-string-converter')
console.log(convert.reformatTimeString(61))
// Output: 1minute 1second
```