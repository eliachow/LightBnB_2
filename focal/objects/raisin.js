/*
---- Pair Programming - Raisin' Arizona ----
lighthouse/focal/objects/raisin.js
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/211?journey_step=30&workbook=5

---- INSTRUCTIONS ----
In this exercise, you will write a function that identifies whether a supposedly chocolate chip cookie also has raisins in it. Your function, raisinAlarm, will receive a cookie which is an array of chocolate chips ("🍫"). However, there is a chance that there might be a pesky raisin in the array as well ("🍇"). Your function must search through the array to see whether or not a raisin is present.

If your function detects a raisin, it should return "Raisin alert!". If no raisin is present, your function should return "All good!".

---- STARTER CODE ----
const raisinAlarm = function (cookie) {
  // Put your solution here
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


---- EXPECTED OUTPUT ----
Raisin alert!
Raisin alert!
All good!

*/

// isChocolate is invoked in the every() method and will take an the elements in the array as the argument, then returns a boolean.
let isChocolate = function (ingredient) {
  return ingredient === "🍫";
};

const raisinAlarm = function (cookie) {
  // every() method iterates overa all of the elements in the array and takes a function as an argument and returns a boolean.
  let ingredientCheck = cookie.every(isChocolate);
  if (ingredientCheck === true) {
    return "All good!";
  } else {
    return "Raisin Alert!";
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); //output: Raisin alert!
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); //output: Raisin alert!
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); // All good!
console.log(raisinAlarm(["🍇", "🍇", "🍇"])); // Raisin alert!
console.log(raisinAlarm(["🍌", "🍌", "🍌"])); // Raisin alert!
//because of the else statement, any other input other than chocolate will return 'Raisin alert!'
