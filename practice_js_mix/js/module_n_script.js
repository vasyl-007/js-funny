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
// function Car() {
//   this.make = "Lamborghini";
//   return { make: "Maserati" };
// }
// const myCar = new Car();
// console.log(myCar.make); // Maserati

// // Когда вы возвращаете свойство, значение свойства равно возвращаемому значению, а не значению, установленному в функции конструктора. Мы возвращаем строку "Maserati", поэтому myCar.make равно "Maserati".

// =================== test 54 =========================
// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

// // let a = b = 10;
// // let b = 20;
// // console.log('a', a)
// // console.log('b', b)

// =================== test 55 =========================
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Dog.prototype.bark = function () {
//   console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog("Mara");

// pet.bark();     // Woof I am Mara

// delete Dog.prototype.bark;

// pet.bark();     // TypeError

// =================== test 56 =========================
// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);  // {1, 2, 3, 4}

// =================== test 57 =========================

// let counter = 10;
// export default counter;

// // index.js
// import myCounter from "./counter";

// myCounter += 1;

// console.log(myCounter);

// // An imported module is read-only: you cannot modify the imported module. Only the module that exports them can change its value.

// =================== test 58 =========================
// const name = "Lydia";
// age = 21;

// console.log(delete name);   // fasle
// console.log(delete age);    // true

// =================== test 59 !!! =====================
// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y, z); // 1
// // деструктуризация!!! Точно так же, как const {value} = this.state
// // [a, b] = [1, 2];

// =================== test 60 ! =======================
// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);  // {admin: true, name: "Lydia", age: 21}

// ===================  ! test no name  Object.seal() ===============
// const object1 = {
//   property1: 42,
// };

// console.log(Object.isSealed(object1));     // fasle

// Object.seal(object1);

// console.log(Object.isSealed(object1));      // true

// Object.preventExtensions(empty);

// =================== test no name !!! копирование объекта ======================
// const obj1 = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };
// const obj2 = {...obj1};
// obj1.a = 10;
// obj1.c.y = 100;

// console.log('obj1', obj1)
// console.log('obj2', obj2)

// // ...spread делает поверхностную копию объекта

// =================== test 61 !!! =======================
// const person = { name: "Lydia" };

// Object.defineProperty(person, "age", { value: 21 });

// console.log(person);                // {name: "Lydia", age: 21}
// console.log(Object.keys(person));   // ["name"]
// // When we add a property to an object using the defineProperty method, they are by default not enumerable.

// =================== test 62 !!! =========================
// const settings = {
//   username: "lydiahallie",
//   level: 19,
//   health: 90,
// };

// const data = JSON.stringify(settings, ["level", "health"]);  // replacer
// console.log(data);  // {"level":19,"health":90}

// =================== test 63 ! =========================
// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = (number) => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);  // 10
// console.log(num2);  // 10

// =================== test 64 !!! =========================
// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();     // 20
// multiply();     // 20
// multiply(value);   // 20
// multiply(value);    // 40
// =================== test 65 !!! =========================
// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));

//     // 1 2
//     // undefined 3
//     // undefined 4

// //     Первым аргументом, который получает метод reduce, является аккумулятором, в данном случае x. Второй аргумент - это текущее значение, y. С помощью метода reduce мы выполняем функцию обратного вызова для каждого элемента в массиве, что в конечном итоге может привести к единственному значению.

// // В этом примере мы не возвращаем никаких значений, мы просто регистрируем значения аккумулятора и текущее значение.

// // Значение аккумулятора равно ранее возвращенному значению функции обратного вызова. Если вы не передадите необязательный аргумент initialValue методу reduce, аккумулятор будет равен первому элементу при первом вызове.

// // При первом вызове аккумулятор (x) равен 1, а текущее значение (y) равно 2. Мы не возвращаемся из функции обратного вызова, мы регистрируем аккумулятор и текущее значение: 1 и 2 регистрируются.

// // Если вы не возвращаете значение из функции, она возвращает значение undefined. При следующем вызове аккумулятор равен undefined, а текущее значение равно 3. undefined и 3 будут зарегистрированы.

// // При четвертом вызове мы снова не возвращаемся из функции обратного вызова. Аккумулятор снова равен undefined, а текущее значение равно 4. undefined и 4 будут зарегистрированы.

// =================== test 66 =========================
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

// class Labrador extends Dog {
//   // 1
//   constructor(name, size) {
//     this.size = size;
//   }
//   // 2                              Correct
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
//   // 3
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
//   // 4
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }

// };

// =================== test 67 =========================
// // index.js
// console.log("running index.js");
// import { sum } from "./sum.js";
// console.log(sum(1, 2));

// // sum.js
// console.log("running sum.js");
// export const sum = (a, b) => a + b;

//     // running sum.js, running index.js, 3

// =================== test 68 !!! =========================
// console.log(Number(2) === Number(2)); // true
// console.log(Boolean(false) === Boolean(false)); // true
// console.log(Symbol("foo") === Symbol("foo")); // false

// console.log(typeof Number); // function
// console.log(Number === Number); // true
// console.log(Object === Object); // true
// console.log(Array === Array); // true
// console.log(Symbol === Symbol); // true

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a === b); // false

// const fn1 = new Object();
// const fn2 = new Object();
// console.log(fn1 === fn2);       // false

// =================== test 69 =========================
// const name = "Lydia Hallie";
// console.log(name.padStart(13));
// console.log(name.padStart(2));

// const str1 = '5';

// console.log(str1.padStart(2, '0'));
// // expected output: "05"

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);
// // expected output: "************5581"

// =================== test 70 =========================
// console.log("🥑" + "💻");

// // 🥑💻

// =================== test 71 !!! функция-генератор =====================
// function* startGame() {
//   const answer = yield "Do you love JavaScript?";
//   if (answer !== "Yes") {
//     return "Oh wow... Guess we're gone here";
//   }
//   return "JavaScript loves you back ❤️";
// }

// const game = startGame();
// console.log(game.next().value); // Do you love JavaScript?
// console.log(game.next("Yes").value); // JavaScript loves you back ❤️

// // game.next().value;
// // game.next("Yes").value;
// // Функция генератора "приостанавливает" выполнение, когда видит ключевое слово yield. Во-первых, мы должны позволить функции выдать строку "Do you love JavaScript?", что можно сделать, вызвав game.next().value.

// // Каждая строка выполняется до тех пор, пока не найдет первое ключевое слово yield. В первой строке функции есть ключевое слово yield на первом месте: выполнение останавливается с первым выходом! Это означает, что переменная answer еще не определена!

// // Когда мы вызываем game.next("Yes").value, предыдущий yield заменяется значением параметров, переданных функции next(), в данном случае "Yes". Значение переменной answer теперь равно "Yes". Условие if возвращает false, а JavaScript loves you back ❤️, регистрируется.

// =================== test 72 =========================
// console.log(String.raw`Hello\nworld`);

// // Hello\nworld

// // String.raw возвращает строку, в которой экранированные символы (\n, \v, \t и т.д.) игнорируются! Обратная косая черта может быть проблемой, так как вы можете получить что-то вроде:

// // const path = `C:\Documents\Projects\table.html`

// // Что приведет к:

// // "C:DocumentsProjects able.html"

// // С String.raw он просто проигнорирует управляющий знак и напечатает:

// // C:\Documents\Projects\table.html

// // В этом случае строка Hello\nworld, которая и выводится.

// =================== test no name =========================
// const a = { "name": "Bob" };
// console.log("a: ", String(a));  // a: [object Object]

// const b = ["Firstname", "LastName"];
// console.log("typeof b", typeof b); // object

// const c = String(b);
// console.log("c: ", c); // c: Firstname,LastName
// console.log("typeof c:", typeof c); // typeof c: string

// console.log("b: ", String(b)); // a: [object Object]

// const age1 = "20";
// const age2 = "twenty";
// const ageNumber1 = console.log(Number(age1)); // 20
// const ageNumber2 = console.log(Number(age2)); // NaN

// console.log(typeof NaN); // number
// console.log(typeof null); // object

// const num0 = 0;
// const num1 = 1;

// console.log("Boolean(num0)", Boolean(num0));    // false
// console.log("Boolean(num1)", Boolean(num1));    // true

// const abc = true;
// console.log('String(abc)', String(abc));    // true as string

// const z = 12n;
// const y = NaN;
// // console.log('z: ', z);  // 12n
// // console.log(typeof z);  // bigint

// // console.log('String(z):', String(z))
// console.log('y:', String(y))

// =================== test Stack Overflow =========================

// const t = "hello world I am <name> and i live in this <country>";
// const t1 = t.replace("<name>", "Xanderous");
// const t2 = t1.replace("<country>", "India");
// console.log(t2);

// let name = "Xanderous";
// let country = "India";
// let extraInfo = "I love traveling!";
// const dynamicReplacedString = `hello world I am ${name} and i live in this ${country}. And ${extraInfo}`;
// console.log(dynamicReplacedString);

// let markupCreator;
// const payments = [mPaymentUI_value, tPaymentUI_value];
// function createMarkup(arr) {
//   arr.map((payment) => {
//     const markup = `
//         <li>
//         <p>${payment}$</p>
//         </li>
//         `;
//         // ...
//     markupCreator.insertAdjacentHTML("beforeend", markup);
//   });
// }
// createMarkup(payments);

// =================== test 73 ! =========================
// async function getData() {
//   return await Promise.resolve("I made it!");
// }

// const data = getData();
// const data2 = getData().then(res => console.log(res));  // "I made it!"
// console.log(data);      // promise

// // Асинхронная функция всегда возвращает обещание. await все еще должен ждать разрешения обещания: ожидаемое обещание возвращается, когда мы вызываем getData(), чтобы установить data равным ему.

// // Если бы мы хотели получить доступ к разрешенному значению "I made it", мы могли бы использовать метод .then() для data:

// // data.then(res => console.log(res))

// // Тогда это бы вывело "I made it!"

// =================== test 74 =========================
// function addToList(item, list) {
//   return list.push(item);
// }
// ​
// let result = addToList("apple", ["banana"]);
// console.log(result);    // 2
// // Метод .push() возвращает длину нового массива! Ранее массив содержал один элемент (строка "banana") и имел длину 1. После добавления в массив строки "apple", массив содержит два элемента и имеет длину 2. Это возвращается из функции addToList.

// // Метод push изменяет исходный массив. Если вы хотите вернуть массив из функции, а не длину массива, вы должны были вернуть list после добавления в нее item.

// =================== test 75 =========================
// const box = { x: 10, y: 20 };

// Object.freeze(box);
// console.log(Object.isFrozen(box));
// const shape = box;
// console.log(Object.isFrozen(shape));
// console.log('shape', shape)
// shape.x = 100;

// console.log(shape);     // TypeError Cannot assign to read only property

// =================== test 76 =========================
// let name;
// ({ name: "myName" } = { name: "Lydia" });

// // const [a, b] = [5, 10];
// // console.log("a, b", a, b);
// console.log(name);

// const { name: myName } = { name: "Lydia" };
// console.log(name);

// const [firstName, lastName] = "Petr Chaikovsky".split(" ");
// console.log("firstName", firstName);
// console.log("lastName", lastName);

// const fullName = ["Petr", "Chaikovsky"];
// const name = fullName[0];
// const surname  = fullName[1];
// console.log('name, surname', name, surname)

// let [a, b, c] = "456";
// console.log(a, b, c);
// let [one, two, three] = new Set([1, 2, 3]);
// console.log('one, two, three', one, two, three)

// let { height, width, title } = { title: "Menu", height: 200, width: 100 };
// console.log('height', height)

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let {width: w, height: h, title} = options;
// // width -> w
// // height -> h
// // title -> title

// console.log(title);  // Menu
// console.log(w);      // 100
// console.log(h);      // 200
// // console.log(width)  // RefErr

// const { name: myName } = { name: "Lydia" };

// console.log(myName);    // Lydia
// console.log(name);      // RefErr
// ===================================================
// let name;
// ({ name } = { name: "Lydia" });

// // const [a, b] = [5, 10];
// // console.log("a, b", a, b);
// console.log(name);      // Lidia

// =================== test 77 =========================
// function sum(a, b) {
//   return a + b;
// }
// // pure function

// =================== test pure function ! =====================
// // A: Простое умножение
// function doubleA(n) {
//   return n * 2;
// }
// // B: C переменной
// var two = 2;
// function doubleB(n) {
//   return n * two;
// }
// // C: С вспомогающей функцией
// function getTwo() {
//   return 2;
// }
// function doubleC(n) {
//   return n * getTwo();
// }
// // D: Преобразование массива
// function doubleD(arr) {
//   return arr.map((n) => n * 2);
// }

// =================== test 78 !!!!!!! запись в кэш =====================
// const add = () => {
//   const cache = {};
//   return (num) => {
//     if (num in cache) {
//       return `From cache! ${cache[num]}`;
//     } else {
//       const result = num + 10;
//       cache[num] = result;
//       return `Calculated! ${result}`;
//     }
//   };
// };

// const addFunction = add();
// console.log(addFunction(10));    // Calculated! 20
// console.log(addFunction(10));    // From cache! 20
// console.log(addFunction(5 * 2)); // From cache! 20

// =================== test 79 !!!!!!  for in vs for of =================
// const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

// for (let item in myLifeSummedUp) {
//   console.log(item);        // 0, 1, 2, 3
// }

// for (let item of myLifeSummedUp) {
//   console.log(item);        // "☕", "💻", "🍷", "🍫
// }

// const abc = ["one", "two", "three", "four"];

// for (let el in abc) {
//     console.log(el);
// }
// for (let el of abc) {
//     console.log(el);
// }
// console.log(Object.entries(abc));
// console.log(Object.keys(abc));
// console.log(Object.values(abc));

// const abcd = { 0: "one", 1: "two", 2: "three", 3: "four" };
// for (let el in abcd) {
//   console.log(el);
// }
// // for (let el of abcd) {
// //   console.log(el);          // FOR OF does not work with objects
// // }
// console.log(Object.entries(abcd));
// console.log(Object.keys(abcd));
// console.log(Object.values(abcd));

// =================== test 80 =========================
// const list = [1 + 2, 1 * 2, 1 / 2];
// console.log(list);                  // [3, 2, 0.5]

// =================== test 81 =========================
// function sayHi(name) {
//   return `Hi there, ${name}`;
// }

// console.log(sayHi());       // Hi there, undefined

// =================== test 82 this =========================
// var status = "😎";

// setTimeout(() => {
//   const status = "😍";

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());            // "🥑"
//   console.log(data.getStatus.call(this));   // "😎"
// }, 0);

// // Значение ключевого слова this зависит от того, где вы его используете. В методе, как и в методе getStatus, ключевое слово this ссылается на объект, которому принадлежит метод. Метод принадлежит объекту data, поэтому this относится к объекту data. Когда мы регистрируем this.status, регистрируется свойство status объекта data, которое является "🥑".

// // С помощью метода call мы можем изменить объект, на который ссылается ключевое слово this. В функциях ключевое слово this относится к объекту, которому принадлежит функция. Мы объявили функцию setTimeout для объекта global, поэтому в функции setTimeout ключевое слово this ссылается на объект global. В глобальном объекте есть переменная с именем status со значением "😎". При регистрации this.status выводится "😎".

// =================== test 83 ! =========================
// const person = {
//   name: "Lydia",
//   age: 21,
// };

// let city = person.city;
// // person.city = "London"
// city = "Amsterdam";

// console.log(person); // {name: "Lydia", age: 21}

// =================== test 84! scope of variable =========================
// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young.";
//   } else {
//     const message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log(checkAge(21)); // RefErr

// =================== test 85 ! =========================
// fetch("https://www.website.com/api/user/1")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// //   Результат коллбэка в предыдущем .then().

// =================== test 86 ! =========================
// function getName(name) {
//   const hasName = !!name;
//   console.log("hasName", hasName); // true
// }
// getName("Peter");

// console.log(typeof new Boolean("some")); // object

// =================== test 87! interesting and strange =============
// console.log("I want pizza"[0]);     // I

// =================== test 88! =========================
// function sum(num1, num2 = num1) {
//   console.log(num1 + num2);
// }

// sum(10);        // 20

// =================== test 89 !! =========================
// // module.js
// export default () => "Hello world";
// export const name = "Lydia";

// // index.js
// import * as data from "./module";

// console.log(data); // { default: function default(), name: "Lydia" }

// =================== test 90 =========================
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// function Person() {
//   this.name = name;
// }

// const member = new Person("John");
// console.log(typeof member); // object

// =================== test 91 ! =========================
// let newList = [1, 2, 3].push(4);
// // console.log(newList)
// console.log(newList.push(5));   // TypeError

// // Метод .push возвращает новую длину массива, а не сам массив! Устанавливая newList равным [1, 2, 3].push(4), мы устанавливаем newList равным новой длине массива: 4.

// // Затем мы пытаемся использовать метод .push для newList. Поскольку newList является числовым значением 4, мы не можем использовать метод .push: выдается ошибка TypeError.

// =================== test 92 =========================
// function giveLydiaPizza() {
//   return "Here is pizza!";
// }

// const giveLydiaChocolate = () =>
//   "Here's chocolate... now go hit the gym already.";

// console.log(giveLydiaPizza.prototype);      // {constructor: ƒ}
// console.log(giveLydiaChocolate.prototype);  // undefined
// // У стрелочных функций нет прототипа

// // Обычные функции, такие как функция giveLydiaPizza, имеют свойство prototype, которое является объектом (прототипом объекта) со свойством constructor. Однако функции со стрелками, такие как функция giveLydiaChocolate, не имеют этого свойства prototype. undefined возвращается при попытке доступа к свойству prototype с использованием giveLydiaChocolate.prototype.

// // function fn() {
// //   return null;
// // }
// // console.log(fn.prototype)
// // console.log(fn)

// =================== test 93 !!!! =========================
// const person = {
//   name: "Lydia",
//   age: 21,
// };

// for (const [x, y] of Object.entries(person)) {
//   console.log(x, y); // name Lydia age 21
// }
// console.log('Object.entries(person)', Object.keys(person)) // массив в массиве

// =================== test 94 =========================
// function getItems(fruitList, ...args, favoriteFruit) {
//   return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange"); // SytaxErros - rest is the last parameter

// =================== test 95 ! =========================
// function nums(a, b) {
//   if (a > b) console.log("a is bigger");
//   else console.log("b is bigger");
//   return;
//   a + b;
// }

// console.log(nums(4, 2));    // a is bigger undefined
// console.log(nums(1, 2));    // b is bigger undefined

// =================== test 96 !!! =========================
// class Person {
//   constructor() {
//     this.name = "Lydia";
//   }
// }

// Person = class AnotherPerson {      // присвоили классу Person другой класс
//   constructor() {
//     this.name = "Sarah";
//   }
// };

// const member = new Person();
// console.log(member.name);       // Sarah

// // Мы можем установить классы равными другим классам/конструкторам функций. В этом случае мы устанавливаем Person равным AnotherPerson. Свойство name этого конструктора - Sarah, поэтому свойство name для нового экземпляра класса Person member - это Sarah.

// =================== test 97 !!! Symbol =======================
// const info = {
//   [Symbol("a")]: "b",
// };

// console.log(info);              // {Symbol(a): "b"}
// console.log(Object.keys(info)); // []
// console.log(typeof Symbol("a")) // symbol

// // Symbol не является перечисляемый. Метод Object.keys возвращает все перечисляемые свойства ключа для объекта. Symbol не просматривается таким образом, и возвращается пустой массив. При регистрации всего объекта будут видны все свойства, даже не перечисляемые.

// // Это одно из многих качеств символа: помимо представления совершенно уникального значения (которое предотвращает случайное столкновение имен в объектах, например, при работе с 2 библиотеками, которые хотят добавить свойства к одному и тому же объекту), вы также можете "скрыть" свойства объектов таким образом (хотя и не полностью. Вы можете получить доступ к символам, используя метод Object.getOwnPropertySymbols()).

// =================== test 98 =========================
// const getList = ([x, ...y]) => [x, y];
// const getUser = (user) => { name: user.name, age: user.age };
// // const getUser = (user) => ({ name: user.name, age: user.age });

// const list = [1, 2, 3, 4];
// const user = { name: "Lydia", age: 21 };

// console.log(getList(list));     // [1, [2, 3, 4]]
// console.log(getUser(user));     // Error

// // if you want to return an object from an arrow function, you have to write it between parentheses, otherwise no value gets returned! The following function would have returned an object:

// // const getUser = user => ({ name: user.name, age: user.age })

// =================== test 99 =========================
// const name = "Lydia";

// console.log(name());    // TypeError: name is not a function

// // Переменная name содержит значение строки, которая не является функцией, поэтому не может вызываться.

// // Ошибки типа выдаются, когда значение не соответствует ожидаемому типу. JavaScript ожидал, что name будет функцией, так как мы пытаемся вызвать ее. Однако это была строка, поэтому выдается ошибка TypeError: name не является функцией!

// // Синтаксические ошибки генерируются, когда вы написали что-то, что не является допустимым JavaScript, например, когда вы написали слово return как retrun. ReferenceErrors генерируется, когда JavaScript не может найти ссылку на значение, к которому вы пытаетесь получить доступ.

// =================== test 100 =========================
// // 🎉✨ This is my 100th question! ✨🎉

// const output = `${[] && "Im"}possible!
// You should${"" && `n't`} see a therapist after so much JavaScript lol`;

// console.log('output:', output); // Impossible!
// // You should see a therapist after so much JavaScript lol

// // [] - истинное значение. С оператором && будет возвращено правое значение, если левое значение является истинным значением. В этом случае левое значение [] является истинным значением, поэтому возвращается 'Im'.

// // "" - ложное значение. Если левое значение ложно, ничего не возвращается. n't не возвращается.

// =================== test no name test =========================
// let iterable = "102";
// for (let value of iterable) {
//   console.log(value); // 1 0 2 (for of по строке)
// }

// let iterable2 = [102];
// for (let value of iterable2) {
//   console.log(value);   // 102
// }

// =================== !!!!! test no name test =========================
// const r = (function (x, f = () => x) {
//   var x;
//   var y = x;
//   x = 2;
//   return x + y + f();
// })(1);
// console.log(r);   // 4

// =================== test no name test =========================
// function calc(x) {
//   return x / 2;
// }
// const z = calc(calc(8));
// console.log('z', z)  // 2

// =================== test no name test =========================
// function f(a) {
//   var arr = [];
//   var i = 0;
//   while (i < a.length) {
//     if (a[i] % 2 === 0) {
//       arr.push(a[i]);
//     }
//     i++;
//   }
//   return arr;
// }
// var a = [3, 5, 2, 1, 4, 8];
// console.log(f(a)); // 2,4,8

// =================== test no name test =========================
// var x = 1,
//   y = 1,
//   z = 0;
// do {
//   z = x + y;
// } while (++x <= 1 && y++ >= 1);
// z += x + y;
// console.log("z", z); // z

// =================== test no name test =========================
// let a = 2;
// set();
// function set() {
//   a = 5;
// }
// console.log(a);   // 5

// =================== test no name test =========================
// let foo, exp;
// var abc = exp = foo = function(a){
//   return a * a;
// }
// console.log(abc(5));  // 25

// function foo2(a){
//   return a * a;
// }
// console.log(foo2(5)); // 25

// =================== test no name test =========================
// let y = false;
// let c = "dfdfvdfvdfd"
// let x = y || c && 1;
// console.log(x)    // 1

// let a = true;
// let b = a && 1;
// console.log(b);   // 1

// =================== test no name test =========================
// var map = new Map();
// console.log(typeof map) // object
// map.set(1, "hello").set(2, "world");
// console.log(map.get(1));   // hello
// console.log(map.has(3));  // false
// console.log("map", map); // {1 => "hello", 2 => "world"}

// const person = new Map();
// // console.log(typeof person)
// person.set("surname", "Chaikovsky").set("name", "Petr");
// console.log(person.get("surname"))

// =================== test no name test =========================
// const x = "01234".split("").slice(2, 4).reverse().pop();
// console.log(x); // 2

// const y = [1, 2, 3];
// console.log("y.pop()", y.pop()); // 3
// console.log("y", y); // 1, 2

// =================== test no name test =========================
// let c = 3,
//   d = 4,
//   a,
//   b;
// a = d;
// b = c;
// ++d;
// console.log(a * d + c);   // 23

// =================== test no name test =========================
// var a = [0, 1, 2, 3];
// var b = [];
// for (let i = 0; i <= a.length; i++) {
//   if (i == a[i]) {
//     b.push(i++);
//   }
// }
// console.log(b);   // [0, 2]

// =================== test 101 =========================
// const one = false || {} || null;
// const two = null || false || "";
// const three = [] || 0 || true;

// console.log(one, two, three);   // {} "" []

// =================== test 102 =========================
const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}

firstFunction();    // second   I have resolved!
secondFunction();   // I have resolved!   second

// =================== test 101 =========================
// =================== test 101 =========================
// =================== test 101 =========================
// =================== test 101 =========================
// =================== test 101 =========================
// =================== test 101 =========================
// =================== test 101 =========================
