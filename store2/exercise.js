var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable.

var saleDates = store2['sale dates']['Banana Bunches']

console.log(saleDates)

console.log("--------")
// What built-in array property would you use to determine how many sale dates there for store2's 'Banana Bunches'?
console.log(saleDates.length)

console.log("--------")
/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Why or why not?

var mintPrice = store2['inventory prices']['Mint Wafers']
mintPrice = 3.40
console.log(store2['inventory prices']['Mint Wafers'])


console.log("--------")
// Set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. Use pop to remove one of the sale dates for store2's Caramel Twists.

peanutDates = store2['sale dates']['Peanut Butter Buttered Peanuts']
peanutDates.pop()
console.log(peanutDates)

console.log("--------")

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.



console.log("--------")


// Iterate over store2's sale dates data to find which day had the most total number of sales. How did you calculate this?




console.log("--------")


/////////// CHALLENGE ///////////

// Create an object containing the amounts that store2 made by selling each type of candy.



console.log("--------")
