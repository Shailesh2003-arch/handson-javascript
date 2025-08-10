"use-strict";

// Here we will discuss about arrays and important methods of arrays...
// Array is a homogenous as well as heterogenous mixture of elements, that means an array can hold data of same type as well as different type...
// And always remember in javascript at the end of the day everything is an Object..

// For example:
// Example with homogenous mixture (same datatype)

const names = ["Shailesh", "Riyansh", "Akshay", "Tushar"];
// console.log(names);

// Example with heterogenous mixture (different datatype)
const mixElements = [10, 20, 30, "Shailesh", true, false, NaN, ""];
// console.log(mixElements);

// Different way to initialise an array using the array constructor...
const numbers = new Array(10, 20, 30, 40, 50);
// console.log(typeof numbers);

// An amazing property of Array 'length'
// console.log(numbers.length);

// Understanding iterating over an array...

const newNumbers = [10, 20, 30, 40, 50]; //Now how you can iterate on this array?
// we have two ways...

// 1) traditional for-loop...

// for (let i = 0; i < newNumbers.length; i++) {
//   console.log(newNumbers[i]);
// }

// 2) executes a callback function on each array element and returns it into the new array...
// Numbers.map((currEle) => console.log(currEle * 2));
// console.log(Numbers);

// Some important methods of array (Mutating the array)

const Numbers = [10, 20, 30, 40, 50];

// 1) push(): appends an element at the end of an array...
Numbers.push(60);
console.log(Numbers);

// 2) pop(): pops the last element from an array...

Numbers.pop();
console.log(Numbers);

// 3) shift() removes an element to from first position in an array...

console.log(Numbers.shift());
console.log(Numbers);

// 4) unshift() adds an element to the first position in an array...
Numbers.unshift(70);
console.log(Numbers);
