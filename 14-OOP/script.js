'use strict';

/*
////////////////////////////////////////////////
// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
//

const Person = function (firstName, birthYear) {
  // Properties for the new object (Instance properties)
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Methods of the new object
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);


////////////////////////////////////////////////
// PROTYPES
//

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.__proto__);

Person.prototype.species = 'Homo Sapien';

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


////////////////////////////////////////////////
// PROTYPAL INHERITANCE AND THE PROTOTYPE CHAIN
//

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 3, 8, 7, 5, 4, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// Added a new method to the Array prototype
// This is NOT an accepted practice
// Do not add methods directly to built-in objects as a best practice
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
console.log(arr.__proto__);

////////////////////////////////////////////////
// PROTYPAL INHERITANCE ON BUILT-IN OBJECTS
//

const h1 = document.querySelector('h1');
console.log(h1);
console.dir(h1);

console.log(h1.__proto__);
console.log(h1.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);

console.dir(x => x + 1);


////////////////////////////////////////////////
// ES6 CLASSES
//

// Class expression
// const PersonCl = class {};


// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to the class' prototype object
  calcAge() {
    console.log(`${this.firstName} is ${2037 - this.birthYear} years old`);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  static hey() {
    console.log(`Hey there!`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// The full name is not created withput a full name
// const walter = new PersonCl('Walter', 1965);
// Now this works as expected
const walter = new PersonCl('Walter White', 1965);
console.log(walter);


////////////////////////////////////////////////
// SETTERS AND GETTERS
//

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(
  `${
    account.owner[0].toUpperCase() + account.owner.slice(1).toString()
  }'s last movement was: ${account.latest} euros`
);
account.latest = -150;
console.log(
  `${
    account.owner[0].toUpperCase() + account.owner.slice(1).toString()
  }'s last movement was: ${account.latest} euros`
);

console.log(jessica.age);
jessica.fullName = 'Jessica Davis';
console.log(jessica.fullName);


////////////////////////////////////////////////
// STATIC METHODS
//

// Use this method for objects
// PersonCl.hey = function () {
//   console.log('Hey there!');
//   console.log(this);
// };
PersonCl.hey();
// the follwoing returns an error because hey() is a static function!
// jessica.hey();


////////////////////////////////////////////////
// Object.create() Classes
//

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// At this point steven has no properties, but it has a prototype with the calcAge() function
const steven = Object.create(PersonProto);
console.log(steven);
steven.calcAge();
steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah);
sarah.calcAge();


/////////////////////////////////////////////////////
// INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTIONS
//

const Person = function (firstName, birthYear) {
  // Properties for the new object (Instance properties)
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Methods for the instances to use
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // Inherit from Person
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Student now inherits from Person.prototype
Student.prototype = Object.create(Person.prototype);

// Student.prototype creates its own methods too
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


/////////////////////////////////////////////////////
// INHERITANCE BETWEEN CLASSES: ES6 FUNCTIONS
//

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to the class' prototype object
  calcAge() {
    console.log(`${this.fullName} is ${2037 - this.birthYear} years old`);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  static hey() {
    console.log(`Hey there!`);
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Alway needs to happen first. It sets the 'this' keyword.
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Override a parent class method
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();


/////////////////////////////////////////////////////
// INHERITANCE BETWEEN CLASSES: Object.create()
//

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
console.log(StudentProto);

const jay = Object.create(StudentProto);
console.log(jay);

jay.init('Jay', 2010, 'Computer Science');

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
jay.introduce();
jay.calcAge();


/////////////////////////////////////////////////////
// ANOTHER CLASS EXAMPLE
//

// 1) Public Fields
// 2) Private Fields
// 3) Public Methods4) Private Methods
// 4) Private Methods

class Account {
  // 1) Public Fields
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  // The Public interface of our object (API)
  // 3) Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  // This method should only be used internally
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  // 4) Private Methods
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log(`I am a helper method!`);
  }
}

const acc1 = new Account('Jason', 'EUR', 1111);
console.log(acc1);

// Creates a debit
// acc1.movements.push(250);
// Creates a credit
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

// console.log(acc1.#movements);

Account.helper();

/////////////////////////////////////////////////////
// CHAINING METHODS
//
acc1
  .deposit(300)
  .deposit(500)
  .withdrawal(35)
  .requestLoan(25000)
  .withdrawal(4000);
console.log(acc1.getMovements());
*/

/////////////////////////////////////////////////////
// ES6 CLASSES SUMMARY
//
