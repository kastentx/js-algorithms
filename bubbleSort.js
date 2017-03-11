// Bubble Sort Example

var argNums = process.argv.slice(2).map(function(str) {return Number(str)})
var swapped

do {
  swapped = false
  for (var i = 0; i < argNums.length-1; i++) {
    if (argNums[i] > argNums[i+1]) {
      var temp = argNums[i]
      argNums[i] = argNums[i+1]
      argNums[i+1] = temp
      swapped = true
    }
  }
} while (swapped)

console.log (argNums)
