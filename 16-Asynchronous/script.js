'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, classname = '') {
  const html = `
  <article class="country ${classname}">
   <img class="country__img" src="${data.flag}" />
   <div class="country__data">
     <h3 class="country__name">${data.name}</h3>
     <h4 class="country__region">${data.region}</h4>
     <p class="country__row"><span>👫</span>${(
       +data.population / 1000000
     ).toFixed(1)}MM</p>
     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
   </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// // Old AJAX way to collect API data
// const getCountryAndNeighbor = function (country) {
//   // AJAX call for requested country data
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render requested country
//     renderCountry(data);

//     // Get neighbor country
//     const [neighbor] = data.borders;

//     if (!neighbor) return;

//     // AJAX call for requested country data
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       // Render neighbor country
//       renderCountry(data2);
//     });
//   });
// };

// getCountryAndNeighbor('usa');

// Fetch returns a promise immediately
// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);(
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);

    if (!response.ok) {
      throw new Error(`${errorMsg} [${response.status}]`);
    }

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Maincountry
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found! [${response.status}]`);
//       }

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;

//       // Neighboring country
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbor'))
//     .catch(err => {
//       console.error(`${err}: 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message} Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Maincountry
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found!')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) throw new Error('No neighbor found!');

//       // Neighboring country
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbor}`,
//         'Country not found!'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbor'))
//     .catch(Error => {
//       console.error(`${Error}: 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${Error.message} Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('usa');
// });

//////////////////////////////////////////////////////////////////////////////////////////
// The Event Loop in Practice
//////////////////////////////////////////////////////////////////////////////////////////
//
// Code outside of callbacks always runs first
// console.log('Test Start');
// setTimeout(() => console.log('0 second timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test End');
//

///////////////////////////////////////////////////////////////////////////////////////////
// Building a simple promise
///////////////////////////////////////////////////////////////////////////////////////////
//
// The passed function is called the "Executor function"
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is occurring now!');
//   // Now the function is truly asynchronous
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win! 🥇');
//     } else {
//       reject(new Error('You lost your money💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout()
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// // Execute the wait function
// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 second passed');
//   });

// // Create immediate resolve or reject promises
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject('xyz').catch(a => console.log(a));

///////////////////////////////////////////////////////////////////////////////////////////
// Proisifying the Geolocation API
///////////////////////////////////////////////////////////////////////////////////////////
//

// Promisifying the Navigator.Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // Navigator.Geolocation is a callback based API
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       // console.log(pos.coords);
//       // console.log(`lat: ${lat}  lng: ${lng}`);

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       // console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥💥💥`));
// };

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////////////////////////////////////////////////////////
// Consuming Promises with Async/Await
///////////////////////////////////////////////////////////////////////////////////////////
//

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse Geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     // console.log(data);
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(err);
//     renderError(`Something went wrong. 💥💥💥 ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1. Will get location');
// // const city = whereAmI();
// // console.log(city);
// // Mixing async/await with Promises
// // whereAmI()
// //   .then(city => console.log(city))
// //   .catch(err => console.error(`2. ${err.message} 💥`))
// //   .finally(() => console.log('3. Got location'));

// // Use an iffy to use async/await
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2. ${city}`);
//   } catch (err) {
//     console.error(`2. ${err.message} 💥💥💥`);
//   }
//   console.log(`3. Got location`);
// })();

// try {
//   let y = 1;
//   const x = 2;
//   y = x;
// } catch (err) {
//   alert(err.message);
// }

///////////////////////////////////////////////////////////////////////////////////////////
// Returning promises in Parallel
///////////////////////////////////////////////////////////////////////////////////////////
//

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // The promises are executed in sequence (synchronously)
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     // console.log([data1.capital, data2.capital, data3.capital]);

//     // Execute the three promises in parallel
//     // One rejected promise short circuits the data collection and all are rejeted
//     // Promise.all() is a combinator function: it runs all Promises at the same time
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(`${err.message} 💥`);
//   }
// };

// get3Countries('usa', 'portugal', 'mozambique');

///////////////////////////////////////////////////////////////////////////////////////////
// Other Promise Combinators: race, allSettled, any
///////////////////////////////////////////////////////////////////////////////////////////
//

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(0.5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err.message));

// Promise.allSettled
Promise.allSettled([
  // Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another succcess'),
]).then(res => console.log(res));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another succcess'),
  Promise.reject('ERROR #2'),
]).then(res => console.log(res));
