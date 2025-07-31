'use strict';

// Scope
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); // Jonas will appear (JS will do a global lookup)

  function printAge() {
    let output = `${firstname}, You are ${age}, born in ${birthYear}`;
    // This also works, it can find up till global scope.
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // this is a block scope because of the if condition
      const firstName = 'steven';
      // Creating new variable with same name as outer scope's variable
      var millenial = true;
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
    }
    // we wont be able to do console.log(str) here because str is block scoped.
    console.log(millenial); // but this works because var is function scoped.
    // console.log(add(2,3)); this wont work because function is block scoped
    console.log(output); // the output will be = NEW OUTPUT
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

// Hoisting
/*
console.log(me); // undefined since it is using var
console.log(job); // error unitialized ( its in TDZ )
console.log(year); // error unitialized ( its in TDZ )

var me = 'jonas';
let job = 'Teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3)); // works
console.log(addExpr(2, 3)); // does not work since its using const (IN TDZ)
console.log(addArrow(2, 3)); // does not work aswell

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();
// it will still execute deleteShoppingCart since var is undefined
// Be careful

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// TIPS:
// Do not use var, LIKE EVER.
// Declare functions first

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); //false
console.log(z === window.z); //false

// the window on browser console will present some properties about our code such as functions, etc.
// as per chatgpt: In the browser's JavaScript console, window refers to the global object of the web page — it represents the browser window/tab and provides access to everything global.
// var makes an object on window
// const and let does not.
*/

// This keyword

/*
console.log(this); // will return the window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // this will be undefined
};

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // will return window in arrow functions.
  // Arrow functions does not have its own this keyword, its using the parent scope's this keyword.
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // will return the jonas object
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // will copy the calcAge function from Jonas
matilda.calcAge(); // the This keyword will point to matilda

const f = jonas.calcAge(); // we can copy the function like this
f(); // returning just this will give an undefined value to 'this'.
*/

// this keyword on arrow vs regular functions

var firstName = 'Matilda';
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); // will return the jonas object
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstname}`), // will be 'Hey Matilda' as arrow functions does not have 'this' keyword
};

jonas.greet();
// thus, takeaway: dont use var and dont use arrow functions.

//////////////////////////////////////////////////////////////////////////////////////////
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); // will return the jonas object
    console.log(2037 - this.year);
    const self = this;
    const isMillenial = function () {
      // console.log(this.year >= 1991 && this.year <= 1996);
      // here, the 'this' keyword is undefined. In this case, we can do two things:
      // using const self = this; or
      // using an arrow function
      console.log(self);
      console.log(self.year >= 1991 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstname}`), // will be 'Hey Matilda' as arrow functions does not have 'this' keyword
};

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12); // this still technically works, 8 and 12 just does not have a name.
// only works on regular function

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8); // will be a reference error
*/

// Object References

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalperson, newLastName) {
  originalperson.lastName = newLastName;
  return originalperson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);
// The lastname of both objects will be Davis.
// this is also why we can change objects even though it is a const. Because the const are only the names that reference the actual object.

// shallow copy:
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = { ...jessica }; // this is a shallow copy
jessicaCopy.lastName = 'Davis';
console.log(jessica, jessicaCopy);
// this actually works.

jessicaCopy.family.push('Mary');
jessica.family.push('John');
// but if we do this, it still does not do deep copy
// jessica will also have Mary and John on the family.
// this is bcause the ... is only copying primitives but family is an object

// deep copy:
const jessicaClone = structuredClone(jessica);

jessicaCopy.family.push('Andrew');
jessica.family.push('Lamar');
console.log('Original, ', jessica);
console.log('Clone', jessicaClone);
// structuredClone is important.
