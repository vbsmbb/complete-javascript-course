'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

  moves.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterBegin', html);
  });
};

const calcDisplayBalance = function (acct) {
  acct.balance = acct.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${acct.balance}€`;
};

const calcDisplaySummary = function (acct) {
  const incomes = acct.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outflows = acct.movements
    .filter(mov => mov < 0, 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outflows)}€`;

  const interest = acct.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acct.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accts) {
  accts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acct) {
  // Display movements
  displayMovements(acct.movements);

  // Display Balance
  calcDisplayBalance(acct);

  // Display Summary
  calcDisplaySummary(acct);
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form from submitting

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // Causes this field to lose focus

    updateUI(currentAccount);
  } else {
    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcct = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // Cleanup Fields
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    receiverAcct && // Required to disconnect if receiverAcct is undefined
    currentAccount.balance >= amount &&
    receiverAcct.username !== currentAccount.username // undefined !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcct.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount / 10)) {
    // Add the movement
    currentAccount.movements.push(amount);

    // Cleanup input field
    inputLoanAmount.value = '';

    // Update the UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //  Check credentials
  console.log(inputCloseUsername.value, inputClosePin.value);

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const currUserIndx = accounts.findIndex(
      acct => acct.username === currentAccount.username
    );
    // Delete Account
    accounts.splice(currUserIndx, 1);
    // Hide UI
    containerApp.style.opacity = 0;
    // Change welcome message
    labelWelcome.textContent = 'Log in to get started';
  } else {
    console.log(`Credentials invalid`);
  }
  // Clear input fields
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*

/////////////////////////////////////////////////
// SIMPLE ARRAY METHODS
//

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE METHOD (Mutates Original Array)
// console.log(arr.splice(2));
arr.splice(-1); // Removes the last element from the array
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE METHOD (Mutates Original Array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT METHOD
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN METHOD
console.log(letters.join(' - '));
console.log(letters.join());
console.log(letters.join(''));


/////////////////////////////////////////////////
// The new AT method
//

// AT METHOD
const arr = [23, 11, 64];

//Collect first elementCollect last element
console.log(arr[0]);
console.log(arr.at(0));

// Collect last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));


/////////////////////////////////////////////////
// LOOPING ARRAYS: forEach
//


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//  Without indexes
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH -----');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// With Indexes
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH -----');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
});


/////////////////////////////////////////////////
// FOREACH WITH MAPS AND SETS
//

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}   ---   ${map}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}   ---   ${set})}`);
});


/////////////////////////////////////////////////
// THE MAP METHOD
//

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Convert movements to US dollars
const eurToUsd = 1.1;

// MAP with function expression
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// MAP with Arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);


/////////////////////////////////////////////////
//THE FILTER METHOD
//

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


/////////////////////////////////////////////////
//THE REDUCE METHOD
//

console.log(movements);

const balance = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance);

// Collect Maximum Value of Movements
const maxMovement = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(maxMovement);


/////////////////////////////////////////////////
//THE MAGIC OF CHAINING METHODS
//

const eurToUsd = 1.1;
console.log(movements);
const depositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(depositsUSD);


/////////////////////////////////////////////////
//THE FIND METHOD
//


// Find only returns the first element which meets the condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let acc2;
for (const account of accounts) {
  if (account.owner === 'Sarah Smith') {
    acc2 = account;
    break;
  }
}
console.log(acc2);


/////////////////////////////////////////////////
// SOME AND EVERY
//

// EQUALITY
console.log(movements);
console.log(movements.includes(-130));

// SOME: SPECIFY A CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY:
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const depositsOnly = mov => mov > 0;
console.log(movements.some(depositsOnly));
console.log(movements.every(depositsOnly));
console.log(movements.filter(depositsOnly));


/////////////////////////////////////////////////
// FLAT AND FLATMAP
//

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const totalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalance);

// FLAT
const totalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance);

// FLATMAP
const totalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log(totalBalance2);


/////////////////////////////////////////////////
// SORTING ARRAYS
//

// STRINGS
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// NUMBERS
console.log(movements);
console.log(movements.sort());

// This compare function sorts from smallest to largest
// return < 0, A, B
// return > 0, B, A
// movements.sort((curr, next) => {
//   if (curr > next) return 1;
//   if (curr < next) return -1;
// });
movements.sort((curr, next) => curr - next);
console.log(movements);

// This compare function sorts from largest to smallest
// return < 0, Curr, Next
// return > 0, Next, Curr
// movements.sort((curr, next) => {
//   if (curr > next) return -1;
//   if (curr < next) return 1;
// });
movements.sort((curr, next) => next - curr);
console.log(movements);


/////////////////////////////////////////////////
// MORE WAYS TO CREATE AND FILL ARRAYS
//

// Methods already used
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

// x.fill(1);
x.fill(1, 3, 5);
x.fill(1);
console.log(`X= ${x}`);

arr.fill(23, 2, 6);
console.log(`Arr= ${arr}`);

// Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(`Y= ${y}`);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(`Z= ${z}`);

const movementsUI = document.querySelectorAll('.movements__value');
console.log(movementsUI);

labelBalance.addEventListener('click', function () {
  // The querySelectorAll() method returns a NodeList, NOT an array
  // Without the Array.from() static method the return from querySelector All is not an array
  // The mapping function is the second parameter of Array.from()
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')) // The mapping function for the new array
  );
  console.log(movementsUI);
});t


/////////////////////////////////////////////////
// ARRAY METHODS PRACTICE
//

// 1. How much has been deposited in TOTAL in the bank
const totalDeposits = accounts
  .flatMap(acct => acct.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposits);

// 2. How many deposits of at least 1000 euros
let numLargeDeposits = accounts
  .flatMap(acct => acct.movements)
  .filter(mov => mov >= 1000).length;
console.log(numLargeDeposits);
//  Alternate Method
numLargeDeposits = accounts
  .flatMap(acct => acct.movements)
  .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);
console.log(numLargeDeposits);

// 3. Create an object which constains the sum of the deposits and the sum of the withdrawals
const sums = accounts
  .flatMap(acct => acct.movements)
  .reduce(
    (sum, cur) => {
      cur > 0 ? (sum.deposits += cur) : (sum.withdrawals += cur);
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);
// Alternate method
const { deposits, withdrawals } = accounts
  .flatMap(acct => acct.movements)
  .reduce(
    (sum, cur) => {
      sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4. Convert string to title case
// this is a nice title ==> This Is a Nice Title
const convertTitleCase = function (title) {
  const exceptions = [
    'a',
    'an',
    'and',
    'the',
    'but',
    'or',
    'nor',
    'on',
    'in',
    'with',
    'to',
    'as',
  ];
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/
