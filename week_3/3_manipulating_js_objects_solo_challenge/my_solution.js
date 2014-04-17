// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

2. Give adam a name property with the value "Adam".

3. Add a spouse property to terah and assign it the value of adam.

4. Change the value of the terah weight property to 125.

5. Remove the eyeColor property from terah.

6. Add a spouse property to adam and assign it the value of terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.


*/

// __________________________________________
// Write your code below.
//Define var adam and give it name property "Adam"
var adam = {
  name: "Adam"
}
//Add spouse property to terah and assign it the value of adam
terah.spouse = adam;
//Re-assign terah's weight to 125
terah.weight = 125;
//Delete eyeColor property from terah
delete terah.eyeColor;
//Add spouse property to Adam and assign value of terah
adam.spouse = terah;
//Add children property to terah and assign it no properties
terah.children = {};
//Add carson property to the value of terah.children and assign a name property with the value of "Carson"
terah.children.carson = {
  name: "Carson"
}
//Add carter property to the value of terah.children and assign a name property with the value of "Carter"
terah.children.carter = {
  name: "Carter"
}
//Add colton property to the alue of terah.children and assign a name propertry with the value of "Colton"
terah.children.colton = {
  name: "Colton"
}
// Add children property to adam and assign terah's children to it.
adam.children = terah.children;

/*4. Refactor - After reviewing my code I was not able to find anything that I could simplify, shorten,
or make more clear. I think the code i wrote as clean as i could make it. */

// __________________________________________
// Reflection: Use the reflection guidelines
// This one was a little more difficult than the earlier excerises, but still relatively simple.
// The only real problem that I had was when i first assigned the names of children to the children properties
// to terah.children I forgot to add name properties to each of the children.  I found this challenge very 
// enjoyable. Once again the most tedious parts is always the pseudo-code, refractoring, and reflection.
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
