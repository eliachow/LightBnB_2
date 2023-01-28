/*
---- INSTRUCTIONS ----
Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

---- EXPECTED OUTPUT ---- 
> node dice-roller.js 3
Rolled 3 dice: 2, 6, 5

---- TIPS ---- 
To generate a random number, you'll have to use the built-in Math.random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
free to use Array.prototype.join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

---- PSEUDOCODE ---- 
INPUT: Receive a single number from the command line, which will be the number of times the code is run. 
ACTION: 
  Function 1: getRandom() will return a random number between 1-6. 
  Functino 2: diceRolls() will call getRandom() as many times as the command line input. 
    The diceRolls() function will take the output of getRandom() and add it to a concatenated string joined by commas. 
    If it is the last element it will not return a comma
OUTPUT: Each time the code is iterated, it will return a random number between 1-6

*/

/*
need to add getRandom() to an array rather than a string
const getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const getNumOfRolls = function (number) {
  let result = `Rolled ${number} dice: `;
  for (let i = 0; i < number; i++) {
    result += getRandom(1, 7);
    result += `, `;
  }
  console.log(result);
};

console.log(getNumOfRolls(3));
*/

const getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const getNumOfRolls = function (number) {
  let array = [];
  for (let i = 0; i < number; i++) {
    array.push(getRandom(1, 7));
  }
  return `Rolled ${number} dice: ${array.join(", ")}`;
};

console.log(getNumOfRolls(3));
console.log(getNumOfRolls(12));
console.log(getNumOfRolls(5));
console.log(getNumOfRolls(0));
console.log(getNumOfRolls());
