'use strict';
/*
////////////////////////////////////////////////
// Coding Challenge #1
//

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} accelerated to ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} decelerated to ${this.speed}`);
};

const bmw = new Car('BMW', 120);
console.log(bmw);
const merc = new Car('Mercedes', 95);
console.log(merc);

bmw.accelerate();
bmw.brake();
merc.accelerate();
merc.accelerate();
merc.brake();


////////////////////////////////////////////////
// Coding Challenge #2
//

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} decelerated to ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedMph) {
    return (this.speed = speedMph * 1.6);
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);

ford.accelerate();
ford.accelerate();
ford.brake();
console.log(`${ford.make} speed is ${ford.speedUS} mph`);
ford.speedUS = 75;
console.log(`${ford.make} speed has been set to ${ford.speed} km/h`);


////////////////////////////////////////////////
// Coding Challenge #3
//
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} accelerated to ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} decelerated to ${this.speed} km/h`);
};

const EV = function (make, speed, currCharge) {
  Car.call(this, make, speed);
  this.currCharge = currCharge;
};

console.log(EV);

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.currCharge = chargeTo;
  console.log(`${this.make} has been charged to ${this.currCharge}%`);
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.currCharge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.currCharge}%`
  );
};

EV.prototype.constructor = EV;

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
console.log(EV.prototype.constructor);
*/

////////////////////////////////////////////////
// Coding Challenge #4
//

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} decelerated to ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedMph) {
    return (this.speed = speedMph * 1.6);
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} has been charged to ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} accelerated to ${this.speed} km/h with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().chargeBattery(90).brake().brake();
console.log(rivian.speedUS);
