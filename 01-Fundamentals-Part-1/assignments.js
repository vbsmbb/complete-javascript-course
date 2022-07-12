/*
// JavaScript Fundamentals Part -- 1
//
// Values and Variables
const country = "USA";
const continent = "North America";
const population = 335;  // Millions of people
console.log("Country:", country);
console.log("Continent:", continent);
console.log("Population of the USA:", population);

// Data Types
const isIsland = false;
let language;
console.log("isIsland data type:", typeof isIsland);
console.log("population data type:", typeof population);
console.log("country data type:", typeof country);
console.log("language data type:", typeof language);

// let, const, and var
language = "english-US";
// isIsland = true;


// Basic Operators
const country = "USA";
const continent = "North America";
const population = 335; // Millions of people
const language = "English";
const halfPopulation = population / 2;
console.log(halfPopulation + 1);
const populationFinland = 6;
console.log(
  country +
    " is in " +
    continent +
    ", and it's " +
    population +
    " million people speak " +
    language
);


// Strings and Template Literals
const country = "USA";
const continent = "North America";
const population = 335; // Millions of people
const language = "English";
console.log(
  `${country} is in ${continent}, and it's ${population} million people speak ${language}`
);

// Taking Decisions: If / Else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}


// Type Conversion and Coercion
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);


// Equality Operators: == vs. ===
const numNeighbors = Number(
  prompt("How many neighbor countries does your country have?")
);
console.log(numNeighbors);
if (numNeighbors === 1) {
  console.log("Only 1 border?");
} else if (numNeighbors > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}


// Logical Operarors
const country = "USA";
const population = 335; // Millions of people
const language = "English";
isIsland = false;

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}


// The Switch Statement
const language = "haitian";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`Most number of native speakers!`);
    break;
  case "spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}


// The Conditional (Ternary) Operator
const country = "USA";
const population = 335; // Millions of people

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
*/

// JavaScript Fundamentals -- Part 2
//
// Functions
