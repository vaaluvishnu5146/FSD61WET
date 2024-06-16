/**
 * Var keyword is global scoped variable
 */
var nama = "Vishnu";
nama = "Vishnu Vardhan";

/**
 * let and const is block scope / function scope variable
 */
function x() {
  const nama = "";
}

function y() {
  let nama = "";
}

/**
 * Declared and assigned a value to let
 * Let can be initialised and Re-initialised
 */
let food = "Idli";
console.log(food); // idli

food = "Dosa";
console.log(food); // Dosa

/**
 * Declared and assigned a value to idli
 * const can be decalred and initialised only once in a given scope
 */
// const food = "idli";
// console.log(food);

// food = "Dosa";
// console.log(food); // TypeError: Assignment to constant variable.

/**
 * Rest Operator
 */
function add(a, b, ...c) {
  console.log(c);
  let sum = a + b;
  for (let x = 0; x < c.length; x++) {
    sum = sum + c[x];
  }
  return sum;
}

console.log(add(10, 20, 30, 40, 50));

/**
 * Array and Object destructuring
 */
// const [namee, ages, qual, place] = ["Vishnu", 28, "BE", "Cbe"];
// console.log(name, ages, qual, place);
// const name = details[0]
// const ages = details[1]

const { nama, age } = {
  nama: "Vishnu",
  age: 28,
};

console.log(nama, age);

/**
 * Object Property Short-hand
 */
var heroName = "Ironman";
var power = ["AI Weapon", "Money", "Arc reactor"];
var place = "USA, NYC";

var data = {
  heroName,
  superPower: power,
  place,
};

console.log(data);

/**
 * Template literals / String interpolation
 */
var name = "Vishnu";
var bonusMoney = "10,000 INR";
const messageTemplate = `Hey ${name}, we have credited ${bonusMoney} to your Rummy circle wallet. Play now and enjoy exciting bonuses`;
console.log(messageTemplate);

// BASic concatination
console.log(
  "Hey " +
    name +
    ", we have credited " +
    bonusMoney +
    " to your Rummy circle wallet. Play now and enjoy exciting bonuses"
);
