/*
naming conventions and variables

let js = 'amazing';
console.log(40 + 8 + 23 - 10); // console.log is used to print to the developer console.

let firstName = 'Andrew';
console.log(firstName);
let PI = 3.1415; // All uppercase variable names are constants.
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let Country = 'Indonesia';
let Continet = 'Asia';
console.log(Country);
console.log(Continet);
*/
////////////////////////////////////////////////////
/*
console.log(true); // true is a boolean value

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = "Yes!"; // we can re-assign a new value of an existing variable.
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // will give out an object in the console ( bug ).
*/
///////////////////////////////////////////////////
/*
// first way of declaring a variable : let
let age = 30;
age = 31; // we mutate the age variable.

// second way of declaring a variable : const
const PI = 3.14; // const is a constant, we cannot change that
const birthYear = 1991; // We also need an initial value when using const. 
birthYear = 1990; // will give out an error. 

// third way of declaring a variable : var ( WE SHOULD NOT USE THIS !)
// it is kinda similar to let, but it is different. it is the old way of using js, before let. 

var job = "programmer";
job = "teacher"; 

// we can also just do something like this:
lastName = "Tan";
console.log(lastName);
// but this is not a good practice, since js will not declare it in the program scope.
*/
////////////////////////////////////////////////////
/*
const now = 2037;
const ageJonas = now - 1991; // minus operator
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // multiplication , division and power. 
// 2 ** 3 means 2 ^ 3

const firstName = "Andrew";
const lastName = "Tan";
console.log(firstName + " " + lastName); // Concatenation of strings.

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // result will be boolean
// >, <, >=, <=
console.log(ageJonas >= 18);
const isFullAge = ageSarah >= 18;

console.log((now - 1991) > (now - 2018));
*/

///////////////////////////////////////////////////////
// Operator Precedence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/////////////////////////////////////////////////////

// String and Tempelate Literals
/*
const firstName = 'Andrew';
const job = 'teacher';
const birthYear = 2004;
const year = 2025;

const andrew = "i'm " + firstName + ", a" + (year - birthYear) + " years old" + job + "!";
console.log(andrew);

// we use backticks ( `` ) for tempelate literals.
const andrewNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(andrewNew)

// we can use backticks for everything aswell if we want to make it easier. 

console.log("String with \n\ multiple \n\ lines \n\ ");
console.log(`String
    with
    multiple
    lines`) // with tempelate literals, we can just use return instead of \n\ for multiple line strings

*/
////////////////////////////////////////////////////
// if else

/*
const age = 12;
const isOld = age >= 18;

if(isOld){
    console.log('Sarah can start driving license');
} else{
    console.log('Sarah is not able to start driving yet');
    const yearsleft = 18 - age;
    console.log(`Sarah needs to wait another ${yearsleft} years.`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}

console.log(century);
*/
////////////////////////////////////////////////////
/*
// type conversion : Manually convert one type to another
// type coercion : JavaScript automatically convert the type for us behind the scenes

// this is type conversion:
const inputYear = '1991';
console.log(inputYear + 18); // this will output 199118
console.log(Number(inputYear) + 18); // using Number() will convert string to Number.

console.log(typeof NaN); // will output a number lol.
console.log(String(23)); // will become a string.

// this is type coercion:
console.log("I'm " + 23 + " years old.") // the number will be converted as a string. 
console.log('23' - '10' - 3) // the strings will be converted to numbers.
console.log('23' * '2') // the strings will also be converted to numbers since mult only works on numbers. 

let n = '1' + 1;
n = n - 1;
console.log(n); // will output 10. 
*/
////////////////////////////////////////////////////

// truthly and falsely values

// 5 falsely values : 0, '', undefined, null, Nan
// falsely values are values that will be false if converted to boolean

// everything else is a truthly values
// values that will be true if converted to boolean. 

/*
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); // true
console.log(Boolean('')); // false
console.log(Boolean({})); //true

const money = 0;
if(money){ // this will be converted through boolean with type coercion. 
    console.log(`Don't spend it all`);
} else{
    console.log(`You should get a job!`)
}

let height;
if(height){
    console.log('YAY!');
} else{
    console.log('Height is Undefined!')
}

*/
///////////////////////////////////////////////
// Equality operator

/*
const age = 18;
if (age === 18) console.log("You just became an adult.");

// using == will do type coercion
if ('18' == 18) console.log("Javascript is mad wierd lol");
// just assume this doesnt exist lol.

const fav = Number(prompt("What's your favorite number?"));
console.log(fav);
console.log(typeof(fav));

if(fav === 23) {
    console.log("Cool i guess.");
} else if(fav === 4){
    console.log("not cool.");
}

if (favorite !== 23){
    console.log("why not the 23?");
}
*/

/////////////////////////////////////////////////
// Boolean logic : the and, or, & not.

/*
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive) {
    console.log(`Sarah should able to drive.`);
} else{
    console.log(`Sarah shouldn't drive yet.`);
}

const isNotTired = true;

console.log(hasDriversLicense && hasGoodVision && isTired);
*/
/////////////////////////////////////////////////////

//switch case

/*
const day = 'friday';

switch(day){
    case 'monday': // day === 'monday
        console.log("today is monday.");
        break; // we need a break here bcause if not, the code will continue executing without checking conditions. 
    case 'tuesday':
        console.log("not monday.");
        break;
    case 'wednesday':
        console.log("not monday.");
        break;
    case 'thursday':
    case 'friday':
        console.log("today is either thursday or friday.");
        break;
    case 'saturday':
    case 'friday':
        console.log("is this the weekend?");
        break;
    default:
        console.log("not a valid day.")
}
*/
////////////////////////////////////////////////////
// statemend vs expression

/*
// this is an expression : things that produce value such as boolean, etc. 
3 + 4
1991
true && false && !false

// this is statements : if else statement, switch case, etc.
if (23 > 10){
    const str = '23 is bigger.';
}
*/

////////////////////////////////////////////////////
// conditional operator
/*
const age = 23;
age >= 18 ? console.log("I like to drink wine.") : console.log("I like to drink water.");
// this is same as if age is more 18, like wine, else, like water.

const drink = age >= 18 ? "wine" : "water";

// same as code below.
let drink2;
if(age >= 18){
    drink2 = "wine"
} else{
    drink2 = "water"
}

// we can use conditional operator on tempelate structure:
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/
/////////////////////////////////////////////////////

