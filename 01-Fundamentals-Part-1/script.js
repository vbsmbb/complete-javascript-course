/*
// JavaScript Fundamentals -- Part 1
//
// Values and Variables
let js = "amazing";
console.log(40 + 8 + 23 - 10);

// The following are values: the smallest unit of information in JavaScript
console.log("Jonas");
console.log(23);

// firstName is a VARIABLE -- Jonas is the VALUE
let firstName = "MikeS";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3yrs = 3;


// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javascriptIsFun = "YES";
// console.log(typeof javascriptIsFun);

// let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// Value returned is object
// This is an error in JavaScript that is not fixed for legacy reasons
// console.log(typeof null);


// let, const, and var
let age = 30;
age = 31; // The value of age just mutated (was reassigned)

const birthyear = 1953; // birthyear is an immutable
// birthyear = 1954;variable

// const job;

var job = "programmer";
job = "teacher";

// lastName = "Shelton";
console.log(lastName);


// Basic Operators
//Math Operators
const now = 2022;
const ageMike = now - 1953;
const ageSarah = now - 2018;
console.log(ageMike, ageSarah);

console.log(ageMike * 2, ageMike / 2, 2 ** 3);

// Concatenation operator
const firstName = "Mike";
const lastName = "Shelton";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x + 10 = 25
x *= 4; // x * 4 = 100
x++; // Increment operator x = 101
x--; // Decrement operator x = 100
console.log(x);

// Comparison Operators (produce BOOLEAN values)
console.log(ageMike > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);


// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// Template literals available since ES6
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

// Old way to create multi-line strings
console.log("String with \n\
multiple \n\
lines");

// New way to create multi-line strings
console.log(`String with
multiple
lines`);



// Taking Decisions: If / Else Statements
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// Type Conversion and Coercion
// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");


// Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


// Equality Operators: == vs. ===
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log(`Cool! 23 is an amazing number`);
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");


// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}


// Switch Statement
const day = "monday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend :D`);
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the weekend :D`);
} else {
  console.log("Not a valid day!");
}


// Statements and Expressions
console.log(3 + 4 );  // Expression


// The Conditional (Ternary) Operator
const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine 🍷`)
//   : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);
console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);
*/

// JavaScript Fundamentals -- Part 2
//
// Activating Strict Mode
