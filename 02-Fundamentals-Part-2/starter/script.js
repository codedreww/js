'use strict'; // activating strict mode

/*
//why we use strict mode:

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
// if we dont use strict mode, this will not make an error but our code will run wierdly. 
if (hasDriversLicense) console.log('I can drive :D');

// Strict mode will introduce errors so that we know something is wrong with our code.
// this is important so that we do not introduce bugs to our code. 

*/

//////////////////////////////////////////////////

/*
// functions

function logger(){
    console.log('My name is Andrew');    
}

// calling / running/ invoking the function. ( Basically we are using the function. )
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.` 
    return juice;
}

console.log(fruitProcessor(3, 4));
const theJuice = fruitProcessor(5, 0);
console.log(theJuice);
*/

///////////////////////////////////////////////////
/*
// function declaration vs expressions:
// this is funciton declaration
function calcAge1(birthYear){
    return 2025 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// this is function expression:
const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// the main difference is that function declaration can be called from anywhere, even before the function is initialized
// function expression on the other hand can only be called after initialization. 
*/

///////////////////////////////////////////////////
// Arrow functions : added on es6
/*

const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Andrew'));

// arrow functions does not have the 'this' keyword used in oop.
*/

//////////////////////////////////////////////////
// Function calling inside another functions.
/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.` 
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/////////////////////////////////////////////////
// introduction to arrays:

/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// we can also do this to declare array:
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// we can access them by index like this:
console.log(friends[0]);
console.log(friends[2]);

// the len function in js.
console.log(friends.length);

// we can get the last index by doing this
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // we can change the data in array
console.log(friends);

const firstName = 'Andrew';
const andrew = [firstName, 'Tan', 2025 - 2004, 'computer scientist', friends];
console.log(andrew);

// Exercise:

const calcAge = function(birthYear){
    return 2025 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018];
const age = calcAge(years[0]);
console.log(age1);
*/

////////////////////////////////////////////////
// array methods:
/*
// add elements:
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // add jay into friends
// newLength will return the new length, so friends.push will not only push
// a new entity, it will also return the length of arrray if we initialize it to a variable.
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add element to the beginning of an array.
console.log(friends);

//remove elements:
friends.pop();
const popped = friends.pop(); // will remove and return the popped element
console.log(friends);
console.log(popped);

friends.shift(); // remove first element of array.
console.log(friends);

// find index of element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // will return -1 for element that does not exist

console.log(friends.includes('Bob')); // return false if bob does not exist in friends. 

if(friends.includes('Steven')){
    console.log('You have a friend called peter.')
}
*/

///////////////////////////////////////////////

// introduction to objects:

