/**
 * XMLHTTPRequest - BROWSER API (APPLICATION PROGRAMMING INTERFACE)
 */
// var todosAPi = "https://jsonplaceholder.typicode.com/todos/";

// var todoRequest = new XMLHttpRequest();

// todoRequest.onreadystatechange = function () {
//   var todos = JSON.parse(this.response);

//   if (todos.length > 0) {
//     for (var x = 0; x < todos.length; x++) {
//       console.log(todos[x].title);
//     }
//   }
// };

// todoRequest.open("GET", todosAPi); // GET, POST, PUT, DELETE, PATCH
// todoRequest.send();

// console.log(todoRequest);

var todosAPi = "https://restcountries.com/v3.1/all";
var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  filterAsianCountries(data);
  filterPopulation(data, 200000);
};

todoRequest.open("GET", todosAPi); // GET, POST, PUT, DELETE, PATCH
todoRequest.send();

console.log(todoRequest);

function filterAsianCountries(data = []) {}

function filterPopulation(data = [], population = 0) {}
