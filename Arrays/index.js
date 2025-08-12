"use-strict";

// Here we will discuss about arrays and important methods of arrays...
// Array is a homogenous as well as heterogenous mixture of elements, that means an array can hold data of same type as well as different type...
// And always remember in javascript at the end of the day everything is an Object so an array is also an object...

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

for (let i = 0; i < newNumbers.length; i++) {
  console.log(newNumbers[i]);
}

// 2) forEach method - executes a callback function on each array element and returns it into the new array...
Numbers.map((currEle) => console.log(currEle * 2));
console.log(Numbers);

/*************************** Mutating Methods of an Array ************************************************/

// Some important methods of array (Mutating the array)
// Mutating method means the methods that changes the original array...

const Numbers = [10, 20, 30, 40, 50];

// 1) push(): appends an element at the end of an array...
Numbers.push(60);
console.log(Numbers); // original array got changed...

// 2) pop(): pops the last element from an array...

Numbers.pop();
console.log(Numbers); // original array got changed...

// 3) shift() removes an element to from first position in an array...

console.log(Numbers.shift());
console.log(Numbers); // original array got changed...

// 4) unshift() adds an element to the first position in an array...
Numbers.unshift(70, 80);
console.log(Numbers); // original array got changed...

// 5) splice()

Numbers.splice(2, 3, "a", "b");
// console.log(Numbers);
Numbers.reverse();

// console.log(Numbers);
/************************************ Non-Mutating Methods ************************************************/

// Non-Mutating method returns a new array, it doesn't modifies the original array...

// 1) slice() : slice() creates a new array by extracting a portion of an existing array. It does not modify the original array.
// for example:

const Numbersz = [10, 20, 30, 40, 50, 60];
const slicedNumbers = Numbersz.slice(1, 4);
console.log(slicedNumbers);

// 2) concat() method joins two or more arrays or values and returns a new array...
console.log(`Original array:`, Numbersz);
const concat = Numbersz.concat(70, 80, 90);
console.log(concat);

const nayaArray = ["Shailesh", "Riyansh"];
const nayaArray1 = ["Kartik", "Pranav"];
const concated = Numbersz.concat(nayaArray, nayaArray1);
console.log(concated);

// 3) map() returns a new array by running a callback on each element present in the array!...

// Example 1:

const doubled = Numbersz.map((number) => number * 2);
console.log(doubled);

// Example 2:

const namesz = ["Shashank", "Abhi", "Ravi", "Kashish"];
const mappedArr = namesz.map((currEle) => {
  return `${currEle} is a good boy`;
});

console.log(mappedArr);

// 4) filter() returns the element of an array that matches the condition (filter)

const numberz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipleofTwo = numberz.filter((currEle) => currEle % 2 == 0);
// console.log(multipleofTwo);

// 5) reduce()

const addedNumbers = numbers.reduce((acc, curEle, index, numbers) => {
  return acc + curEle;
}, 0);

console.log(addedNumbers);

// 6) find() this method returns the first element from an array that satisfies the condition...

const numberis = numberz.find((curEle, index, numberz) => curEle % 2 == 0);
console.log(numberis);

// 7) findIndex() returns the index number of the element that satisfies the condition...

const numberd = numberz.findIndex((curEle) => curEle > 5);
console.log(numberd);

// 8) includes() returns true if the array contains any specified element false otherwise...

// 9) join() - join method returns a string seperated by the seperator...

const arr = [10, 22, 33];
const stringArr = arr.join("/");
console.log(stringArr);

console.log(typeof stringArr);
