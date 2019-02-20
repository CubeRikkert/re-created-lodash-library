const _ = {
    clamp(number, lower, upper) {
      return Math.min(Math.max(number, lower), upper)
    },
    inRange(number, start, end) {
      if (end === undefined) {
        end = start
        start = 0
      } if (start > end) {
        let tempVal = end
        end = start
        start = tempVal
      } 
      let isInRange = Boolean(number > start && number < end)
      return isInRange
    },
    words(string) {
      let words = string.split(' ')
      return words
    },
  }
  