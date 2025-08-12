// Now here we will discuss about objects in JS...
// Objects in javascript is a data structure that stores the data in key:value pairs.
// Where keys are always string or symbols, and values can be anything like string, number, boolean, array, object, function etc.

// Syntax of declaring an object...

// 1) Object literal...

const obj = {
  name: "Shailesh",
  age: 22,
  salary: 23000,
  gender: "male",
};

console.log(obj);

// 2) Through Object Constructor

const object = new Object();

object.name = "Megha";
object.age = 28;
object.gender = "female";
object.salary = 50000;
object.isMarried = false;

console.log(object);

// Adding property to an object...
// This is done by using the dot operator...

const randomObj = {
  name: "Kailash",
  age: 23,
  gender: "Male",
  salary: 40000,
};

randomObj.isMarried = false;
console.log(randomObj);

// deleting a property from an object is done using delete operator...
delete randomObj.isMarried;
console.log(randomObj);

// Accessing the object properties... done using dot notation or square bracket notation.
console.log(randomObj.name);
console.log(randomObj["age"]);

// Some common methods of object...

// 1) Object.keys(objecrt_name) : returns you the keys of an object...
const keys = Object.keys(randomObj);
console.log(keys);

// 2) Object.values(object_name) : returns you the values of an object...
const values = Object.values(randomObj);
console.log(values);

// 3) Object.entries(object_name) : returns the key value pairs in the object...
const keyValue = Object.entries(randomObj);
console.log(keyValue);

// 4) Object.assign() : copies the properties of source object into target object...

const objc = {
  a: 12,
  b: 13,
};

const copiedObject = Object.assign(randomObj, objc);
console.log(`Original object is`, randomObj);
console.log(`Copied object is`, copiedObject);

// 5) Object.freeze()

Object.freeze(objc);
objc.name = "Shailesh";
objc.a = 10;
console.log(objc);

// 6) spread syntax...
// Always remember that spread syntax creates a shallow copy of the array or object, that means it creates a new copy for outer level but if there's any nested array or objects, then their reference is copied and not the new copy is made...
// So if you mutate any nested property then it will modify the original ones...

const array = [10, 20, 30, 40];
const newArray = [...array]; // creates a new copy of array into newArray...
newArray.push(50); //newArray is modified, not the original one...
console.log(`Original array is:`, array); // original stays intact...
console.log(newArray); // affected one - copy...

// Example with respect to Object.

const objectz = {
  name: "Shailesh",
  address: {
    city: "Aurangabad",
  },
};

const newObject = { ...objectz };
newObject.address.city = "Chh.Sambhaji Nagar";
console.log(`Original Object: `, objectz);
console.log(`Copy: `, newObject);
