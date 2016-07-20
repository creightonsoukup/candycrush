var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?

console.log(store1["2015-01-08"][0][1])

console.log("--------")
// How would you access how many 'Mint Wafers' were sold on January 7th?

console.log(store1["2015-01-07"]);

console.log("--------")
// Produce an array of the date keys in store1's data.

console.log(Object.keys(store1))

console.log("--------")

// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
var jan8Candies = []
for (var i = 0; i < store1["2015-01-08"].length; i++) {
  jan8Candies.push((store1["2015-01-08"][i][0]))

}
console.log(jan8Candies)

console.log("--------")
// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?

var total = 0;
for (var i = 0; i < store1["2015-01-10"].length; i++) {
  total += store1["2015-01-10"][i][2]
}

console.log(total)

console.log("--------")

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.

var storeDates= Object.keys(store1)
console.log(storeDates)

console.log("--------")

// Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.

for (var i = 0; i < storeDates.length; i++) {
  console.log(storeDates[i] , store1[storeDates[i]])
}

console.log("--------")


// Use a loop to calculate the total number of candies sold at store1.

var storeTotal = 0;
for (var i = 0; i < storeDates.length; i++) {
  for (var a = 0; a < store1[storeDates[i]].length; a++) {
    storeTotal += store1[storeDates[i]][a][2]
  }
}

console.log(storeTotal)

console.log("--------")

// In the previous exercise, where did you have to initialize the counter variable? Why?


// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.

var jan10Candies = []
for (var i = 0; i < store1["2015-01-10"].length; i++) {
    jan10Candies.push(store1["2015-01-10"][i][0])
}

console.log(jan10Candies)
