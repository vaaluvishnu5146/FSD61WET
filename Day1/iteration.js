/**
 * Array methods are plenty in javascript
 * Basic for loop will helps us to loop through any range of numbers and elements of array with any step.
 * There are other for loop which will help us to loop through all the elements without jump
 */
/**
 * Types of loops:
 * 1. For...in
 * 2. For...of
 * 3. forEach
 */
var scores = [1, 2, 1, 2, 3, 4];
for (var x in scores) {
  console.log(x);
}

var scores = [1, 2, 1, 2, 3, 4];
for (var x of scores) {
  console.log(x);
}

/**
 * Object
 */
var data = {
  name: "Vishnu",
  age: 28,
};
for (let y in data) {
  console.log(y, "=", data[y]);
}

/**
 * forEach - Available in prototypal chain
 */
var scores = [1, 2, 1, 2, 3, 4];

scores.forEach(function (value, index) {
  console.log("Element ===>", value, index);
}); // CALLBACK FUNCTION
