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
    has(object, key){
      if(key === undefined){
  	    return false
  	  }
 	  let hasValue = Object.keys(object);
   	  return hasValue.includes(key)
    },
    invert(object) {
      let invertedObject = {}
      let keys = Object.keys(object)
      for (let i=0; i<keys.length; i++) {
        let key = keys[i]
        let value = object[key]
        invertedObject[value] = key
      }
      return invertedObject    
    },
    findKey(object, predicate) {
          for(let key in object){
          let value = object.key
        let originalValue = object[key]
        let predicateReturnValue = predicate(value) 
        if(predicateReturnValue){
          return key
        }
      }
      return undefined
    },
    drop(array, n) {
      if (n === undefined || n === 0) {
        n = 1
      }
      let droppedArray = array.slice(n)
      return droppedArray
    },
	dropWhile(array, predicate) {
      let firstFalseyIndex
      for (let i=array.length; i> -1; i--) {
        if (!predicate(array[i], i)) {
          firstFalseyIndex = i
        }
      }
      return array.slice(firstFalseyIndex)
    },
    chunk(array, size){
        if(size === undefined){
          size = 1
        }
        let arrayInChunks = []
        for(let i = 0; i < array.length; i=i+size){
          let arrayChunk = array.slice(i, i+size)
          arrayInChunks.push(arrayChunk);
        }
      return arrayInChunks
      },
  }
  