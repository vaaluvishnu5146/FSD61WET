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
