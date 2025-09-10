'use strict';

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

// Data needed for a later exercise - final challenge
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

/*
///////////////////////////////////////
// Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✈️'.repeat(i + 1)}`);
  }
});
*/

/* THIS IS MY SOLUTION BUT IT IS NOT USING A TEXTBOX ( I DIDNT SEE THE CHALLENGE CORRECTLY )
const underscore = prompt('Please enter your underscore_case words');

const camelCaseConverter = function (word) {
  if (
    word.includes('_') &&
    word.indexOf('_') !== 0 &&
    word.indexOf('_') !== word.length - 1
  ) {
    const arr = word.split('_');
    if (arr.length > 1) {
      for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
      }
    }
    return arr.join('');
  } else {
    return word;
  }
};

console.log(camelCaseConverter(underscore));
*/

/*
// Working with strings part 3

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const arr = name.split(' ');
  const complete = [];
  for (const i of arr) {
    // complete.push(i[0].toUpperCase() + i.slice(1));
    complete.push(i.replace(i[0], i[0].toUpperCase()));
  }
  console.log(complete.join(' '));
};

const passenger = 'jessica ann smith davis';
capitalizeName(passenger);

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '-'));

const maskCredit = function (nums) {
  const str = String(nums);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCredit(4332857493847561));
console.log(maskCredit('4981748392458493'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
*/

/*
// Working with strings part 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name:
const passanger = 'jOnAS'; // Jonas
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);

console.log(passangerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@JOnas.Io \n';

// const emailCorrect = loginEmail.toLowerCase()
// const trimmedEmail = emailCorrect.trim()

const normailzedEmail = loginEmail.toLowerCase().trim(); // better we do this
console.log(normailzedEmail);

// Replacing parts of strings
const priceUS = '288.97$';
const priceGB = priceUS.replace('$', '#').replace('.', ',');
console.log(priceGB);

const announcement = `All passangers come to Boarding door 23, Boarding door 23!`;
console.log(announcement.replace('door', 'gate')); // Replace will only replace the first word in the sentence.
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // We can also do this instead of replaceAl. This is using regular expression.

// Methods that return booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('A') && plane.endsWith('neo')) {
  console.log('This plane is part of the new Airbus family.');
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome on board!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
// Working with Strings Part 1
const airline = 'TAP AIR Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // Case sensitive

console.log(airline.slice(4)); // AIR Portugal
console.log(airline.slice(4, 7)); // First index is included, end index is not included

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ')) + 1); // we need +1 so that the space is not included

console.log(airline.slice(-2)); // al from portugal
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are the middle seats - abc def
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

/* 
Challange 3
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*

// 1.
const events = new Set([...gameEvents.values()]);
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
// or
/*
for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`[First Half] ${key}: ${value}`);
  } else {
    console.log(`[Second Half] ${key}: ${value}`);
  }
}
*/

/*
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 👍'],
  [false, 'Try again!'],
]);

// Convert objects to map:
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt('Your answer'));
console.log(
  'your answer is: ' + question.get(question.get('correct') === answer)
);

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// or you can use regular if else
/*
if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}
*/

/*
// Maps : A lot more useful than sets
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Test'); // we wouldnt be able to directly use [1,2] as key because it will be stored on different memory in the heap.
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
// rest.clear();

console.log(rest.get(arr));
*/

/*
// Operations that make sets useful ES2025:
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

const commonFoods = italianFoods.intersection(mexicanFoods); // find the intersection of both set
console.log(`intersection :`, commonFoods);
console.log([...commonFoods]); // if we wanna make it an array

const italianMexicanFusion = italianFoods.union(mexicanFoods); // unionize both sets
console.log(`Union : `, italianMexicanFusion);

console.log([...italianMexicanFusion]);
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('- intersection: ', uniqueItalianAndMexicanFoods); // items from both italian and mexican that is not in the intersection of both. 

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // check if the set is totally different from each other

// there is also subset and superset that is not covered here
/*


/*
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

// Simple operations on a set
console.log(ordersSet); // will only have pasta, pizza, risotto (No Duplicates)
console.log(new Set('Jonas'));
console.log(ordersSet.size); // how many elements in set
console.log(ordersSet.has('Pizza')); // check if pizza is in set
ordersSet.add('Garlic Bread'); // Add elements
ordersSet.delete('Risotto'); // Delete elements
console.log(ordersSet);
// ordersSet.clear(); // Clear all the contents of the set

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // we can use the spread operator so that it is an array and not a set
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
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
/*
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw: ' : `victory ${game[team]}: `;
  console.log(`Odd of ${teamStr}${odd}`);
}

// Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
*/

/*
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
*/

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
