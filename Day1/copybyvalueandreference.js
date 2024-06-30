/**
 * Types of datatype:
 *   1. Primitive - Number, String, Boolean
 *   2. Non-Primitive - Array, Object
 */

/**
 * 1. Array is a datatype
 * 2. Array stores element in contigious memory location
 * 3. Array has different properties:
 *   1. Index - Position of every element inside the array
 *   2. Element - Every data in the array is mentioned as an element
 *   3. Length - The number of elements inside the array
 *   4. Prototypal chain - Will have the collection of all the properties and member functions available in he array
 */
var scores = [1, 2, 3, 4, 5];
var scoresDuplicate = scores;

scores.push(6);

console.log(scores, scoresDuplicate);

var age = 20;
var ageCopy = age;
age += 2;
console.log(age, ageCopy);

/**
 * Object is a datatype in javascript
 * It stores the value in Key value pairs
 * We can access the value using DOT or ['']
 * It is a non-primitive datatype
 */
var data = {
  name: "Vishnu",
  age: 27,
};
var dataCopy = data;
dataCopy["isMarried"] = false;
console.log(data, dataCopy);
