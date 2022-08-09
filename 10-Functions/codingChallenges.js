'use strict';

//////////////////////////////////////////////////////////////
// A CLOSER LOOK AT FUNCTIONS
//////////////////////////////////////////////////////////////
//

//////////////////////////////////////////////////////////////
// CODING CHALLENGE #1
//

/*
// Simple Poll App
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};
console.log(poll);

poll.registerNewAnswer = function () {
  let question = `${this.question}\n${this.options.join(
    '\n'
  )}\n(Write option number)`;
  // let question = this.question + '\n';    // Much less efficient than the above statement
  // for (const option of this.options) {
  //   question += option + '\n';
  // }
  // question += '(Write option number)';
  const answer = Number(prompt(question));
  answer !== 'NaN' && answer >= 0 && answer <= 3 && poll.answers[answer]++;
  // if (answer !== 'NaN' && answer >= 0 && answer <= 3) {    // ABove is more efficient using short circuiting
  //   poll.answers[answer]++;
  // }
  this.displayResults();
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = 'array') {
  if (type === 'string') {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  } else if (type === 'array') {
    console.log(this.answers);
  } else {
    console.log(`Incorrect type: ${type}`);
  }
};

// console.log(poll.displayResults('string'));
const data1 = {
  answers: [5, 2, 3],
};
const data2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

const dispData = poll.displayResults;
dispData.call(data1);
dispData.call(data1, 'string');
dispData.call(data2);
dispData.call(data2, 'string');
dispData.call(data2, 'myString');

// This also works
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');


//////////////////////////////////////////////////////////////
// CODING CHALLENGE #2
//
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
