'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // es6 enhanced object literals
  openingHours,

  // In object, we can do this instead of declaring order = function(){}. but only in objects.
  order(starterIndex, mainIndex) {
    // Destructuring Arrays
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    // Destructuring Objects
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    // Spread operator
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    // Rest parameters
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// Looping Objects: Object keys, values, and entries

// Property Names ( keys )
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += '~${day}, ';
}

console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Property entries
const entries = Object.values(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
// Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// optional chaining is developed in es2020 to fix problem like above where its hard to read:
console.log(restaurant.openingHours.mon?.open); // Only if the .mon property exists, then open can proceed.
console.log(restaurant.openingHours?.mon?.open); // Here it is checking if openingHours and mon exists.

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  if (open === 'closed') {
    console.log(`On ${day}, we are ${open}`);
  } else {
    console.log(`On ${day}, we open at ${open}`);
  }
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users = [];

console.log(users[0]?.name ?? 'User array empty');
*/

/*
// The for-of loop
// similar to for-in loop in python

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  // menu.entries will create an array containing an index of the item and the item.
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');
*/

/*
// Logical Assignment Operators : ES2021
const rest1 = {
  name: 'Capri',
  numGuests: '20',
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

const rest3 = {
  name: 'Capricas',
  numGuests: '0',
};

// logical or operator : ||=
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10; // This is same as rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests ||= 20; // This is same as rest2.numGuests = rest2.numGuests || 10;

console.log(rest1); // 10
console.log(rest2); // 10

// logical nullish operator : ??=
rest3.numGuests ??= 10; // 0
rest2.numGuests ??= 10; // 10

// logical and operator : &&=
// example: we want to make the owner name anonymous
// rest1.owner = rest1.owner && '<ANONYMOUS>'// undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>'// <ANONYMOUS>

rest1 &&= '<ANONYMOUS>';
rest2 &&= '<ANONYMOUS>';

console.log(rest1); // undefined
console.log(rest2); // // <ANONYMOUS>
*/

////////////////////////////////////////////
/*
// The ?? (nullish) operator : introduced on es 2020
// Nullish : only includes null and undefined ( NOT 0 or '' )
restaurant.numGuests = 0;
const guests = restaurant.numGuests2 || 10;
console.log(guests); // 10

const guestCorrect = restaurant.numGuests ?? 10:
console.log(guestCorrect); // 0
*/

////////////////////////////////////////////
/*
// Short Circuiting ( && and || )
// Use ANY data type, return ANY data type, short-circuiting.
console.log('------OR------');
// in the case of the || (or) operand, if the first element is a truthly value, it will always return the first value.
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null ( returned because it is the 2nd value even though null is a falselly value.)

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Will return Hello as it is the first truthly value

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests2 || 10;
console.log(guests2);

// the && (and) operand:
console.log('------AND------');
console.log(0 && 'Jonas'); // 0 ( Returns the first falsely values, else will return the last truthly values)
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach'); // we can do this, but it is hard to read lol.
*/

/////////////////////////////////////////////
/*
// The rest patterns and parameters:
// 1st Part : Destructuring
// SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Rest element must be the last element, and only one rest element is allowed.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2nd part: Functions ( REST Parameters)
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 4, 7, 3);
add(8, 2, 5, 3, 2, 2, 1, 5);

const x = [23, 5, 7];
add(...x); // spread

restaurant.orderPasta('mushroom', 'onion', 'olives', 'spinach');
*/

///////////////////////////////////////////////
/*
// The sprad operator (....) :
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr]; // Using the spread operator to unpack the array
console.log(newArr); // [1, 2, 7, 8, 9]
// The spread operator unpacks the elements of arr into the new array.

console.log(...newArr); // 1 2 7 8 9
// this will log the inidividual elements of newArr to the console.

const newMenu = [...restaurant.mainMenu, 'Gnocchi']; // Adding a new item to the main menu
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocchi'], we are building a new menu, original array is not affected.

// Create shallow coppies of arrays
const mainMenuCopy = [...restaurant.mainMenu]; // Creating a shallow copy of the main menu
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']

// Joining two arrays using the spread operator
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // Combining starter and main
console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// iterables: arrays, strings, maps, sets. NOT objects
// spread opeartor works on all iterables.

const str = 'Andrew';
const letters = [...str, ' ', 'T.'];
console.log(letters); // ['A', 'n', 'd', 'r', 'e', 'w', ' ', 'T.']
console.log(...str); // A n d r e w

// console.log(`${...str} Schofield`); // Error: Spread syntax is not

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients); // Array of ingredients entered by the user
restaurant.orderPasta(...ingredients); // Using spread operator to pass ingredients

// Since ES2018, we can use the spread operator with objects, even though objects are not iterables.
// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseuppe' };
console.log(newRestaurant);
// we created a new object by copying all properties from the restaurant object and adding new properties.

const restaurantCopy = { ...restaurant }; // Creating a shallow copy of the restaurant object
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
*/

////////////////////////////////////////////////
/*
// Object destructuring on functions.
restaurant.orderDelivery({
  time: '23.30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1, // Using default values for starterIndex and mainIndex
}); // Using default values for starterIndex and mainIndex

// Object destructuring : very useful for handling thid-party APIs or complex objects
const { name, openingHours, categories } = restaurant; // Destructuring the restaurant object
console.log(name, openingHours, categories); // Classico Italiano {thu: {…},

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; // Renaming variables during destructuring
console.log(restaurantName, hours, tags); // Classico Italiano {thu: {…

// default values
const { menu = [], starterMenu: starters = [] } = restaurant; // Default values in destructuring
console.log(menu, starters); // [] ['Focaccia', 'Bruschetta', '

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // Using parentheses to avoid syntax error
console.log(a, b); // 23 7

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23
*/

////////////////////////////////////////////////////
/*
// Array destructuring ==
const arr = [2, 3, 4];

// Example without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Example with destructuring
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); // [2, 3, 4]

const [first, , third] = restaurant.categories; // Skipping the second element.
console.log(first, third); // Italian Vegetarian

let [main, secondary] = restaurant.categories; // Assigning to two variables
console.log(main, secondary); // Italian Pizzeria

// Switching variables without destructuring
// const temp = main; // Using a temporary variable
// main = secondary; // Assigning secondary to main
// secondary = temp; // Assigning temp to secondary
// console.log(main, secondary); // Pizzeria Italian

// Switching variables with destructuring
[main, secondary] = [secondary, main]; // Using destructuring to switch
console.log(main, secondary); // Italian Pizzeria

console.log(restaurant.order(2, 0)); // ['Garlic Bread', 'Pizza']

const [starter, mainCourse] = restaurant.order(2, 0); // Destructuring the order
console.log(starter, mainCourse); // Garlic Bread Pizza

const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5, 6]

const [i, , [j, k]] = nested; // Destructuring nested array
console.log(i, j, k); // 2 5 6

// Default values in destructuring
const [p = 1, q = 1, r = 1] = [8, 9]; // we can set default values in destructuring arrays.
console.log(p, q, r); // 8 9 undefined
*/
