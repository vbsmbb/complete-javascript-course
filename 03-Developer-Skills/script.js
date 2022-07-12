// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));


// Problem 1: Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that there can be sensor errors included in tehe data.

const temperatures = [3, -1, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understand the problem
// - What is temp amplitude? Answer: difference between highest and lowest temps in the array
// - How to compute the max and min temperatures
// - What is a sensor error? And what to do when one occurs?

// 2. Break problem into sub-problems
// - How to ignore errors
// - Find max value in temp array
// - Find min value in temp array
// - Calculate the amplitude: subtract min from max
// - Return the amplitude value

const calcTempAmplitude = function (temps) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? Answer: No. Just merge arrays at the beginning

// 2) Break problem into sub-problems
// - How to merge 2 arrays?

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // 3) Fix the bug
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // 2) Find the bug
  console.log(measurement);
  // console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1) Identify the bug
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/
