// function compute(a, b, cb) {
//     console.log('Compute Started')
//     setTimeout(() => {
//         cb(a + b, 5)
//     }, 5000)
//     console.log('Compute Ended')
// }

// function makeDecision(ans = 0, checkValue = 0) {
//     if (ans > checkValue) {
//         console.log(`Greater than ${checkValue}`)
//     } else {
//         console.log(`Lesser than ${checkValue}`)
//     }
// }

// compute(2, 3, (a, b) => {
//     console.log(a, b)
// })

// var b = 10;

// function a(value, cb) {
//     cb('Successfull')
// }

// function b(message) {
//     console.log(message)
// }

// a(10, b);

// const a = (b) => {
//     b(c)
// }

// const b = (c) => {
//     c(d)
// }

// const c = (d) => {
//     d("Hello")
// }

// const d = (message) => {
//     console.log(message)
// }

// a(b)

// 1. Note readable - Not possible
// 2. Maintainable code - Not possible
// 3. Code debuggable - Not possible
const Timer = () => {
  console.log(10);
  setTimeout(() => {
    console.log(9);
    setTimeout(() => {
      console.log(8);
      setTimeout(() => {
        console.log(7);
      }, 1000);
    }, 1000);
  }, 1000);
};

Timer();

function eat() {
  console.log("Eat Food");
}

function cook(work) {
  console.log("Idli Cooked");
  work();
}

cook(eat);
