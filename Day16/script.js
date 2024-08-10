const firstPromise = new Promise((resolve, reject) => {
  const data = [{}, {}, {}];
  setTimeout(() => {
    // reject("Error Occurred");
    resolve(data);
  }, 5000);
});

console.log("Before Promise");

firstPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Im runnin chumma");
  });

console.log("After Promise");

// Example for more than 1 promise
const promise1 = new Promise((resolve, reject) => {
  resolve("One");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("Two");
});
const promise3 = new Promise((resolve, reject) => {
  reject("Three");
});

// Either this
Promise.all([promise1, promise2, promise3])
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Finally");
  });

// Or this

// promise1.then((response) => console.log(response)).catch();

// promise2.then((response) => console.log(response)).catch();

// promise3.then((response) => console.log(response)).catch();

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Katham katham");
  });
