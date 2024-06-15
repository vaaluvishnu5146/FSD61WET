/**
 * Basic example that demonstrate the working of functions
 * Example: Print Message
 */
function greet(message) {
  console.log(message);
}
greet("Hello World");
greet("Good Morning");

/**
 * Basic example that demonstrate the working of functions
 * Example: Add Two Numbers
 */
function addTwoNumber(num1, num2) {
  return num1 + num2;
}
var result1 = addTwoNumber(10, 20);
var result2 = addTwoNumber(30, 40);

console.log(result1); // 30
console.log(result2); // 50
console.log(addTwoNumber(10, 20) + addTwoNumber(10, 20)); // 60

/**
 * Basic example that demonstrate the working of functions
 * Example: Add Three Numbers
 */
function addThreeNumber(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
addThreeNumber(10, 20, 30);
addThreeNumber(20, 30, 40);

/**
 * Basic example for function return
 */
function add() {}
add();
// output = undefined;
function add() {
  return 0;
}
add();
// output = 0

/**
 * Types of function
 * 1. Named Function
 * 2. IIFE
 * 3. Anonymous
 * 4. Arrow Function
 */

// IIFE SYNTAX
(function () {
  // Code goes here
})();

/**
 * Simple Hello world program
 */
(function () {
  console.log("Hello world");
})();

/**
 * Giving input to IIFE function
 * IMMIDIATELY INVOKING FUNCTION EXPRESSION
 * Print Hello world
 */
(function (message) {
  var x = 20;
  console.log(x, message);
})("Hello world");

/**
 * Anonymous function
 */

// Syntax
/**
 * () => {}
 * function () {}
 */
var vishnu; //Declaration
console.log(typeof vishnu);
vishnu = () => {
  console.log("Execute vishnu");
  return 10;
};
console.log(typeof vishnu);
console.log(vishnu());

/**
 * Arrow Function (EcmaScript)
 */
// syntax:
var fn = () => {};

/**
 * Difference between Named and Arrow Function
 */
greet(); // Call
function greet() {
  console.log("Hello");
} // Defination

console.log(close);
var close = () => {
  console.log("Closed");
};
