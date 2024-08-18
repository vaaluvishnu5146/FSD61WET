// "use strict";

// ES5:
// 1. Strict Mode
// 2. JSON Support
// 3. New Array Methods

// JSON.stringify()
// JSON.parse()
// const json = {
//     "tasks": [
//         {
//             "task": "Get up at 4.00AM"
//         },
//         {
//             "task": "Brush teeth"
//         },
//         {
//             "task": "Lets learn Javascript"
//         }
//     ],
//     "message": "Tasks fetched successfully!"
// };

// Step1: Convert json to string
// const stringified = JSON.stringify(json)
// console.log(stringified)

// Step 2: Valid JSON string to Javascript object
// const strToJson = JSON.parse(stringified)
// console.log(strToJson)

// ES6:
// 1. Arrow Function
// 2. Classes
// 3. Template Literals
// 4. Default Function Parameters
// 5. Destructuring Assignment
// 6. Modules
// 7. Promises
// 8. Let and Const variables

// Regular/Named Function
// Function Defination
// console.log(x())
// function x() {
//   console.log('Im complete')   
// }

// Arrow Function
// Function Declaration
// const two = () => {
//     console.log("Im partially complete")
// }
// console.log(two)


// var, let and const
// function shootingSpot() {
//     const intensity = 10;
//     console.log(intensity) // "P", 10
// }

// function caraVan() {
//     const intensity = "High";
//     console.log(intensity)
// }

// shootingSpot();
// caraVan();


// Classes in Javascript
// OOP - Object Oriented Programming 
// 1. Abstraction
// 2. Polymorphism
// 3. inheritance
// 4. Encapsulation

// Syntax of Animal Class Constructor
// Base Class
// class Animal {
//     #x = 10;
//     static a = 100;
//     // It will run when we create instance of the class
//     constructor(name, legs, color) {
//         this.name = name;
//         this.legs = legs;
//         this.color = color;
//     }

//     // Method walk
//     walk() {
//         console.log(`${this.name} is walking`)
//     }

//     printPrivate() {
//         console.log(this.#x)
//     }

//     static shield() {
//         console.log("Im private")
//         return "Shield"
//     }
// }

// Create Instance of the Animal class
// const cat = new Animal("Cat", "4", "Orange");
// const penguin = new Animal("Penquin", "2", "White & Black");
// const dog = new Animal("Dog", "4", "Brown");

// // Derived Class - Super constructor
// class WildAnimals extends Animal {
//     power = "";
//     speed = '';
//     constructor() {
//         super();
//     }
// }

// const lion = new WildAnimals();
// console.log(lion)

// CONCATINATION
// const one = "Vishnu";
// const two = "Vardhan";

// console.log(one + " " + two) // CONCATINATION

// console.log(`${one} ${two}`)

// // TEMPLATE LITERALS AND STRING INTERPOLATION
// const age = 1300;
// // Vishnu Vardhan
// console.log(`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//     Lorem Ipsum has been the industry's standard dummy text ever since the ${age}s, 
//     when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
//     It has survived not only five centuries, but also the leap into electronic typesetting,
//     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
//     containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
//     including versions of Lorem Ipsum`)


// Default Function Parameter

// function greet(message = "") {
//     console.log("Result", message.toLowerCase())
// }

// greet()


// Destructuring
// Array
// const [x, y, z] = [1, 2, 3];
// console.log(x, y, z)

// const { name, work, subjects } = {
//     name: "Vishnu",
//     work: "Mentoring",
//     subjects: "Full-Stack"
// }

// console.log(name, work, subjects)

const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 10000)
});

prom1.then((result) => {
    console.log(result)
}).catch()


















