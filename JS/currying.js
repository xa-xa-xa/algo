// function one(a) {
//     console.log("ONE")
//     a();
//     return a
// }

// function two() {
//     console.log("TWO")
// }

// // one(two)
// const b = one(two)
// b()

// Function Currying
// function greet(message) {
//     // console.log("message:", m)
//     return function (name) {
//         console.log(message, name, "!")
//     }
// }


// let greetEng = greet("Hi");
// let greetSpa = greet("Holla");
// // greetEng("Sasha");
// // greetSpa("Sasha");

// const aGreet = msg => name => console.log(`${msg} ${name}!`)

// const spanish = aGreet("Holla");
// // spanish("Max");

// const add = a => b => a + b;
// const add2 = (a, b) => a + b;
// const addMany = (a) => {
//     return b => {
//         if (b) return addMany(a + b)
//         return a
//     }
// }

// function curry(func) {
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args)
//         } else {
//             return function (...args2) {
//                 return curried.apply(this, args.concat(args2))
//             }
//         }
//     }
// }

//* Debounce
// const debounce = (fn, delay) => {
//     let timeoutId;
//     if (timeoutId) clearTimeout(timeoutId);
//     return function (...args) {
//         timeoutId = setTimeout(() => {
//             fn(...args)
//         }, delay)
//     }
// }

//* Throttle



// console.log(universalAdd(1, 2));
// console.log(universalAdd(1)(2));


console.log(multiply(25)(3));
console.log(multiply(2)(2, 3));
console.log(multiply(2)(2)(3));



// console.log(addMany(1)(2)(3)())
// console.log(addMany(1)(2)(3))
// console.log(add(2)(3))
// console.log(add2(2, 3))


// greet("Hi!")