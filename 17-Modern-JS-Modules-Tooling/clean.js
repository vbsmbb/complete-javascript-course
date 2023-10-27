const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// Object.freeze() makes the Object immutable
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// As originally written, this function creates a side effect. It mutates an object outside of the function.
// As originally written, this is an impure function.
// Object.freeze() does not allow object mutations
// After the updates, the function is now a pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // as originally written, Mutates the parameter named user
  const cleanUser = user.toLowerCase();
  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  // const limit = getLimit(user);

  // if (value <= getLimit(cleanUser)c)
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  //   budget.push({ value: -value, description, user: cleanUser }); // Causes the object mutation
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
console.log(newBudget2);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);
// console.log(budget);

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (const entry of budget) {
//   //   // let lim;
//   //   // if (spendingLimits[entry.user]) {
//   //   //   lim = spendingLimits[entry.user];
//   //   // } else {
//   //   //   lim = 0;
//   //   // }
//   //   // const limit = getLimit(entry.user);

//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
//   // }
// };

// The checkExpenses function converted to an arrow function.result
// The arrow function is simpler and still creates the same
// It is still a pure function.
// Map does not mutate the state object. It returns a new object with the specified changes.
const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);
// console.log(budget);

// This is not a pure function
// The output variable is mutated, multiple times, by the for-loop
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  // This log command makes this function an impure function
  // The log command creates a side effect, something happens outside the function.
  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)}  / ` : ''; // Emojis are 2 chars
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

console.log(budget);
logBigExpenses(finalBudget, 500);
