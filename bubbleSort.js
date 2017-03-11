// Bubble Sort Example

var argNums = process.argv.slice(2).map(function(str) {return Number(str)}), swapped

console.time('sort-test')
do {
  swapped = false
  for (var i = 1; i < argNums.length; i++) {
    if (argNums[i] < argNums[i-1]) {
      var temp = argNums[i]
      argNums[i] = argNums[i-1]
      argNums[i-1] = temp
      swapped = true
    }
  }
} while (swapped)

console.timeEnd('sort-test')
console.log(argNums)
