'use strict';

// Developer Skills and Editor Setup
/*
// 1) Understanding the problem
// - Array transformed to string separated by ...
// - WHere did the day numbers come from? Answer: Array index + 1

// 2) Breaking problem into sub-problems
// - Transform array into string
// - Transform each array element to string with °C trailing
// - String needs to contain daya (index + 1)
// - String must be bracketed by ...
*/

function printForecast(arr) {
  // Print a forecast for each arr of the array like:
  //    x°C in y days
  let fcStr = '... ';
  for (let i = 0; i < arr.length; i++) {
    fcStr += `${arr[i]}°C in ${i + 1} days ... `;
  }
  return fcStr;
}

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];
console.log(printForecast(temps1));
console.log(printForecast(temps2));
