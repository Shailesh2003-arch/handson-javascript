"use-strict";

// [CLEAN]
// Here we are discussing about functions...

// Function is a reusable block of code which can be reused anywhere in the file we are working in !
// In javascript, there are various type of functions...

/* 1) Function declaration...
Function declaration is where you define the function with a function keyword, followed by function name...
something like this...


function sayHello() {
console.log(`Hello!...`);
}

Now this function can be invoked anywhere you want in the current JS file...
Also remember that you can call this function anywhere in this file because of hoisting...
sayHello();

********Important***********

Function declarations are hoisted...
*/

// As in other languages like C,C++, and Java, we can also pass arguments to the functions...

/* 

// name here is the parameter that is holding the passed argument's value...
function sayHello(name) {
  console.log(`Hello!, ${name}`);
}

sayHello("Shaill"); // here Shaill is an argument...
sayHello("Shailesh");
sayHello("Riyansh");

*/

/*
2) Function expression is where a variable holds a function definition... 


const greet = function () {
  console.log(`Hello from function expression`);
};

console.log(greet);
console.log(greet());

*/

// 3) Callback functions...

/* Definition : Callback functions are those functions which are passed as an argument to another function and that function invokes the passed function either immediately or after executing its own logic or on any event occurs...

function doHomework(subject, fn) {
  console.log(`Started doing my ${subject} homework`);
  fn();
}

function completedHomework() {
  console.log(`Done with my homework`);
}

doHomework("Maths", completedHomework);

*/

// 4) Anonymous functions...

/* Anonymous function is a function which doesnt have any name defined for it!...
This kind of function aren't reusable and can be just used once...
for example : 

setTimeout(function () {
  console.log(`Hello shaill`);
}, 3000);


*/

// 5) Arrow function...
/*
Arrow function is a shorter syntax for traditional function where we dont have access to 'this' keyword...

for example:

const Header = () => {
  console.log(`Hello from arrow function`);
};

Header();

//  arrow function with argument...
const sayHello = (name) => {
  console.log(`Hello!, ${name}`);
};

sayHello("Kshitij");

// function with default parameter...
const sayHii = (name = "Riyansh") => {
  console.log(`Hey!, ${name}`);
};

sayHii(); // executes the function with default parameter...
sayHii("Shailesh"); // executes the function with this argument...

*/

// 6) Immediately invoked function expression (IIFE)...
/*
Immediately invoked function expression gets executed as soon as its defined...
for example:

(function sayBye() {
  console.log(`Bye bye!...`);
})();

this function doesn't need to be invoked manually as it's invoked the moment we defined it using the paranthesis.

*/

// const names = ["shailesh", "megha", "nilesh"];

// console.log(names.length);

// names.forEach((currEle, index) => {
//   console.log(`My name is ${currEle + " and I'm a good boy"}`);
// });

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// console.log(`Original array is:`, names);

// let numbers = [19, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((currEle, index) => {
//   if (currEle === 2) {
//     console.log(`2 is current element`);
//     break;
//   } else {
//     console.log(currEle);
//   }
// });

// numbers.push(11);

// console.log(numbers);

// const sortednumbers = numbers.sort();
// console.log(sortednumbers);

// const newObj = {
//   name: "Shailesh",
//   // age: 22,
//   gender: "Male",
//   salary: 28000,
// };

// const { name, salary } = newObj;

// console.log(newObj.age);
// console.log(`Name of the employee is ${name} and salary is ${salary}`);

// const arr = [10, 20, 30, 40];

// // console.log(`Array element are: `, ...arr);
// const destructuredArray = [...arr, 50];
// console.log(destructuredArray);
// console.log(typeof destructuredArray);
