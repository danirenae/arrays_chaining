
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// sort the numbers in descending order

function integerSorter (a, b) {
  return a - b;
}

var sortedIntegers = integers.sort(integerSorter);
console.log(sortedIntegers);

// Remove any integers greater than 19

function integerValue(myIntegers){
  return (myIntegers <= 19);
}

var filteredIntegers = integers.filter(integerValue);
console.log(filteredIntegers);


// Multiply each remaining number by 1.5 and then subtract 1

function multipliedIntegers(a,b){
  return a + b;
}

var multipliedIntegerz = filteredIntegers.reduce(multipliedIntegers);
var multipliedIntegerz2 = multipliedIntegerz * 1.5 - 1;
console.log(multipliedIntegerz2);


// Then output (either in the DOM or the console) the sum of all the resulting numbers

function sum (a,b){
  return a + b;
}

var sumz = 0
  sumz += filteredIntegers.reduce(sum);
  sumz += sortedIntegers.reduce(sum);
  sumz += multipliedIntegerz2;

console.log(sumz);
document.write("final output: ", sumz);
