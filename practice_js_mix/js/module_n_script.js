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

// const sum = eval("10 * 10 + 5");
// console.log("sum", sum); // 105 as number

// =================== test 22 =========================
// easy
// =================== test 23 =========================

// var num = 8;
// var num = 10;

// console.log(num);  // 10

// =================== test 24 =========================

// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty("1"));   // true
// console.log(obj.hasOwnProperty(1));     // true
// console.log(set.has("1"));              // false
// console.log(set.has(1));                // true

// =================== no name test ====================

// const people = { live: true, eat: true, run: true };
// const european = Object.create(people);
// european.language = "english";

// const ukrainian = Object.create(european);
// ukrainian.language = "ukrainian";

// console.log("ukrainian", ukrainian);
// console.log(
//   "ukrainian.hasOwnProperty(\"language\")",
//   ukrainian.hasOwnProperty("language")
// );

// =================== test 25 =========================

// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj); // "three", "two"

// =================== test 26 =========================

// easy

// =================== test 27 =========================

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);   // 1, 2, 4
// }

// =================== test 28 =========================

// String.prototype.giveLydiaPizza = () => {
//   return "Just give Lydia pizza already!";
// };
// const name = "Lydia";
// console.log(name.giveLydiaPizza());
// console.log("name", name.giveLydiaPizza);   // Just give Lydia pizza already!

// // const hello = "hello";
// // console.log("hello.giveLydiaPizza()", hello.giveLydiaPizza());
// // console.log("hello.hasOwnProperty", hello.hasOwnProperty());

// =================== test 29 =========================

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[c]);
// // Ключи объекта автоматически конвертируются в строки. Мы собираемся добавить объект в качестве ключа к объекту a со значением 123.

// // Тем не менее, когда мы приводим объект к строке, он становится "[object Object]". Таким образом, мы говорим, что a["object Object"] = 123. Потом мы делаем то же самое. c это другой объект, который мы неявно приводим к строке. Поэтому a["object Object"] = 456.

// // Затем, когда мы выводим a[b], мы имеем в виду a["object Object"]. Мы только что установили туда значение 456, поэтому в результате получаем 456.

// =================== test 30 =========================

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// // First, Third, Second

// =================== test 31 =========================

// easy

// =================== test 32 =========================

// easy

// =================== test 33 !!! =========================

// const person = { name: "Vasyl" };

// function sayHi(property) {
//   return `${this.name} is ${property}`;
// }

// console.log(sayHi.call(person, "very smart"));  // Vasyl is very smart
// console.log(sayHi.bind(person, "very smart"));  // function (т.к. bind не выполняется сразу, а создается копия функции

// =================== test 34 =========================

// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());  // number

// =================== test no-name ====================

// // !(function () {
// //   console.log("Hello from IIFE!");
// // })();

// void (function () {
//   console.log("Hello from IIFE --- !");
// })();

// let id = Symbol("id");
// console.log(id.toString());
// console.log(id.description);

// =================== test 35 =========================

// console.log(Boolean(0));                // false
// console.log(Boolean(new Number(0)));    // true
// console.log(Boolean(""));               // false
// console.log(Boolean(new Boolean(false))); // true
// console.log(Boolean(undefined));        // false

// console.log(typeof new Number(0));      // object

// =================== test 36 =========================

// console.log(typeof Number)      // function
// console.log(typeof typeof 1);   // string
// console.log(typeof 1);          // number as string

// =================== test 37 =========================

// easy

// =================== test 38 !!! =====================

// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);     // 1
//   }
//   console.log(x);       // undefined
//   console.log(y);       // 2
// })();

// =================== test 39 =========================
// easy
// =================== no name =========================

// console.log("BigInt", BigInt);
// console.log(Number.MAX_SAFE_INTEGER);

// =================== test 40 !!! =====================

// console.log(
//   [
//     [0, 1],
//     [2, 3],
//   ].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2]
//   )
// );
// // [1, 2, 0, 1, 2, 3]

// =================== test 41 =========================

// !!null;     // false
// !!"";       // false
// !!1;        // true

// =================== test 42 =========================

// setInterval(() => console.log("Hi"), 1000);
// Вечный цикл - осторожно

// =================== test 43 =========================

// console.log([..."Lydia"])   // ["L", "y", "d", "i", "a"]

// =================== test 44 =========================

// function* generator(i) {
//   yield i;
//   yield i * 2;
// }

// const gen = generator(10);

// console.log(gen.next().value);      // 10
// console.log(gen.next().value);      // 20

// =================== test 45 !!! ======================
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));  // "two"

// // Когда мы передаем несколько промисов методу Promise.race, он разрешает/отклоняет первый промис, который разрешается/отклоняется. В метод setTimeout мы передаем таймер: 500 мс для первого промиса (firstPromise) и 100 мс для второго промиса (secondPromise). Это означает, что secondPromise разрешается первым со значением 'два'. res теперь содержит значение 'два', которое выводиться в консоль.

// =================== test 46 !!!  =====================

// let person = { name: "Lydia" };
// // const members = person;
// const members = [person];
// person = null;

// console.log(members);  // [{name: "Lydia"}]

// =================== test 47 !!! =====================
// const person = {
//   name: "Lydia",
//   age: 21,
// };

// for (const item in person) {
//   console.log(item); // name, age
// //   console.log(person[item]); // Lydia, 21
// }

// =================== test 48 =========================
// easy
// =================== test 49 =========================
// const num = parseInt("7*6", 10);
// console.log("num", num);        // 7

// // console.log(parseInt("7"*"6", 10));
// =================== test 50 ! =======================

// console.log([1, 2, 3].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// }))
//  // [undefined, undefined, undefined]

// =================== test 51 !!!!! very cool! =================

// function getInfo(member, year) {
//   member.name = "Lydia";
//   year = "1998";
// }

// const person = { name: "Sarah" };
// const birthYear = "1997";

// getInfo(person, birthYear);

// console.log(person, birthYear); // {name: "Lydia"} "1997"

// // Аргументы передаются значением, если их значение не является объектом, то они передаются ссылкой. birthYear передается по значению, поскольку это строка, а не объект. Когда мы передаем аргументы по значению, создается копия этого значения (см. вопрос 46).

// // Переменная birthYear имеет ссылку на значение "1997". Аргумент year также имеет ссылку на значение"1997", но это не то же самое значение, на которое имеется ссылка для birthYear. Когда мы обновляем значение year, устанавливая year равным "1998", мы обновляем только значение year. birthYear по-прежнему равно "1997".

// // Значение person является объектом. Аргумент member имеет (скопированную) ссылку на тот же объект. Когда мы изменяем свойство объекта, на который member ссылается, значение person также будет изменено, поскольку они оба имеют ссылку на один и тот же объект. Свойство name объекта person теперь равно значению "Lydia".

// =================== test no name =====================
// const obj = { color: "orange" };
// Object.freeze(obj);

// obj.color = "blue";  // TypeError: Cannot assign to read only property 'color' of object

// // const arr = [obj, 25]  // copy - is Ok

// console.log("obj", obj);
// console.log('arr', arr)

// =================== test no name ====================
// const obj = {};
// const fn = function () {};

// console.dir(fn);
// console.dir(obj);

// ================== test no name =====================
// class Hero {
//     constructor(name, xp) {
//         this.name = name;
//         this.xp = xp;
//     }
// }

// const mango = new Hero("Mango", 100);
// console.log("mango", mango);

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.coolprop = "cool prop";
// console.log(Hero.prototype);

// const mango = new Hero("Mango", 100);
// console.log("mango", mango);

// const numbers = [1, 2];

// console.log(numbers.find((el) => el === 3));

// =================== test 52 ! ========================
// function greeting() {
//   throw "Hello world!";
// }
// function sayHi() {
//   try {
//     const data = greeting();
//     console.log("It worked!", data);
//   } catch (e) {
//     console.log("Oh no an error:", e);
//   }
// }
// sayHi(); // Oh no an error: Hello world!

// =================== test 53 =========================
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}
const myCar = new Car();
console.log(myCar.make); // Maserati

// Когда вы возвращаете свойство, значение свойства равно возвращаемому значению, а не значению, установленному в функции конструктора. Мы возвращаем строку "Maserati", поэтому myCar.make равно "Maserati".

// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
// =================== test 52 =========================
