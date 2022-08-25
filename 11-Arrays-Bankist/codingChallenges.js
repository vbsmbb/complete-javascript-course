'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CODING CHALLENGE #1
//

/*
// Data 1
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

// Data 2
// const julia = [9, 16, 6, 8, 3];
// const kate = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorr = dogsJulia.slice();
  dogsJuliaCorr.splice(0, 1);
  dogsJuliaCorr.splice(-2);
  console.log(`Julia's dogs ages (corrected ): ${dogsJuliaCorr}`);
  console.log(`Kate's dogs ages: ${dogsKate}`);

  const dogsAll = dogsJuliaCorr.concat(dogsKate);
  console.log(`All dogs ages: ${dogsAll}`);

  dogsAll.forEach(function (age, indx, _) {
    age >= 3
      ? console.log(
          `Dog number ${indx + 1} is an adult, and is ${age} years old`
        )
      : console.log(`Dog number ${indx + 1} is still a puppy 🐶`);
  });
};
checkDogs(julia, kate);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CODING CHALLENGE #2
//

// Dividing each element of the array by the length and summing the new ages also calculates the average
// This is more efficiently than summing all of the ages and then dividing by the array length
const calcAverageHumanAge = function (dogsAges) {
  const dogsHumanAges = dogsAges.map(dogAge =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );
  const dogsHumanAdults = dogsHumanAges.filter(
    dogHumanAge => dogHumanAge >= 18
  );
  console.log(dogsHumanAdults);
  return (
    // dogsHumanAdults.reduce(
    //   (dogSumHumanAge, dogHumanAge, index, arr) => dogSumHumanAge + dogHumanAge
    // ) / dogsHumanAdults.length // Old method
    dogsHumanAdults.reduce(
      (
        dogAvgHumanAge,
        dogHumanAge,
        _,
        arr // The index is not used
      ) => dogAvgHumanAge + dogHumanAge / arr.length, // More efficient method
      0
    )
  );
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CODING CHALLENGE #3
//

const calcAverageHumanAge = function (dogsAges) {
  return dogsAges
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(dogHumanAge => dogHumanAge >= 18)
    .reduce(
      (dogAvgHumanAge, dogHumanAge, _, arr) =>
        dogAvgHumanAge + dogHumanAge / arr.length,
      0
    );
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CODING CHALLENGE #4
//
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  // { weight: 9, curFood: 85, owners: ['Mike', 'Deb'] },
];

// Task #1
dogs.forEach(obj => {
  obj.recFood = Math.trunc(obj.weight ** 0.75 * 28);
  // const recFoodAmt = Math.trunc(obj.weight ** 0.75 * 28);
  // console.log(`Weight= $obj.{obj.wet} Recommended Food Amount= ${recFoodAmt}`);
  // obj.recFood = recFoodAmt;
});
console.log(dogs);

// Task #2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// if (dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1) {
//   console.log(`Sarah's dog is eating within the recommended range`);
// } else if (dog.curFood > dog.recFood) {
//   console.log(`Sarah's dog is eating too much`);
// } else {
//   console.log(`Sarah's dog is eating too little`);
// }
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// Task #3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(obj => obj.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(obj => obj.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// Task #4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// Task #5
// const eatsExactAmtRec = dogs.filter(obj => obj.recFood === obj.curFood);
// if (eatsExactAmtRec.length > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// Task #6
// const eatsOKAmt = dogs.filter(
//   dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
// );
// if (eatsOKAmt.length > 0) {
//   console.log(true);
// } else {
//   console.log();
// }
console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// Task #7
const eatsOKAmt = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(eatsOKAmt);

// Task #8
const dogsSorted = dogs
  .slice()
  .sort((curr, next) => curr.recFood - next.recFood);
console.log(dogsSorted);
*/
