// //EXAMPLE OF MAP
// const array1 = ['vanilla', 'chocolate', 'strawberry'];

// const array2 = array1.map((currentElement) => {
//   return currentElement + ' ice cream';
// });

// console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']


// //EXAMPLE OF ARRAY DESTRUCTURING

// const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

// const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// // Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'


// //EXAMPLE OF OBJECT DESTRUCTURING
// const person = {
//     name: 'Alex',
//     role: 'Software Engineer',
//   };
  
//   // Object destructuring:
//   const { name, role } = person;
  
//   console.log(name); // 'Alex'
//   console.log(role); // 'Software Engineer'
  
//   // Equivalent in traditional dot notation:
//   console.log(person.name); // 'Alex'
//   console.log(person.role); // 'Software Engineer'
  
// //SPREAD OPERATOR ON ARRAYS

//   const originalArray = [1, 2, 3];
//   const duplicateArray = [...originalArray];
  
//   console.log(duplicateArray); // [1, 2, 3]

// const originalArray = [1, 2, 3];
// const referenceArray = originalArray; // referenceArray is now a reference to originalArray

// referenceArray.push(4); // Modifying referenceArray also modifies originalArray
// console.log(originalArray); // [1, 2, 3, 4]
// const fruits = ['apple', 'orange', 'banana'];
// const vegetables = ['broccoli', 'carrot', 'spinach'];

// const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']


//SPREAD OPERATOR ON OBJECTS

// const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
  
//   const clonedObject = { ...originalObject };
//   console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }


// const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
  
//   // Copy the properties of originalObject:
//   const clonedObject = { ...originalObject };
  
//   // Update the properties of clonedObject:
//   clonedObject.foo = 'Goodbye';
//   clonedObject.bar = 0;
  
//   console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
//   console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }

//DYNAMIC KEYS IN OBJECTS
  
// const fruitType = 'bananas'; // Variable as a dynamic key

// const fruitInventory = {
//   [fruitType]: 5,
// };

// console.log(fruitInventory); // { bananas: 5 }

//EXPORT AND IMPORT

// export const myNumber = 123;
// export const myString = 'Hello';

// export default function superCoolFunction() {
//     /* ... */
//   } //export single item from a file

//   import { myNumber, myString } from './myData.js';
//   import superCoolFunction from './superCoolFunction.js';
//   import * as MyData from './myData.js'; imports all named exports as a single object
//   console.log(MyData.myNumber);
//   console.log(MyData.myString);
  
//DEFAULT PARAMETERS

// function addThreeNumbers(numA, numB, numC) {
//     return numA + numB + numC;
//   }
  
//   addThreeNumbers(2); will NaN bc numB and numC are both undefined

// function addThreeNumbers(numA, numB = 2, numC = 1) {
//     return numA + numB + numC;
//   }
  
//   addThreeNumbers(2); will return number 5

// function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
//     return numA + numB + numC;
//   }
  
//   addThreeNumbers(2);still return 5 numA default value will be overridden by passed value 2
  
  //THE TERNARY OPERATOR

// const age = 22;
// let access = age > 21 ? 'Yes' : 'No';

// console.log(access); // 'Yes'



//BOOLEAN &&
//first falsy value it encounters
// const result = false && 'foo';
// console.log(result); // Output: false

// const result = 'hello' && '';
// console.log(result); // Output: ''

// const result = 'foo' && 'bar';
// console.log(result); // Output: 'bar'

// || OPERATOR
//first truthy value it encounters

// const result = '' || 'foo';
// console.log(result); // Output: 'foo'

// const result = 2 || 0;
// console.log(result); // Output: 2

// const result = '' || 0;
// console.log(result); // Output: 0


//OPTIONAL CHAINING

//will allow our code to run without error

// const adventurer = {
//     name: 'Alice',
//   };
  
//   let dog = adventurer.dog?.name;
  
//   console.log(dog); // undefined
  