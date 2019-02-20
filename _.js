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
    pad(string, length) {
      if (length <= string.length) {
        return string
      } 
      let startPaddingLength = Math.floor((length-string.length)/2)
      let endPaddingLength = (length-string.length)-startPaddingLength
      let paddedString = ' '.repeat(startPaddingLength).concat(string, ' '.repeat(endPaddingLength))
      return paddedString
    },
  }
  