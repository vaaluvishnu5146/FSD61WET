// Named Function
function greet() {
    console.log("Happy coding")
}
greet()

// IIFE - Immidiately invoking function expression
// IIFE function invokes automatically
(() => {
    console.log("Happy coding!")
})()

(function () {
    console.log("Happy coding!")
})()

// Anonymous function
// There 2 types
// 1. function keyword
// 2. Arrow
// Anonymous functions cannot be executed because they doesnt have function declaration,
// but only has function defination means without name of the function we cannot call the function

// function () {
//     console.log("Happy coding")
// }

// () => {
//     console.log("Happy coding")
// }

// Arrow Functions
const fn = () => {
    console.log("Happy coding")
}

fn();