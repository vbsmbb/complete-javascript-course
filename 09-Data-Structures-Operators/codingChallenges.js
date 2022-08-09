/*
//////////////////////////////////////////////////////////////////////////////////
//DATA STRUCTURES, MODERN OPERATORS and STRINGS
//////////////////////////////////////////////////////////////////////////////////

// CODING CHALLENGE #1
//

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// CODING CHALLENGE #1
//
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;
// const {odds: {team1, x: draw, team2}} = game   // This also works

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
};

console.log(players1);
console.log(players2);
console.log(gk);
console.log(fieldPlayers);
console.log(allPlayers);
console.log(players1Final);
console.log(team1, draw, team2);
printGoals('Davies', 'Muller', 'Lewindoski', 'Kimmich');
printGoals(...game.scored);
team1 < team2 && console.log('Team1 expected to win');
team2 < team1 && console.log('Team2 expected to win');


// CODING CHALLENGE #2
// 1.
const scores = game.scored.entries();
for (const [goal, player] of scores) {
  // console.log(`Goal ${goal}: player`);
  console.log(`Goal ${goal + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
console.log(odds);
let sum = 0;
for (const value of odds) {
  sum += value;
}
console.log(`Average odds: ${(sum / odds.length).toPrecision(3)}`);

// 3.
const oddsObj = Object.entries(game.odds);
console.log(oddsObj);
for (const [key, value] of oddsObj) {
  key !== 'x'
    ? console.log(`Odd of victory ${game[key]}: ${value}`)
    : console.log(`Odd of draw: ${value}`);
}

// 4.
const scorers = {};
const playersScored = Object.values(game.scored);
console.log(playersScored);
for (const player of playersScored) {
  scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
}
console.log(scorers);


//  CODING CHALLENGE #3
//
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);


console.log(gameEvents);

// 1.
// console.log(...gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${
    90 / gameEvents.size
  } minutes of the game`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${
    time / gameEvents.size
  } minutes of the game`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}


//  CODING CHALLENGE #4
//
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
const textArea = document.querySelector('textarea');

button.addEventListener('click', function () {
  const scoreList = textArea.value.split('\n');
  const ccList = [];
  for (const scoreWord of scoreList) {
    let [first, second] = scoreWord.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    ccList.push(output);
  }
  textArea.value = '';
  let maxLen = 0;
  for (const i of ccList) {
    if (i.length > maxLen) maxLen = i.length + 1;
  }
  for (const [i, row] of ccList.entries()) {
    textArea.value += `${row.padEnd(maxLen, ' ')}${'✅'.repeat(i + 1) + '\n'}`;
  }
});
*/
