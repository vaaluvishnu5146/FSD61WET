// for(start; stop; step) {

// }

// Basic usage of for loop
for (var x = 1; x <= 10; x++) {
  console.log(x);
}

// Using for loop with array
var scores = [1, 3, 4, 6, 2, 0, 0, 4, 6, 4, 2, 0];
for (var y = 0; y < scores.length; y++) {
  console.log(scores[y]);
}

// Using forEach for printing all elements in the array
var scores = [1, 3, 4, 6, 2, 0];
function callback(element, index, self) {
  console.log(element, index, self);
}
scores.forEach(callback);

// MRF - Map, Reduce, Filter
// Map - Calls a defined callback function on each element of an array, and returns an array that contains the results.
// Returns: Array[]
var scores = [1, 3, 4, 6, 2, 0];
function callback(element, index, self) {
  return element * 2;
}
var output = scores.map(callback); // [2, 6, 8, 12, 4, 0]
console.log(output);

// Filter
// for loop
var input = ["💙", "🐙", "🐙", "🐳", "🐳"];
var output = [];
// I wanted only "🐙", "🐳"
for (var z = 0; z < input.length; z++) {
  if (input[z] === "🐙" || input[z] === "🐳") {
    output.push(input[z]);
  }
}
console.log(input, output);

// using forEach filter array
var input = ["💙", "🐙", "🐙", "🐳", "🐳"];
var output = [];

input.forEach((element) => {
  if (element !== "💙") {
    output.push(element);
  }
});

console.log(input, output);

// filter() fn to filter out "💙"
var input = ["💙", "🐙", "🐙", "🐳", "🐳"];

function filterElements(element, index, array) {
  return element === "💙";
}

var output = input.filter(filterElements);
console.log(output);

// Reduce

// Calculate total score using for loop
var scores = [1, 3, 4, 6, 2, 0];
var totalScore = 0;

for (var a = 0; a < scores.length; a++) {
  totalScore += scores[a];
}

console.log(totalScore);

// Calculate total score using for loop
var scores = [1, 3, 4, 6, 2, 0];
var totalScore = 0;

scores.forEach((element) => {
  totalScore += element;
});

console.log(totalScore);

// Reduce
var scores = [1, 3, 4, 6, 2, 0];

function callback(carry, nextElement) {
  console.log(carry, nextElement);
  return carry + nextElement;
}

var output = scores.reduce(callback);
console.log("Answer", output);

Array.prototype.vishnu = function () {
  console.log(this);
};

console.log(Array.prototype);

var data = ["My fn", "Prototype"];
data.vishnu();
