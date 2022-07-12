"use strict";

/*
// JavaScript Fundamentals - Part 2
//
//Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const resUSA = describeCountry("USA", 335, "Washington, DC");
console.log(resUSA);
const resFinland = describeCountry("Finland", 6, "Helsinki");
console.log(resFinland);
const resMexico = describeCountry("Mexico", 126, "Mexico City");
console.log(resMexico);


// Function Declarations vs. Expressions vs Arrow Functions
const populationUS = 335;
const populationChina = 1441;
const populationMexico = 132;

// Function Declaration
function percentageOfWorld1(population) {
  const pctg = (population / 7900) * 100;
  return pctg;
}

// Function Expression
const percentageOfWorld2 = function (population) {
  const pctg = (population / 7900) * 100;
  return pctg;
};

// Arrow Function
const percentageOfWorld3 = (population) => {
  const pctg = (population / 7900) * 100;
  return pctg;
};

let percentageOfWorldUS = percentageOfWorld1(populationUS);
let percentageOfWorldChina = percentageOfWorld1(populationChina);
let percentageOfWorldMexico = percentageOfWorld1(populationMexico);
console.log(
  percentageOfWorldUS,
  percentageOfWorldChina,
  percentageOfWorldMexico
);

percentageOfWorldUS = percentageOfWorld2(populationUS);
percentageOfWorldChina = percentageOfWorld2(populationChina);
percentageOfWorldMexico = percentageOfWorld2(populationMexico);
console.log(
  percentageOfWorldUS,
  percentageOfWorldChina,
  percentageOfWorldMexico
);

percentageOfWorldUS = percentageOfWorld3(populationUS);
percentageOfWorldChina = percentageOfWorld3(populationChina);
percentageOfWorldMexico = percentageOfWorld3(populationMexico);
console.log(
  percentageOfWorldUS,
  percentageOfWorldChina,
  percentageOfWorldMexico
);


// Functions Calling Other Functions
const populationUS = 335;
const populationChina = 1441;
const populationMexico = 132;

function percentageOfWorld(population) {
  const pctg = (population / 7900) * 100;
  return pctg;
}

function describePopulation(country, population) {
  const pctgOfWorld = percentageOfWorld(population);
  return `${country} has ${population} million people, which is about ${pctgOfWorld.toPrecision(
    3
  )}% of the world.`;
}

console.log(describePopulation("US", populationUS));
console.log(describePopulation("China", populationChina));
console.log(describePopulation("Mexico", populationMexico));


// Introduction to Arrays
function percentageOfWorld(population) {
  const pctg = (population / 7900) * 100;
  return pctg;
}

const populations = [335, 1441, 132, 6];
console.log(populations);
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
console.log(percentages);


// Basic Array Operations
const neighbors = ["Canada", "Mexico"];
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
if (!neighbors.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
const countryIndex = neighbors.indexOf("Mexico");
neighbors[countryIndex] = "Republic of Mexico";
console.log(neighbors);

// Introduction to Objects
const myCountry = {
  country: "USA",
  language: "english",
  capital: "Washington, D.C.",
  population: 335,
  neighbors: ["Canada", "Mexico"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length > 0 ? false : true;
    return this.isIsland;
  },
};
//
// Dot vs. Bracket Notation
// 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
// console.log(
//   `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}`
// )${this.population ${this.population + 2;
// console.log(
//   `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}`
// )${this["population"] ${this["population"] - 2;
// console.log(
//   `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}`
// );

// Object Methods
console.log(myCountry.describe());
console.log(myCountry.checkIsland());


// Iteration: The for Loop
for (let numVoter = 1; numVoter <= 50; numVoter++) {
  console.log(`Voter number ${numVoter} is now voting`);
}

// Looping Arrays, Breaking and Continuing
function percentageOfWorld(population) {
  const pctg = (population / 7900) * 100;
  return pctg;
}

const populations = [335, 1441, 132, 6];
// console.log(populations);
// console.log(populations.length === 4);
const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
const percentages2 = [];
console.log(percentages);

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld(populations[i]));
}
console.log(percentages2);


// Looping Backwards and Loops in Loops
const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
  }
}


// The While Loop
function percentageOfWorld(population) {
  const pctg = (population / 7900) * 100;
  return pctg;
}
const populations = [335, 1441, 132, 6];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld(populations[i]));
}
console.log(percentages2);

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld(populations[i]));
  i++;
}
console.log(percentages3);
*/
