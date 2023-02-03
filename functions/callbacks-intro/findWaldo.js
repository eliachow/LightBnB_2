/*
M1 W2 - Functions As Objects
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/220?journey_step=30&workbook=5

---- INSTRUCTIONS ----
Exercise 1 - Callback Arguments
Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".

Copy the waldo searching code above into the JS file
Run it via terminal to make sure that it is working as expected
Modify the actionWhenFound function to let it receive and use the index
Modify the findWaldo function so that it passes the index array to the callback

----

Exercise 2 - Array forEach
Refactor the function findWaldo to use the forEach() method instead of a for loop.

*/

/*
//Exercise 1 - Callback Arguments
// c style for looop
const findWaldo = function (names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i); // execute callback
    }
  }
};

const actionWhenFound = function (index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
*/

//Exercise 2 - Array forEach
const findWaldo = function (names, found) {
  /*
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i); // execute callback
    }
  }
  */
  /*
  names.forEach((name) => {
    if (name === "Waldo") {
      found(1);
    }
  });
  */

  names.forEach(function findWaldo(name, index) {
    if (name === "Waldo") {
      found(index);
    }
  });
};

const actionWhenFound = function (index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
