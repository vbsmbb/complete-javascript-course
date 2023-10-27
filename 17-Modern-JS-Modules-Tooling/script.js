// Importing Module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(`Total Quantity: ${totalQuantity} Total Price: ${totalPrice}`);
// console.log(ShoppingCart);

// Must use the new names space for all of the imported object now
// ShoppingCart.addToCart('bread', 5);
// console.log(`Total Price: ${ShoppingCart.totalPrice}`);

console.log('Importing Module');
// import * as ShoppingCart from './shoppingCart.js';
// import add, { totalPrice, totalQuantity, cart } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// console.log(totalQuantity, totalPrice);
//
console.log(cart);

// console.log('Start fetching');
// const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await posts.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await posts.json();
//   console.log(data);

//   return {
//     id: data.at(-1).id,
//     title: data.at(-1).title,
//     text: data.at(-1).body,
//   };
// };

// lastPost contains a Promise Here
// const lastPost = getLastPost();
// console.log(lastPost);

// Now you can see the actual data, but not very clean
// lastPost.then(last => console.log(last));

// Instead, do this
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// import cloneDeep from 'lodash-es';
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(state);
console.log(stateDeepClone);

// Only understood by parcel
if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

// Polyfilling for array methods and Promise
import 'core-js/stable';

// Polyfilling async functions
import 'regenerator-runtime/runtime';
