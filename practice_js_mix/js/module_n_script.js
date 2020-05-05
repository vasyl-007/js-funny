"use strict";
// ================= test 1 ==================
// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Lydia";
//   let age = 21;
// }

// sayHi();

// console.log("a", a);
// let a = 5;
// console.log("a", a);
// console.log("a", a);
// var a = 5;
// console.log("a", a);

// function getDate() {
//   var date = new Date().toLocaleDateString();
//   console.log("date", date);
//     return date;
// }
// getDate();
// console.log("date", date);

// ============================================
// function discountPrices(prices, discount) {
//   const discountedPrices = [];

//   for (let i = 0; i < prices.length; i++) {
//     var discountForSomeGood = Math.round(
//       (prices[i] * (1 - discount) * 100) / 100
//     );
//     discountedPrices.push(discountForSomeGood);
//   }
//   console.log("discountForSomeGood", discountForSomeGood);
//   return discountedPrices;
// }
// const res = discountPrices([90, 50, 100, 36], 0.25);
// console.log("res", res);
// // res(4)[(68, 38, 75, 27)];
// ==================== test 2 =======================

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// // 3 3 3
// for (let k = 0; k < 3; k++) {
//   setTimeout(() => console.log(k), 1);
// }
// // 0 1 2
// =================== test 3 =========================
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); // NaN

// =================== test 4 =========================
// console.log(+true);     // 1
// console.log(!"Lydia");  // fasle
// =================== test 5 =========================

// =================== test 6 =========================
// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);  // Hello

// =================== test 7 =========================
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b); // true
// console.log(a === b); // false
// console.log(b === c); // false
// console.log(typeof b); // object

// =================== test 8 =========================
// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }
// }
// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));             // TypeError

// =================== test 9 =========================

// let greeting;
// greeting = {}; // Typo!
// console.log(greeting); // {}

// =================== test 10 ========================

// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";
// console.log('bark.animal', bark.animal)
// // можем так записать, т.к. функция в JS - это тоже объект

// =================== test 11 =========================

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   //   this.getFullName = function () {
//   //     return `${this.firstName} ${this.lastName}`;
//   //   };
// }

// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// // Person.prototype.getFullName = function () {
// //   return `${this.firstName} ${this.lastName}`;
// // };
// const member = new Person("Lydia", "Hallie");
// console.log(member.getFullName()); // TypeError: member.getFullName is not a function

// // console.log('member', member)
// =================== test 12 =========================

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);  // Person {firstName: "Lydia", lastName: "Hallie"}
// console.log(sarah);  // Cannot set property 'firstName' of undefined

// =================== test 13 =========================

// Capturing > Target > Bubbling;

// =================== test 14 =========================

// All object have prototypes.
// false

// у всех, кроме базового Объекта, есть прототип (базовый - это Объект на высшем уровне)

// =================== test 15 =========================

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, "2")); // 12

// =================== test 16 =========================

// let number = 0;
// console.log(number++); // 0
// console.log(++number); // 2
// console.log(number); // 2

// =================== test 17 =========================

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// console.log(getPersonInfo`${person} is ${age} years old`);
// // ["", " is ", " years old"] "Lydia" 21
// // При использовании тегированных шаблонных литералов первым аргументом всегда будет массив строковых значений. Оставшимися аргументами будут значения переданных выражений!

// =================== test 18 =========================

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// console.log(checkAge({ age: 18 })); // Hmm.. You don't have an age I guess

// =================== test 19 =========================

// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);  // object т.к. псевдомассив - это объект

// =================== test 20 =========================

// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }

// console.log(getAge());  // ReferenceError: age is not defined

// =================== test 21 =========================



// =================== test 15 =========================
// =================== test 15 =========================
// =================== test 15 =========================
// =================== test 15 =========================
// =================== test 15 =========================
// =================== test 15 =========================
// =================== test 15 =========================
// =================== test 15 =========================
