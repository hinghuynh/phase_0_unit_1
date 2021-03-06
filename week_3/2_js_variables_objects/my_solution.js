// Hing Huynh and Lienha Carleton worked on this challenge.

// Pseudocode
// create a variable called secret number and assign a value of 7
// create a variable called password with a string of "just open the door"
// create a variable called allowedIn with a boolean value of false.
// create an array with four elements, with the first element being "John" and fourth element being "Mary"


// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "", "", "Mary"];


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// I stared at the code for a while and could not find any way to make it more D.R.Y.




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// Figuring out code is fun but typing the pseudocode is tedious. We learned what <typeof> does. Overall the exercise gave us
// a chance to practice what we learned.
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
