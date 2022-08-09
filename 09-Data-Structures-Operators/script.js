'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// In ES6+, keys of objects can be computed
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
  // ES6 enhanced object literal
  // External objects can be added to an object literal just by using the object name
  openingHours,

  // ES5 and less way to add methods to an object
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Methods can be created without a key value since ES6
  // The method name will be the key value
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////////////////////////////////
// STring Methods Parctice
//

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(46);
  console.log(output);
}

/*
///////////////////////////////////////////////////////////////////
// WORKING WITH STRINGS - PART 3
//
// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
// Destructure the results
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesCap = [];
  for (const n of names) {
    // namesCap.push(n[0].toUpperCase() + n.slice(1));
    namesCap.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesCap.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(12345678));
console.log(maskCreditCard(1234567890123456));
console.log(maskCreditCard('234567890123456789012345'));

// Repeat a string
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(7);


///////////////////////////////////////////////////////////////////
// WORKING WITH STRINGS - PART 2
//

const airLine = 'TAP Air Portugal';
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix capitalization in nam3
const passenger = 'jOnAS';
console.log('a+very+nice+string');console.log(passenger);


const passengerLowerCase = passenger.toLowerCase();
const passengerCorrect =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Methods which return Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('This plane is part of the new Airbus family');
} else {
  console.log('This plane is not part of the new Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some Food, and a pocket Knife.');
checkBaggage('Socks and a camera');
checkBaggage('Got some snacks and a gun for protection');


///////////////////////////////////////////////////////////////////
// WORKING WITH STRINGS - PART 1
//

const airLine = 'TAP Air Portugal';
const plane = 'A320';
// Select Individual Characters
console.log(plane[0]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

// String Methods
console.log(airLine.indexOf('r')); // Both of the index methods are CASE SENSITIVE
console.log(airLine.lastIndexOf('r'));
console.log(airLine.lastIndexOf('portugal'));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7)); // The character at the END parameter is NOT returned

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat ☹️');
  else console.log('You got lucky 🙂');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));


/////////////////////////////////////////////////////////////////
// MAPS: ITERATION
//

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🥳'],
  [false, 'Try, again!'],
]);
console.log(question);



// Convert objects to MAPs
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quizz App
console.log(question.get('question'));
// Iterating over a MAP
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(answer === question.get('correct')));

// Convert MAP to Array
console.log([...question]);


///////////////////////////////////////////////////////////////////
// MAPS: FUNDAMENTALS
//

const rest = new Map();
console.log(rest);
// The SET method expects Key/Value pairs
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest);

console.log(rest.get('name'));
// console.log(rest.get(true));

// The following is clever, but not very readable
const time = 10; //21; // In hours
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
// rest.set([1, 2], 'Test');
rest.set(arr, 'Test'); // This Works!
// console.log(rest.get([1, 2]));    // Returns UNDEFINED. The array in the get method is not the same array in the set method
console.log(rest.get(arr)); // This returns 'Test'!!!
rest.set(document.querySelector('h1'), 'Heading'); // DOM element as MAP key
console.log(rest);
console.log(rest.size);


///////////////////////////////////////////////////////////////////
// SETS
//
const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const positions = new Set(staff);
const positionsArr = [...positions];
console.log(positions, positionsArr);
// Collecting number of unique values without creating a set
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);


///////////////////////////////////////////////////////////////////
// Looping Objects: Keys, Values, and Entries
//
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days per week:`;
for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Property ENTRIES (entire object)
const entries = Object.entries(openingHours);
console.log(entries);
// Looping over entire object
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


///////////////////////////////////////////////////////////////////
// OPTIONAL CHAINING (?.)
//
// Check w/o optional chaning
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// Check with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // Using the || operator causes the saturday results to be closed
  // const open = restaurant.openingHours[day]?.open || 'closed';
  // Using the NULLISH COALESCING operator we get the correct value
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // const open = restaurant.openingHours[day]?.open;
  open >= 0
    ? console.log(`On ${day}, we open at ${open}`)
    : console.log(`On ${day}, we are ${open}`);
}

// Optional Chaining also works for calling methods
console.log(restaurant.order?.(0, 1));
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Optional Chaining also works with arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];
console.log(users[0]?.name ?? 'User array empty');


///////////////////////////////////////////////////////////////////
// ENHANCED OBJECT LITERALS
//
console.log(restaurant);

///////////////////////////////////////////////////////////////////
// For-of Loop
//

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const [i, value] of menu.entries()) {
  console.log(`${i + 1}: ${value}`);
}
console.log(menu.entries());
console.log([...menu.entries()]);


///////////////////////////////////////////////////////////////////
// LOGICAL ASSIGNMENT OPERATORS
//
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};


// The OR ASSIGNMENT operator
// rest1.numGuests = rest1.numGuests || 10; // Results same as OR ASSIGNMENT operator
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10; // Works the same as 'rest1' above
// rest2.numGuests ||= 10; // Works the same as 'rest2' above

// Logical NULLISH ASSIGNMENT OPERATOR
// Use when you want to accept '0' as a value
rest1.numGuests ??= 10; // Works the same as 'rest1' above
rest2.numGuests ??= 10; // Works the same as 'rest2' above

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


///////////////////////////////////////////////////////////////////
// The NULLISH Operator
// 
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


///////////////////////////////////////////////////////////////////
// SHORT CIRCUITING (&& and ||)
//
console.log('---- OR ----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// Setting default values
// The OR operator is a much simpler operator to use to set default values
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

// Practicl example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// More easily done with AND (&&) operator
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


///////////////////////////////////////////////////////////////////
// REST PATTERN and Parameters
//
// 1) Destructuring
// The spread operator is always used on the right hand side of the assignment operator
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// The REST Pattern is always used on the left hand side of the assignment operator
// OTHERS contains the rest of the array elements after the first two
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//  The REST pattern now works with objects, too!
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 2, 7);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


///////////////////////////////////////////////////////////////////
// SPREAD OPERATOR
//
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps or sets, but NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


///////////////////////////////////////////////////////////////////
// Destructuring Objects
//  
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
console.log(a, b);

// Nested objects
// const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


///////////////////////////////////////////////////////////////////
// Destructuring Arrays
// 
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const C = arr[2];

// [x, y, z] is the destructuring assignment operator
// The original array has not changed
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// Desctucturing does not require all array values to be unpacked
// It is allowable to skip elements in teh array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;   // Hard way
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; // Easy way using array destructuring
console.log(main, secondary);

// How to receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
