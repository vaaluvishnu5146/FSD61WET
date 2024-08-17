// // Create a new promise
// const prom1 = new Promise((resolve, reject) => {
//   resolve("Promise Resolved");
// });

// // When to use then and catch technique? When im in need for data which is not
// // available currently, and i need that data may be some time in future, then i
// // can use the same Use Promise and get the data prom1   .then((response) => {
// //   console.log("Success", response);   })   .catch((error) => {
// // console.log("Error", error);   })   .finally(() => {     console.log("Work
// // completed");   }); async and await - Keywords i javascript When to go for the
// // above? I am in need of the data, but the need is immediate!
// console.log("Before everything");

// // Callback fn for getting and processing data
// function printData(data = []) {
//   console.log(data);
// }

// // Async fn for getting data from the api server
// async function getDataFromApi(URI = "", cb = () => {}) {
//   try {
//     const response = await fetch(URI);
//     cb(await response.json());
//   } catch (error) {
//     console.log("Caught Error", error);
//   }
// }

// // Calling async fn with cb
// getDataFromApi("https://jsonplaceholder.typicode.com/todos/", printData);
// console.log("After everything");


async function add(a, b) {
  return a + b
 }
 
add(10, 20).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
}).finally(() => {
  console.log('Finally executed')
})