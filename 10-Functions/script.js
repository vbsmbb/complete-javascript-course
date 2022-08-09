'use strict';

/*
//////////////////////////////////////////////////////
//DEFAULT PARAMETERS
//

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);


//////////////////////////////////////////////////////
// HOW PASSING OBJECTS WORKS
//

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked In');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


//////////////////////////////////////////////////////
// FUnctions Accepting Callback Functions
//

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed function: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks All The Time!
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


//////////////////////////////////////////////////////
// FUNCTIONS RETURNING FUNCTIONS
//

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('MikeS');

greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('How ya doin')('Joe Blow');


//////////////////////////////////////////////////////
// THE CALL and APPLY METHODS
//

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah WiCALL METHODlliams');

// CALL METHOD
book.call(euroWings, 23, 'Sarah Williams');

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swissAir = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swissAir, 583, 'Mary Cooper');

// APPLY METHOD
const flightData = [583, 'George Cooper'];
book.apply(swissAir, flightData);
console.log(swissAir);

//////////////////////////////////////////////////////
// THE BIND METHOD
//

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swissAir);

bookEW(23, 'Steven Williams');

// This booking method can ONLY be used for flight EW23
const bookEW23 = book.bind(euroWings, 23);
bookEW23('Charles Shelton');
bookEW23('Martha Cooper');
console.log(euroWings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// Without bindng lufthansa.buyPlanes, the 'this' keyword points to the button
// The 'this' keyword is SET dynamically
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));


//////////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIEF)
//

const runOnce = function () {
  console.log('This function will never run again!');
};
runOnce();

// Immediately Invoked Function Expression
(function () {
  console.log('This function will ALSO never run again!');
})();

// IIFE as an Arrow function
(() => console.log('This function will ALSO never run again!'))();


//////////////////////////////////////////////////////
// Closures
//

const secureBooking = function () {
  let passengerCount = 0; // This variable cannot be accessed for the global context

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// Check out the closure
console.dir(booker);


//////////////////////////////////////////////////////
// More Closure Examples
//

// Example #1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    // the functiion 'f' is redefined here
    console.log(b * 2);
  };
};

g(); // Environment that creates the function for f()
f(); // Gets the value for 'a' from the CLOSURE created for the function in the g() function's execution context

//  The f() function is reassigned by the fnction h()
h();
f(); // This is a different function from the first f() function. Gets the variable b value from the CLOSURE.

console.dir(f);

//  Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // The first parameter of setTimeout() is a callBack function (WHat to do after the timeout is complete),
  //  the second parameter is a wait time
  // The CLOSURE has priority over the scope chain
  setTimeout(function () {
    // The CLOSURE for this function provides the variables for the callBack function
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
console.log(perGroup);
boardPassengers(180, 3);
*/
