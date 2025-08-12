// Here we will discuss about hoisting in javascript...

/*
var x = 10;

function sayName() {
  console.log("Hello Shailesh");
}

sayName(); // invoking the function sayName... (should say hello shailesh)
console.log(x); // should log 10
Here it works as intended...
*/

// Moving the function invocation to the top of code - before even initalising...
/*
sayName(); // invoking the function sayName... (should say hello shailesh)
// Here also it logs the message as hello shailesh... (Reason - Memory creation phase!)

var x = 10;

function sayName() {
  console.log("Hello Shailesh");
}

console.log(x); // should log 10
*/

// sayName(); // invoking the function sayName... (should say hello shailesh)
// Here also it logs the message as hello shailesh... (Reason - Memory creation phase!)
// console.log(x); // here it logs undefined (Reason - Memory creation phase!)
console.log(x);
var x = 10;

function sayName() {
  console.log("Hello Shailesh");
}
