# Time-String-to-Seconds
A very simple light-weight package that will convert a time string like `8years 34m 8mo` to seconds (in this case `273026520` seconds)
```
npm i @thatbadname/time-string-converter
```
to install

## Usage
Time strings should be formatted like `<number><length>`. <number> being the time (eg: 7) and <length> being the length (eg: years). If no valid input is provided (eg: `26lmao`) it will ignore it and return `0`. Something like `1m 17lmao` would return `60`.
```js
const convert = require('time-string-converter')
console.log(convert.convertStringToSeconds('8years 34m 8mo')) //Output: 273026520
```

| Time Phrase | Valid Variations |
|---|---|
| Seconds | `s`, `sec`, `secs`, `second`, `seconds` |
| Minutes | `m`, `min`, `mins`, `minute`, `minutes` |
| Hours | `h`, `hour`, `hours` |
| Days | `d`, `day`, `days` |
| Weeks | `w`, `wk`, `week`, `weeks` |
| Months | `mo`, `month`, `months` |
| Years | `y`, `yr`, `year`, `years` |

## The reverse
You can also use the `convertSecondsToDHMS()` function to do the reverse