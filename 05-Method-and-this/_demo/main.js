//1. การใช้งาน Object, CRUD (Create,Read,Update,Delete)
// Dot, Bracket

// 2. Loop for in with dynamics

const log = console.log;
log("Method and this keyword");

// ####################################
// ############# 1.
// ####################################

// Object === Collection of properties and method
// each record => called property
// each property => <key>:<value>

// some record => <key>:<FN>
// called method == ความสามารถของ Object
// const programmer = {
//   name: "Pavit",
//   age: 30,
//   dev: devWebsite,
//   meet: meeting,
//   emotion: feeling,
// };

// function devWebsite() {
//   console.log("I'm working");
// }
// function meeting() {
//   console.log("I'm meeting");
// }
// function feeling() {
//   console.log("I'm HYPE!!!!");
// }

// // property
// // Syntax <obj>.<key>
// log(programmer.name);
// log(programmer.age);

// // programmer.dev; // devWebsite
// // Syntax : <obj>.<method>()
// programmer.dev();
// programmer.dev();
// programmer.dev();
// programmer.meet();
// programmer.meet();
// programmer.meet();
// programmer.emotion();
// programmer.emotion();
// programmer.emotion();
// programmer.emotion();
// // เพื่ม method ให้ programmer 1 อย่าง และลองเรียกใช้งาน

// // ####################################
// // ############# 2. Alternative Syntax
// // ####################################

// const developer = {
//   name: "John",
//   age: 30,
//   dev: function () {
//     console.log("I'm working");
//   },
//   meet: () => console.log("I'm meeting"),

//   //   method shorthand
//   sleep() {
//     console.log("I'm sleeping");
//   },
//   //  sleep : () => console.log("I"m sleeping)
// };

// developer.dev();
// developer.meet();
// developer.sleep();

// Mini-lab
// สร้าง Object ของตัวเอง
// ระบุคุณสมบัติของตัวเองสัก 2-3 ข้อ
// ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)
// key : nameFunction
// key: anonymous FN
// key: arrowFN
// key : shorthand

function playSport(type) {
  console.log(`I'm playing ${type}`);
}

const badass = {
  name: "Billy",
  gender: "Male",
  //   sport:(sport) => console.log(`I'm playing ${sport}`),
  sport: playSport,
  game: "NBA2k",
  player: function player() {
    console.log("De'arron Fox");
  },
  eatHealthy: (menu) => console.log(`I'm eating ${menu} all the time`),
  dedication: () => console.log("I'm focus!!!"),
  dream() {
    console.log("Become the GOAT");
  },
};
badass.sport("Basketball");
badass.player();
badass.dedication();
badass.dream();
badass.eatHealthy("Chicken");

// // ####################################
// // ############# intro OOP
// // ####################################
//  OOP : Object Oriented Program

const car = {
  brand: "Tesla",
  model: "X",
  drive: () => console.log("Driving"),
  speed: 80,
  "auto pilot": () => console.log("Self Driving"),
};

console.log(car.brand, car.model);

// Caller.Method
car.drive();
car["auto pilot"]();

const calculator = {
  sum: (x, y) => x + y,
  minus: (x, y) => x - y,
};

let r1 = calculator.sum(5, 7);
let r2 = calculator.minus(7, 3);
console.log(r1, r2);

console.log(car.speed);
car.speed = calculator.sum(car.speed, 20);
console.log(car.speed);

// // ####################################
// // ############# 4. This Keyword
// // ####################################

function dev() {
  console.log(`This feature developed by ${this.name}`);
}

const programmer1 = {
  name: "John",
  develop: dev,
};

const programmer2 = {
  name: "Jane",
  develop: dev,
};

// A: this ถูก solve ตอนเรียกใช้ Method
// Caller.method => this == Caller == Object before the dot
programmer1.develop();
programmer2.develop();
