const URI = "https://jsonplaceholder.typicode.com/todos/";
const request = new XMLHttpRequest();
request.open("GET", URI);
request.send();

request.onreadystatechange = function () {
  console.log(JSON.parse(this.response));
};

console.log(request);

// setTimeout(() => {
//   console.log(request.response);
// }, 3000);
