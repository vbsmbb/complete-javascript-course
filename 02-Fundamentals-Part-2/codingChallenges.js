"use strict";

/*
//JavaScript Fundamentals - Part 2
//

//Coding Challenge #1
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
console.log(calcAverage(3, 4, 5));
// Test 1
let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);
console.log(averageDolphins, averageKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   switch (avgDolphins > avgKoalas) {
//     case true:
//       if (avgDolphins >= avgKoalas * 2) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//       } else {
//         return `There was no winner`;
//       }
//       break;
//     case false:
//       if (avgKoalas >= avgDolphins * 2) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//       } else {
//         return `There was no winner`;
//       }
//       break;
//     default:
//       return `There is a problem with the averages`;
//   }
// };

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `There was no winner...`;
  }
};
console.log(checkWinner(averageDolphins, averageKoalas));

console.log(checkWinner(576, 111));

// Test 2
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
console.log(averageDolphins, averageKoalas);
console.log(checkWinner(averageDolphins, averageKoalas));


//  Coding Challenge #2
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// Coding Challenge #3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

mark.calcBmi();
john.calcBmi();
console.log(mark.bmi, john.bmi);

if (mark.calcBmi() > john.calcBmi()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else if (john.bmi() > mark.bmi()) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
}
*/

// Coding Challenge #4
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));

const calcAvg = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);
console.log(`The average total (bill + tip) was ${calcAvg(totals)}`);
