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
// introduction to objects: basicially a hashmap

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Tan",
    birthYear: 2004,
    job: "teacher",
    friends: ['Michael,', 'Peter', 'Steven'],
    hasDriversLicense: true
}

console.log(jonas)

// dot notation
console.log(jonas.lastName)

// brackets notation : we can use expressions inside the brackets.
console.log(jonas['lastName'])

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.')

if(jonas[interestedIn]){
    console.log(jonas[interestedIn])
    // we cannot do jonas.interestedIn here, we can only use the brackets notation. 
} else{
    console.log("Wrong request!, choose the right option please.")
}

jonas.location = 'Portugal'
jonas['twitter'] = '@jonastan'
console.log(jonas)

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

*/
/////////////////////////////////////////////////////
// Object methods  
/*
const jonas = {
    firstName: "Jonas",
    lastName: "Tan",
    birthYear: 2004,
    job: "teacher",
    friends: ['Michael,', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){ // we can do this inside an object. 
    //     return 2025 - birthYear
    // } v1

    // calcAge: function(){
    //     return 2025 - this.birthYear
    // } v2

    calcAge: function(){
        this.age = 2025 - this.birthYear;
        return this.age
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
}

// console.log(jonas.calcAge(jonas.birthYear)) v1
// console.log(jonas['calcAge'](jonas.birthYear)) v1

// console.log(jonas.calcAge()) v2
 console.log(jonas.calcAge())
 console.log(jonas.age)
 console.log(jonas.age)
 console.log(jonas.getSummary())
*/

////////////////////////////////////////////////////////
// for loop:
/*
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
*/

///////////////////////////////////////////////////////
// more about loops:
/*
const jonasArray = ['Jonas', 'Tan', 2025 - 2004,  'Teacher', ['Michael', 'Peter', 'Andrew']]
const types = []

for(let i = 0; i < jonasArray.length; i++){
    console.log(jonasArray[i], typeof jonasArray[i])

    // filling an array
    // types[i] = typeof jonasArray[i]; (v1)
    types.push(typeof jonasArray[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2004]
const ages = []

for(let i = 0; i < years.length; i++){
    ages.push(2025 - years[i])
}

console.log(ages)

// continue and break method

// print only strings
console.log('--- Only strings ---')
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'string') continue
    console.log(jonasArray[i], typeof jonasArray[i])
}


// break with number
console.log('--- Break with number ---')
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] === 'number') break
    console.log(jonasArray[i], typeof jonasArray[i])
}
*/

/////////////////////////////////////////////////////////
// Looping backwards and loop in loops
/*
const jonas = ['Jonas', 'Tan', 2025 - 2004,  'Teacher', ['Michael', 'Peter', 'Andrew']]

for(let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i])
}

// double loop
for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`--- Starting exercise ${exercise} ---`)
    for(let rep = 1; rep <= 5; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}
*/

/////////////////////////////////////////////////////////
// while loop
/*
let rep = 1
while(rep <= 10){
    console.log(`Lifting weight repetition ${rep}`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)

while (dice !== 6){
    console.log(`you rolled a ${dice}.`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6){
        console.log('Congrats, you rolled a 6')
    }
}
*/

