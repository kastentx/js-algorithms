// Insertion Sort Example

var argNums = process.argv.slice(2).map(function(str) {return Number(str)})

console.time('sort-test')
for (var i = 1; i < argNums.length; i++) {
  var j = i
  while (j > 0 && argNums[j-1] > argNums[j]) {
    var temp = argNums[j]
    argNums[j] = argNums[j-1]
    argNums[j-1] = temp
    j--
  }
}

console.timeEnd('sort-test')
console.log(argNums)
