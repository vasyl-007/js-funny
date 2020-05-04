// console.log("first function");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(console.log("Our promise resolved!!!"));
//   }, 2000);
// });
// console.log("second function");
// ==========================
// const promise = new Promise ((resolse, reject) => {});
// console.log(promise)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 2000);
// });

// console.log("before");

// promise.then(message => {
//   console.log(message);
// });

// // console.log(promise);
// console.log("after");

//===================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.7;

//     if (success) {
//       resolve("Promise resolved!");
//     } else {
//       reject("Promise rejected!");
//     }
//   }, 1000);
// });

// console.log("before");

// // promise.then(
// //   message => {
// //     console.log(message);
// //   },
// //   error => {
// //     console.error(`Error - ${error}`);
// //   }
// // );
// // =========================================
// const onSuccess = message => {
//   console.log(message);
// };
// const onError = error => {
//   console.error(`Error - ${error}`);
// };
// // promise.then(onSuccess, onError);
// // =========================================
// promise.then(onSuccess).catch(onError);

// console.log("after");

// setTimeout(() => {}, 1000)
// =========================================
// =========================================

// https://swapi.co/api/planets

// fetch("https://swapi.co/api/planets")
//   .then(response => response.json())
//   .then(data => console.log(data.results))
//   .catch(error => console.error(`Intentional error - ${error}`))

// fetch("http://www.tvmaze.com/api/seasons/:id/episodes")
// fetch("http://www.tvmaze.com/shows/23542/good-girls")
// fetch("http://api.tvmaze.com/schedule/full")

// fetch("http://api.tvmaze.com/search/shows?q=girls")
//   .then(response => response.json())
//   //   .then(data => console.log(data))
//   .then(data => console.log(data))
//   .then(data => {
//       data.map(el => console.log(el))
//   }

//   //   console.log(data.name)
// // =========================================
// let arr;
// function seachFilms(query = "batman") {
//   return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
//     .then(response => response.json())
//     .then(res => {
//       res.map(el => console.log(el.show.name));
//     })
//     .catch(error => console.log(error));
// }
// function showData(films) {
//   const arr = films;
//   console.log(arr);
// }
// function loadContent() {
//   seachFilms().then(showData);
// }
// loadContent();
// // =========================================

// .then(res => {
//       // res.map(el => console.log(el.show.name));
//       console.log(res);
//       arr = res;
// // =========================================

// setTimeout(()=> {console.log(searchFilm())}, 1000)
// console.log(searchFilm())

// // =========================================
// let arrOfFilms;
// const findFilms = async(query='batman') => {
//     try {
//     const response = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`);
//     const arrOfFilms = await response.json();
//     console.log(arrOfFilms)
//     }
//     catch(error){
//         console.log(`Some error - ${error}!!!`)
//     }
// }
// findFilms('girls')
// // http://api.tvmaze.com/search/shows?q=

//=============================================

// setTimeout(() => {
//   console.log(arr);
// }, 1000);

// // =========================================

// const allMovies = async () => {
//   const response = await fetch("http://api.tvmaze.com/search/shows?q=girls");
//   const movies = response.json();
//   console.log(movies);
//   return movies;
// };

// =========================================

//   const yourPlanets = async() => {
//       const planets = await fetch("https://swapi.co/api/planets").json();
//       console.log(planets)
//       console.log(yourPlanets)
//     //   .then(response => response.json())
//     //   .then(data => console.log(data.results))
//   }

// let a = [1, 2, 3, 4]
// for (let i=0; i<a.length; i++) {
//     setTimeout(() => {
//        console.log((i))
//     }, 0);
// }
// =========================================

// let arr;
// const serchFilmAsyncAwait = async (query = "batman") => {
//   try {
//     const response = await fetch(
//       `http://api.tvmaze.com/search/shows?q=${query}`
//     );
//     const arrFilms = await response.json();
//     // console.log(arrFilms);
//     arr = arrFilms;
//   } catch (err) {
//     console.log(err);
//   }
// };
// serchFilmAsyncAwait("superman");
//==========================================
// let arr;
// function searchFilm(query = "batman") {
//   return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// }
// function showData(films) {
//     arr = films;
//     console.log(arr);
// }
// function loadContent(){
//     searchFilm().then(showData);
// }
// loadContent()
// // =========================================

// const a = [1, 4, 5, 2, 34, 53];
// const arr = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < 5) {
//     arr.push(i);
//   }
// }
// console.log(arr);
// // =========================================
// const arr = [1, 3, 4, 4, 3, 5, 2, 34, 34, 53];
// const newArr = [1, 4];
// arr.forEach(el => !newArr.includes(el) ? newArr.push(el) : false);

// console.log(arr.filter(el => el === 2 + 1));

// // =========================================

// const numbers = [1, 23, 45, 22, 33, 84, 5];

// // const summ = numbers.reduce((acc, value) => acc + value, 0);
// const summ = numbers.reduce((previousValue, value) => previousValue + value);
// const summ = numbers.reduce((previousValue, value) => console.log(previousValue));
// // console.log(previousValue)

// console.log(summ);
// // =========================================
// const users = [
// {name: 'Mango'}
// ]

// const numbers = [1, 2, 100, 3, 4, 5];
// console.log(numbers.sort());
// console.log(numbers.sort((a, b) =>  a - b));
// console.log(numbers.sort((a, b) =>  a - b));
// // // =========================================
// // Lexical Environment
// // =========================================

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }
// let counterFirst = makeCounter();
// let counterSecond = makeCounter();
// let counterThird = makeCounter();

// // console.log(counterFirst());
// // console.log(counterFirst());

// // console.log(counterSecond());
// // console.log(counterSecond());
// // console.log(counterSecond());
// // console.log(counterSecond());

// console.log(counterThird());
// console.log(counterThird());
// // // // =========================================
// let name1 = "Jonny Bootcamp 17";

// function sayHi() {
//   console.log("Hi, " + name1);
// }

// name1 = "Peter";
// sayHi();

// // =========================================

// function studentBC17() {

//     return function() {
//         console.log(name);
//     };
// }

// let name = "Pythagoras";
// name = "Archimedes";

// // create a function
// const study = studentBC17();

// // call the function
// study(); // что будет показано? "Pythagoras" (из места создания) или "Archimedes" (из места выполнения)
// // // =========================================

// import { name, title } from "./module11_script_copy.js";
// // console.log(name)
// // console.log(title)
// // name = "Archimedes";
// // title = "Greek philosopher";

// function greetings(a, b) {
//   function getDescriptions() {
//     return name + " " + title;
//   }

//   name = "Archimedes";
//   title = "Greek philosopher";
//   console.log("Hello, " + getDescriptions());
//   console.log("Bye, " + getDescriptions());
// }
// // console.log(name)
// // console.log(title)
// console.log(greetings(name, title));
// // =========================================

// // Лексическое окружение в циклах
// for (let i = 0; i < 10; i++) {
//   // У каждого цикла своё собственное лексическое окружение
//   // {i: value}
// }
// console.log(i);
// // // =========================================
// function f(a, b) {
//   const value1 = 123;
//   const value2 = 456;
//   return value1 + value2;
// }
// console.log(f(value1, value2));
// // // =========================================

// function f() {
//   let value = Math.random();
// //   console.log(value);

//   return function() {
//     console.log(value);
//   };
// }
// // console.log(f());
// // три функции в массиве, каждая из них ссылается на лексическое окружение
// // из соответствующего вызова f()
// function f2() {
//   return f() + f() + f();
// }
// console.log(f2());
// // // =========================================

// function foo(...args) {
//     console.log(args) // получим полноценный массив
//     console.log(arguments) // получим псевдомассив
//     console.log([...arguments]) // получим полноценный массив
//     let arr = Array.from(args)
//     // console.log(arr)
// }
// foo(1, 2, 3, 4, 5)
// // // =========================================
// const foo = (...args) => args.reduce((acc, el) => acc + el, 0)
// console.log(foo(1, 2, 3))
// // // =========================================

// x = 10;
// x = 15;
// console.log(x)
// // // =========================================

// let a = 5;
// let b = 10;
// // a = b++;
// a = ++b;
// console.log(a, b)
//===================================
// debugger
// let x = 15;
// let y = ++x;
// console.log(x) // 16
// console.log(y) // 16
// console.log(--x); // 15
//===================================
// debugger
// let x = 2;
// let y = 3;
// console.log(++x % y--) // 0
//===================================
// console.log('5а1бабагаламага'.indexOf('1'));       // вертає 2
// console.log('456абабагаламага'.lastIndexOf('а'));   // вертає 15

// console.log('абабагаламага'.indexOf('баба'));     // вертає 1
// console.log('абабагаламага'.lastIndexOf('баба')); // вертає 1
//===================================
// const foo = (a, b) => a + b;

// const bar = (a, b) => a - b;
// const sum = (a, b, foo) => foo (a, b);
// console.log(sum(90, -9, bar));

// console.log(foo());
//===================================

// ========== BIND, CALL, APPLY ===========
// const person = {
//     name: 'Peter',
//     age: 25,
//     sayHello: function(job, phone){
//         console.group(`${this.name} info:`);
//         console.log(`My name is ${this.name}`);
//         console.log(`I am ${this.age} years old`);
//         console.log(`profession: ${job}`);
//         console.log(`phone: ${phone}`);
//         console.groupEnd()
//     }
// }
// // person.sayHello('fullstack', 'hidden')

// const girl = {
//     name: 'Maria',
//     age: 26
// }
// // const fnMariaInfo = person.sayHello.bind(girl)() // можем вызвать функцию, когда будет нужно
// // const fnMariaInfo = person.sayHello.bind(girl, 'frontend', '+1-124-99-45-123')()

// // person.sayHello.call(girl, 'frontend', '+1-124-99-45-123')
// // // сразу вызывает функцию

// // person.sayHello.apply(girl, ['frontend', '+1-124-99-45-123'])
// // // сразу вызывает функцию + аргументы передаются в [МАССИВЕ]
//===================================

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [11, 12, 13];

// function multBy(arr, n) {
//   return arr.map(i => i * n);
// }
// console.log(multBy(arr, 5));

// // перепишем этот же функционал через прототип массива (ниже):
// Array.prototype.multBy = function(n) {
//   return this.map(i => i * n);
// };
// console.log(arr.multBy(10));
// console.log(arr2.multBy(10));
//===================================
// let a = 1;
// console.log(++a)
// let b = ++a;
// console.log(a)
// console.log(b);
//===================================
// console.log(25 ** 2 === 25 * 25); // 25^2 (в степени)
// console.log(2**-2); // -4
// console.log("2" * "-2"); // -4 (умножение)
// console.log("8" / "4"); // 2 (деление)
// console.log("2" + "-2"); // 2-2 (конкатениция)
//===================================
// let x = 9;
// let y = 7;
// if (x > y) {
//   x++;
// } else {
//   y++;
// }
// console.log(x % y); //3
//===================================
// let person = {name: 'Alex', age: 15};
// console.log(person['name'].length + person['age']) // 19;
// console.log(person.name.length + person.age) // 19;
//===================================
// let i;
// function calc(i) {
//   return i * i;
// }
// for (i = 0; i < 3; i++) {}
// console.log(calc(i)); // 9 (когда i===3, і выйдет из цикла for))
//===================================
// let x = 0 / '0' // NaN (нельзя делить на 0)
// // let x = 0 / [] // NaN
// let z = Boolean(x) // Boolean(NaN)
// console.log(z); // false
//===================================
// let x = 4;
// let z = 3;
// let y = --x % z;
// function myf(x, y, z) {
//   return (x - z) * y;
// }
// console.log(myf(z, y, x)); // 0;
// console.log(myf(x, y, z)); // 0;
//===================================
// function calc(j, p) {
//   j *= ++p; // j = 2 * (1 + 2) = 6;
//   return j + p; // 6 + 3; p раніше уже інкрементилося;
//   j -= p;
// }
// console.log(calc(2, 2)); // 9;
//===================================
// const set = new Set([2, 2, 4, 2, 3])
// // const set = new Set([1, 2, 3, 4, 5, 5])
// console.log(set.size) // 3 (три уникальных элемента)
//===================================
// let obj1 = {
//   x: 1,
//   f: function() {
//     this.x = 2;
//   }
// };
// let obj2 = {
//     x: obj1.x
// };
// obj1.f();
// console.log(obj1.x); // 2
// console.log(obj2.x); // 1
//===================================
// let alpha = [5];
// alpha[0] = 'A';
// alpha[1] = 'B'; // создается второй эл-т с индексом 1;
// console.log(alpha.length) //2;
//===================================
// let foo = new Set([0, '3', 2, 4, 3]); // 5 уникальных эл-тов
// // let foo = new Set([0, 3, 2, 4, 3]); // 4 уникальные эл-ты
// console.log(foo.size)
//===================================
// let a = 6;
// let b = 3;
// // let z = (++a - b) / (a % b); // 4;
// let z = (a++ - b) / (a % b); // 3;
// console.log(z);
//===================================
// let total = 240;
// total = total / 4 - total / 6;
// let message = "";
// if (total === 40 / total) {
//   message += "hello";
// } else {
//   message += "world";
// }
// console.log(message); // world
// if (message === "hello") {
//   console.log("world");
// } else {
//   console.log("hello"); // hello
// }
//===================================
// myBlock: {
//     var a = 0;
//     break myBlock;
//     a = 1;
// }
// console.log(a); // 0
//===================================
// let sum = 0;
// for (let i = 0; i < 3; i++) {
//   sum += i;
// }
// console.log(sum); // 3
//===================================
// function sum(x) {
//   return x + 5;
// }
// console.log(sum(2) * 2); // 14;
//===================================
// console.log(Math.exp(16))
//===================================
// let solo1 = [1, 2]; // массив
// let solo2 = new Array(1, 2); // создает массив
// console.log(typeof(solo1) + typeof(solo2)); // object (два массива)
//===================================
// let a = 0 + ""; // string
// let b = + ""; // number
// let c = "" + ""; // string
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof a === typeof b); // false
//===================================
// let a = {
//   a: 3,
//   b: function() {
//     return this.a + 2;
//   },
//   c: function() {
//     return this.b() + 6;
//   }
// };
// console.log(a.b); // текст функции
// console.log(a.c); // текст функции
// console.log(a.c()); // 11
//===================================
// const time = '1996 EDT Friday';
// const endtime = '2017 EDT Tuesday';
// const converted = parseInt(endtime) - parseInt(time);
// console.log(converted); // 21
//===================================
// let i;
// for (i = 0; i < 7; i += 2) {
//   if (++i === 5) {
//     break;
//   } else {
//     continue;
//   }
// }
// console.log(i++); // 9
//===================================
// let a = true;
// let b = false;
// let c = ((a||b) || (a||b));
// console.log(c); // true
//===================================
// let cities = ['Madrid', 'Rio', 'New-York'];
// let [city1, city2, city3] = cities;
// let info = `I love ${city2}`;
// console.log(info) // I love Rio
//=============== !!! ====================
// const arr = [1, 2, 3, 4];
// let x = 1;
// for (let j = 0; j < arr.length; j++) {
//   x *= arr[j];
// }
// console.log(x); // 24
//===================================
// let a = 10;
// console.log(a === 20) // false
//=============== !!! ====================
// const str = 'hello world';
// const words = str.split(' ');
// const obj = {};
// for (let i = 0; i < words.length; i++) {
//     obj[words[i]] = words[i];
// }
// console.log(obj); // {hello: "hello", world: "world"}
//===================================
// const x = ['AC', 'DF', 'UE'];
// const y = x.length;
// console.log(y); // 3
//=============== !!! ====================
// const a = [1, 2, 3, 4, 5];
// const b = [1, 2, 3, 4, 5];
// const c = a.splice() === b.slice();
// console.log(a.splice()) // []
// console.log(b.slice()) // [1, 2, 3, 4, 5]
// console.log(c); // false
//=============== !!! ====================
// let fact;
// function factorial(x) {
//   for (let i = 1; i <= x - 1; i++) {
//     let y = i + 1;
//     fact = i * y;
//   }
//   return fact;
// }
// console.log(factorial(3)); // 6
//=============== !!! ====================
// let count = 0;
// for (let x = 0; x < 5; x++) {
//   count++;
//   x++;
// }
// console.log(count); // 3 (крутая задачка)
//===================================
// let array = ['Hello', 'world'];
// let text = array[1].split('o');
// console.log(text[0]); // w
// console.log(text); // ["w", "rld"]
//===================================
// let a = 50;
// function myfunc() {
//   let a = 5;
//   return a;
// }
// myfunc();
// console.log(a); // 50
// console.log(myfunc()); // 5 (разные области видимости)
//===================================
// console.log(typeof([])); // object
// console.log(typeof({})); // object
//===================================
// const a = Math.max(-12, -34, 0, -56, -1);
// console.log(a); // 0
//===================================
// let string = 'I love SoloLearn!';
// // let search = string.search('SoloLearn'); // 7
// let search = string.search('I'); // 0
// // let search = string.indexOf('I');  // 0
// console.log(search); // search() === indexOf()
//===================================
// let x = 10;
// if (x % 2 === 0) {
//   console.log(x);
// }
//===================================
// let a = 13;
// let b = 20;
// a = a === b;
// console.log(a); // false
//=============== !!! ====================
// function add(n1, n2) {
//   let sum = n1 + n2;
//   return;
// }
// function add1(n1, n2) {
//   let sum = n1 + n2;
// }
// add(2, 3);
// add1(2, 3);

// console.log(add() === add1()); // true
// console.log(add === add1); // false
// console.log(undefined === undefined); // true
//===================================
// var x = [typeof x, typeof y][1];
// console.log(typeof x); // string
//=============== !!! ====================
// const arr = [4, 5, 3, 2];
// for (var i = 0; i < arr.length; i++) {
//     arr[i] *= i;
//     // console.log(arr);
// }
// console.log(arr[i / 2]); // 6
//===================================
// let a = 'var a'.length;
// console.log(a); // 5
//===================================
// function isFalse() {
//   return false;
// }
// while (isFalse) {
//   continue;
// }  // бесконечный цикл
//=============== !!! ====================
// let bin = "1011";
// function binToDec(bin) {
//   var dec = 0;
//   var pow = 1;
//   var len = bin.length;
//   for (var i = 3; i >= 0; i--) {
//     // dec += bin[i] * pow;
//     dec = dec + bin[i] * pow;
//     // pow *= 2;
//     pow = pow * 2;
//     // console.log(dec, pow, i);
//   }
//   return dec;
// }
// console.log(binToDec(bin)); // 11
//===================================
// // const result = '300'; // 3
// const result = 300; // undefined
// // const result = [1, 2, 3]; // 3
// console.log(result.length);
//===================================
// let abc = [] === new Array(); // false
// let abc = {} === new Object(); // false
// let abc = function(){} === new Function(); // false
// console.log(abc);
//===================================
// let a = {
//   a: 3,
//   b: function() {
//     return this.a + 2;
//   },
//   c: function() {
//     return this.b() + 6;
//   }
// };
// console.log(a.c()); // 11
//=============== !!! ====================
// let count = 0;
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j <= 2; j++) {
//         count++;
//         console.log(count, i, j)
//     }
// }
// console.log(count); // 9
//===================================
// let count = 0;
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j <= 2; j++) {
//     continue;
//     count++;
//   }
// }
// console.log(count); // 0 (continue - прерывает итерацию каждый раз)
//===================================
// console.log(typeof constructor); // function
// console.dir(typeof constructor); // function
//===================================
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// const c = '1, 2, 3';
// console.log(a == c, a == b); // false false
//===================================
// const arr = [2, 4];
// arr.forEach(v => {
//   console.log(v ** 2);
// }); // 4, 16
//===================================
// let [java, script] = "hello world !".split(" ");
// console.log(java + script);  // helloworld
// // это деструктуризация
//=============== !!! ====================
// const arr = [4, 3, 2, 5];
// for (let i = 1; i < 3; i++) {
//     arr[i] = arr[i - 1] + arr[i + 1];
// }
// console.log(arr); // [4, 6, 11, 5]
//=============== !!! ====================
// let dogs = ["wendy", "jerry", "bret", "lizzy"];
// dogs = dogs.slice(1, 2 + 2);
// console.log(dogs[1]); // bret
//=============== !!! ====================
// alert(prompt().match(/\d+/g))
// // I am 16 years and 5 months old

// /abc/ поиск совпадений (регулярное выражение)
// /\d+/ поиск ПЕРВОГО совпадения числа (регулярное выражение)
// /\d+/g поиск ВСЕХ числ (регулярное выражение)
// /\D+/g поиск ВСЕХ НЕ числ (регулярное выражение)
//===================================
// let x = 7 + "2"; // string 72
// let y = 4 - "8"; // number -4
// console.log(x);
// console.log(typeof x);

// console.log(y);
// console.log(typeof y);

// console.log(x - y); // 76
// console.log(typeof (x - y)); // number
//=============== !!! ====================
// let x = 10;
// let y = 5;
// let z = (x - y)*(x / y);
// console.log(z); // 10;
//===================================
// let x = 2;
// let y = 3;
// do {
//   y++;
//   x--;
// } while (x > 0);
// console.log(x + y); // 5
//===================================
// console.log(false + 7); // 7
// console.log(false - 7); // -7
//===================================
// console.log(!(4 % 2)); // true
// console.log(!!(4 % 2)); // false
//===================================
// let a = 4;
// let b = 4.0;
// let c = "4";
// let d = [4];
// console.log(a + b + c + d); // 844 (конкатенация)
// console.log(typeof d); // object
// console.log(a + d); // 44
// console.log(typeof (a + d)); // string
//===================================
// const a = 1;
// function demo() {
//   let a = 2;
//   console.log(a); // 2
// }
// demo();
// console.log(a); // 1
//=============== !!! ====================
// const nums1 = [1, 2];
// const nums2 = [3, 4];
// const set = nums1 + nums2; // после конкатенации => string
// console.log(set.length); // 6
// console.log(typeof nums1) // object
// console.log(typeof set) // string
// console.log(set) // object
//===================================
// var y = 0;
// for (var x = 0; x < 3; x++) {
//   if (x === 2) {
//     x = 5;
//     continue;
//   }
//   y++;  // else { y++ }
// }
// console.log(y); // 2
//===================================
// let arr = [];
// arr[0] = 'a';
// arr[1] = 'b';
// arr.foo = 'c';
// console.log(arr);
// console.log(arr.length); // 2
//===================================
// let a = 5;
// let b = a;
// for (let i = b; i > 0; i--) {
//   console.log(a); // 5 раз
// }
//===================================
// let n = "3+8";
// console.log(n); // 3+8
// let a = eval(n);
// console.log(a);
// let b = a++;
// console.log(b); // 11
// console.log(a); // 12
//=============== !!! ====================
// let a = 1;
// let b = false;
// let c = !(a||b);
// a = c && true;
// c = 0 || a;
// console.log(!c || (!a && b)); // true
//===================================
// const a = [1, 2, 3, 4, 5];
// const b = [1, 2, 3, 4, 5];
// console.log(a.splice()) // []
// console.log(a.slice()) // [1, 2, 3, 4, 5];
//===================================
// var a = 3;
// var b = 2;
// var z = ++b/--a;
// console.log(z-.5); // 1
//===================================
// let a = 1;
// let b = 2;
// let c = 3;
// a += b - ++c;
// console.log(++a); // 0
//===================================
// let a = 'I Like Studing With Sololearn';
// let result = a.split(' ');
// console.log(result); // ["I", "Like", "Studing", "With", "Sololearn"]
//===================================
// let x = 5;
// let y = x++;
// console.log(x); // 6
// console.log(y); // 5
// console.log(x++ + y--); // 11
//===================================
// myBlock: {
//   var a = 0;
//   break myBlock;
//   a = 1;
// }
// console.log(a); // 0
//===================================
// function myFunc() {
//   console.log(x);
// }
// myFunc();
// var x = 2; // undefined
//=============== !!! ====================
// var num = 3;
// num += "2";
// console.log(num); // 32
// console.log(typeof num); // string
// num = +num;
// console.log(num); // 32
// console.log(typeof num); // number
//===================================
// let a = Number('1') - 1 === 0;
// console.log(a); // true
//===================================
// let x = 8;
// let n = x / 2;
// if (x > 5 && x < 10) {
//   n++;
// }
// console.log(n); // 5
//===================================
// let x = 0;
// let y = 1;
// if (x || y) {
//   x = 1;
// }
// console.log(x); // 1
//=============== !!! ====================
// let a = 1234;
// let sum = 0;
// while (a) {
//     sum += a % 10;
//     a = (a - (a % 10)) / 10;
//     //   console.log(sum) // // 4 7 9 10
// }
// console.log(sum); // 10
//=============== !!! ====================
// let str = "code";
// let res = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   res += str[i];
// }
// console.log(res); // edoc
//===================================
// let map = new Map();
// map.set("aa", "bb").set("cc", "dd");
// console.log(map.has("cc")); // true
// console.log(map.get("aa")); // bb
//===================================
// let a = 1;
// let b = 2;
// (function() {
//   let b = 3;
//   a += b;
//   console.log(a);  // 4
//   console.log(b);  // 3
// })();
// console.log(a + b);  // 6
// console.log(a);  // 4
// console.log(b);  // 2
//===================================
// let n = (null || 'user');
// console.log('The answer is ' + n);  // user
//===================================
// let x = 1;
// let y = x + ++x;
// console.log(y); // 3
// //===================================
// function myFunc(v1, v2, v3) {
//   return v1 + v2 + v3;
// }
// console.log(myFunc(1, 2, 3));  // 6
// ===================================
// let x = 0;
// for (let i = 0; i < 8; i++) {
//     x = i * i;
//     console.log(x); // 49
// }
//=============== !!! ====================
// let a = 0;
// a++;
// // console.log(a); // 1
// console.log(--a + a); // 0
// console.log(a);  // 0
// ===================================
// let a = [10, 20, 30];
// let b = ["10", "20", "30"];
// console.log(a.length); // 3
// console.log(b.length); // 3
// function compare(x, y) {
//   if ((x === y)) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }
// compare(a.length, b.length);  // yes
// ===================================
// console.log(typeof NaN);  // number
// ===================================
// let solo1 = [1, 2];
// let solo2 = new Array(1, 2);
// console.log(typeof solo1);  // object
// console.log(typeof solo2);  // object
// console.log(typeof solo1 + typeof solo2);  // objectobject
// ===================================
// let x = 1,
//   y = 0;
// function div(x, y) {
//   try {
//     if (y === 0) {
//       throw new Error("error");
//     }
//     console.log(x / y);
//   } catch (error) {
//     console.log(error.message);  // error
//   }
// }
// div(x, y);
//=============== !!! ====================
// if (null == undefined) {
//     console.log("hi"); // hi
// } else {
//     console.log("bye");
// }
// ===================================
// if (null === undefined) {
//     console.log("hi");
// } else {
//     console.log("bye"); // bye
// }
// ===================================
// console.log(NaN == NaN);  // false
// console.log(NaN === NaN); // false
// ===================================
// for (let i = 10; i <= 15; i++) {
//     console.log(45 - i);  // 35, 34, 33, 32, 31, 30
// }
// ===================================
// let apples = "23";
// let oranges = "7";
// console.log(+apples + +oranges); // 30
// console.log(++apples + ++oranges); // 32
// ===================================
// let arr = [5, NaN, 6];
// let bool = arr.includes(NaN);
// console.log(bool ? true : false);  // true
// console.log(NaN == NaN);  // false
// console.log(NaN === NaN);  // false
// ===================================
// let x = 2;
// let y = Math.sqrt(Math.pow(x, 4), 2);
// console.log(y); // 4
// console.log(Math.sqrt(64, 2));  // 8
// console.log(Math.sqrt(64));     // 8
// ===================================
// const yo = Object.freeze({
//   tic: "hello",
//   tac: "olleh",
//   toe: "gday!"
// });
// yo.tic = "gbye!";
// console.log(yo.tic);
// ===================================
// let x = 50;
// if (x > 42) {
//   console.log(++x); // 51
// }
// console.log(42); // 42
// ===================================
// let x = 1;
// x = ++x;
// x = --x;
// console.log(x);  // 1
// ===================================
// let x = 5;
// let y = 1;
// do {
//   x++;
//   y++;
// } while (x < 9);
// console.log(y); // 5
// ===================================
// let a = [2, 2, 2, 2];
// console.log(a.map(parseInt));  // [2, NaN, NaN, 2]
// ===================================
// var price = 50;
// console.log(price.toFixed(price / 25));  // 50.00
// ===================================
// let a = 0.4;
// let b = 2.0;
// let c = 5.0;
// let price = 2 * a + b + 3 * c;
// price = Math.ceil(price);
// console.log(price);  // 18
//=============== !!! ====================
// let arr = [];
// let x = 80 % 70;
// let y = 0;
// for (let i = 0; i < x; i++) {
//   if (i % 3 === 0) y = arr.push(i);
//   console.log(y);
// }
// // console.log(y); // 4
// // console.log(typeof y); // number
// ===================================
// let i;;
// for (i = 0; i <= 1; i++) {}
// console.log(i);  // 2
//=============== !!! ====================
// console.log(name, printName());  // undefined "John Doe"
// var name = "Lawrence";
// function printName() {
//     return "John Doe";
// }
// ===================================
// var name = "Lawrence";
// console.log(name, printName()); // Lawrence John Doe
// function printName() {
//   return "John Doe";
// }
// ===================================
// let x = 1;
// switch (x) {
//   case 1:
//     console.log("A");
// }
// ===================================
// var a;
// var b = 5;
// if (isNaN(a)) {
//   console.log(b); // 5
// }
// ===================================
// function solution(x, y, d) {
//   let distance = y - x;
//   if (distance % d === 0) return distance / d;
//   else return Math.ceil(distance / d);
// }
// console.log(solution(10, 30, 5));  // 4
//=============== !!! ====================
// let a = 1;
// for (let i = 0; i <= 4; i++) {
//   i += 2;
//   a *= 2;
// }
// console.log(a); // 4 ("i" инкрементится также в теле цикла)
// ===================================
// function x(a, b = 1, c = 3) {
//   return a + b + c;
// }
// console.log(x(2, 4));  // 9
//=============== !!! ====================
// let x = 67;
// let b = "x++";
// console.log(b); // x++;
// console.log(typeof b); // string
//=============== !!! ====================
// let x = { age: 24 };
// let y = x;
// let z = { age: 24 };
// console.log(y !== (x !== z));  // true
// console.log(x !== z);  // true
// ===================================
// const arr = [1, 2, 3, 4];
// console.log(arr[0]++); // 1 (по факту нічого не інкрементиться)
// console.log((arr[1] = 4));  // 4 (перезаписався елемент)
// console.log(arr.push(5)); // 5 (добавили в кінець масиву 5)
// console.log(arr = 'hello'); // ERROR (попытка поменять array на string)
// ===================================
// function num() {
//   var n1, n2;
//   n1 = 41 === "41"; // false (строгое равенство)
//   n2 = "55" == 55;  // true (нестрогое равенство)
//   return n1 && n2;
// }
// console.log(num());  // false
//=============== !!! ====================
// let x = 2;
// if (true || (false && x > 0)) {
//   console.log(x + 1); // 3
// } else {
//   console.log(x - 1);
// }
// ===================================
// let s = 'SoloLearn';
// console.log(s.indexOf('n') - s.length); // -1
// ===================================
// function sum(a, b) {
//   return a * b;
// }
// let x = sum(11, 7);
// console.log(x % 6); // 5
// ===================================
// let a = 0;
// for (let i = 7; i > 0; i--) {
//   do {
//     ++a;
//   } while (a < 0);
// }
// console.log(a); // 7
// ===================================
// let str = 'Hello';
// str.smth = 5;
// console.log(str.smth);  // error
//=============== !!!!! ====================
// let arr = [1];
// for (let i = 1; i < 3; i++) {
//   arr[i] = arr[i - 1] + i;
//   console.log(arr[i]);
// }
// console.log(arr.join("")); // 124
//=============== !!! ====================
// let a = 0;
// a++;
// console.log(--a + a);
//=============== !!! ====================
// let a = "";
// let b = "0";
// let c = 0;
// if ("" == "0") // false
// if ("0" == 0) // true
// if ("" == 0)  // true
// if (a == b) console.log("true"); // nothing
// if (b == c) console.log("false"); //false
// if (a == c) console.log("true"); // true
//=============== !!! ====================
// let str = "js, css, html php";
// let res1 = str.substring(-2, 2);
// let res2 = str.substr(-3, 3);
// let res3 = str.slice(-3);
// console.log(res1 + " " + res2 + " " + res3); // js php php
// ===================================
// let arr = [4, 8, 2];
// for (let i = 0; i < 3; i++) {
//   arr[0] += arr[i];
//   console.log(arr[0]); // 8, 16, 18
// }
// console.log(arr[0]); // 18
//=============== !!! ====================
// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i); // 0, 1, 2
//   }, 200);
// }
//=============== !!! ====================
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i); // 3, 3, 3
//   }, 200);
// }
//=============== !!! ====================
// let map = new Map();
// map.set("k1", "v1").set("k2", "v2");
// console.log(map.get("k1") + map.has("k2")); // v1true
// ===================================
// let st = [];
// st["name"] = "John";
// st["age"] = 25;
// let temp = st["name"].length + st["age"];
// console.log(temp); //  29
// console.log(st); // [name: "John", age: 25]
// st.push('hello')
// console.log(st.length); // 0 (один эл-т массива)
// console.log(st); // [name: "John", age: 25]
// ===================================
// let s1 = "cookies";
// let s2 = "banana";
// let s3 = "orange_juice";
// if (s3 < s1) {
//   console.log(s3.length);
// } else if (s3 > s2) {
//   console.log(s2.length);  // 6
// } else {
//   console.log(s1.length);
// }
// console.log(s1 > s3);
// // при сравнении строк используется лексографический (алфавитный)
// // порядок сравнения (Я > А; Z > A по буквам)
//=============== !!! ====================
// let x = 0;
// let arr = [4, 9, 2];
// arr[++x] = ++x - 1;
// console.log(arr); // [0, 9, 2]
// console.log(arr[x]); // 9
// ===================================
// let x;
// let a = Math.floor(Math.abs((x = -2) + x));
// console.log(a); // 4;
// ===================================
// let mySet = new Set();
// mySet
//   .add(8)
//   .add(7)
//   .add(1);
// for (let v of mySet.values()) {
//   console.log(mySet.has(7) + v); // 9 (true + 8)
//   console.log(v);  // v = 8
//   console.log(mySet.has(1));
//   console.log(true + 8);
//   break;
// }
//=============== !!!!! ====================
// const arr = Number(200, 200); // Number принимает только один параметр
// // console.log(arr); // 200 (arr - это переменная с примитивом 200, а не массив)
// // console.log(typeof arr) // number

// if (arr[0] == 200 || arr[1] == 200) {
//   console.log(arr.push(2.0, 200));
// } else if (arr == 200) {
//   console.log(arr.toString(arr.length));  // 200
// } else {
//   console.log(arr.push(200, 2.0));
// }
//=============== !!! ====================
// let s = 200;
// let x = s.toString(); // 200 string
// let y = s.toString(s.length); // 200 string
// console.log(x);
// console.log(typeof x);
// console.log(y);
// console.log(typeof y);
// ===================================
// let a = 1;
// let b = false;
// let c = !(a || b);
// a = c && true;
// c = 0 || a;
// console.log(!c || (!a && b));  // true
//=============== !!!!! ====================
// let x = 0;
// let arr = [4, 9, 2];
// arr[x++] = ++x - 1;
// console.log(arr[x]); // 2
// console.log(arr); // [1, 9, 2]
// ===================================
// let x = 0;
// let arr = [4, 9, 2];
// arr[x+1] = ++x - 1;
// console.log(arr[x]); // 0
// console.log(arr); // [4, 0, 2]
// ===================================
// function sum(x, y, z) {
//   z = 0;
//   for (x; x <= y; x++) {
//     z++;
//   }
//   return z;
// }
// console.log(sum(2, 8)); // 7
// ===================================
// var foo = 1;
// var bar = function() {
//   console.log(foo); // underfined
//   var foo = 2;
// };
// bar();
//=============== !!!!! ====================
// let first = function(a, b) {
//   return a + b;
// };
// let second = first.bind(null, "learn");
// console.log(second("solo")); // learnsolo
// ===================================
// let x = 4;
// let y = 7;
// if (x > 8) {
//   y = x;
// }
// console.log(y); // 7
// ===================================
// function iheonye(l, c, j) {
//   var Chidi = l + c + j;
//   let Justine = 3;
//   let me = Chidi + Justine;
//   return me;
// }
// console.log(iheonye(9, 9, 2)); // 23
//=============== !!! ====================
// let count = 0;
// for (let i = 0; i <= 6; i++) {
//   if (i == 3) {
//     i = 5;
//     continue;
//   }
//   count++;
// }
// console.log(count); // 4
// ===================================
// let a = 5;
// let b = 6;
// if (b < a) {
//   console.log(a % b);
// } else {
//   console.log(b % a);  // 1
// }
// ===================================
// let w = "hello";
// let b = "world\0";
// // console.log(b.length); // 6
// // console.log(b); // world
// console.log(w.substring(3) + b.length);  // lo6
// ===================================
// let x = 10;
// let y = x % 4;
// let z = y / 2;
// let c = x * z;
// console.log(x);  // 10
// ===================================
// let a = new Array();
// a[1] = 2;
// a[2] = 1;
// console.log(a);  //  [empty, 2, 1]
// console.log(a[2] + a.length - a[1]); // 2
//=============== !!! ====================
// let x = 1;
// let y = "Hello!";
// x = Math.pow(y, 2);
// // console.log(x); // NaN
// y = x;
// if (x == y) {
//   // false
//   console.log("true");
// } else {
//   console.log("false"); // false
// }
// ===================================
// let y = 0;
// y += y++;
// console.log(y); // 0
// console.log(3 * (y % 1)); // 0
//=============== !!! ====================
// let x = "2 * 2";
// console.log(x); // 2 * 2
// let y = 4;
// let z = eval(y + x);
// console.log(z); // 84
// ===================================
// let x = "6 * 2";
// let y = 3;
// let z = eval(y + x);
// console.log(z); // 72
// ===================================
// let x = 5;
// let y = x++;
// console.log(x++);  // 6
// ===================================
// let arr = ["J", "S"];
// arr.length = 0;
// console.log(arr[1]); // underfined
// ===================================
// let a = "() => 42";
// console.log(a);
// console.log(eval(a)()); // 42
// console.log(typeof eval(a)()); // number
// ===================================
// let x = 7 + "2";
// let y = 4 - "8";
// console.log(x); // 72 string
// console.log(y); // -4 number
// console.log(x - y); // 76 number
// ===================================
// let str = '1 one 2 two 3 three';
// let reg = /[0-9]/gim;
// console.log(reg)
// let res = str.match(reg);
// console.log(res);  // ["1", "2", "3"]
// ===================================
// let x = 0;
// let arr = [4, 9, 2];
// arr[++x] = ++x - 1;
// console.log(arr[x]); // 2
// ===================================
// const set1 = new Set();
// set1.add(1);
// set1.add("1");
// set1.add(1.0);
// set1.add(1.01);
// console.log(set1.size);  // 3 (три уникальные эл-ты в объекте)
// ===================================
// let x = 0;
// let y = 0;
// let z = x + y;
// let msg = ("a" + z);
// for (let n = 0; n < 3; n++) {
//     x = y++;
//     // console.log(`x: ${x}, y: ${y}`);
// }
// console.log(msg); // a0
// ===================================
// let i;
// for (i = 0; i < 3; i++) {
//   i = i + 1;
// //   console.log(i);  // 1, 3, 5
// }
// if (i % 2 === 0) {
//   ++i;
// } else {
//   --i;
// }
// console.log(i); // 5
// ================== !!! ===================
// let x = 1e-1;
// let y = -String(-x * 10);
// console.log(y);  // 1
// // let num = 1e-2;
// // console.log(num);
// ================== !!! ===================
// let y = "John";
// let x = +y;
// console.log(typeof x); // number
// console.log(x); // NaN
// ================== !!! ===================
// console.log([] + false - null + true);  // NaN
// console.log([]); // []
// console.log({}); // {}
// console.log(false); // false
// console.log(true); // true
// console.log(null); // null
// console.log(false + false); // 0
// console.log(true + true); // 2
// console.log(true + false); // 1
// console.log(true + null); // 1
// console.log(true - null); // 1  !!!!!!!!
// console.log(false - null); // 0  !!!!!!!!
// console.log("=============")
// console.log(true + []); // true
// console.log(true - []); // 1    !!!!!!!!
// console.log(false + []); // false
// console.log(false - []); // 0   !!!!!!!!
// console.log(false + {}); // false[object Object]
// console.log(false - {}); // NaN   !!!!!!!!
// console.log("=============")
// console.log(true + {}); // true[object Object]
// console.log(false + {}); // false[object Object]
// console.log("=============")
// console.log([] + false - null);
// console.log([] - false); // 0
// console.log([] + false); // false
// console.log([] + null); // null
// console.log([] - null); // 0
// console.log(false - null); // 0
// ==================== !!! =====================
// let arr = Array.from(new Array(5), (val) => 1);
// console.log(arr);  // [1, 1, 1, 1, 1]
// ===================================
// console.log('AB"CD"DE');  // correct
// console.log("AB'CD'DE");  // correct
// ===================================
// let a = "() => 42"
// console.log(typeof eval(a));  // function
// ===================================
// let arr = [];
// console.log(arr.length);  // 0
// arr[0] = arr.length;
// console.log(arr.length);  // 1
// arr[1] = arr.length + 1;
// arr[2] = arr.length + arr[1];
// console.log(arr);  // 0, 2, 4
// ===================================
// let a = true;
// function inc(x) {
//   return x + 1;
// }
// let res = inc(29);
// if (a != !true) {
//   res = inc(-1);
// }
// console.log(res); // 0
// ===================================
// let i;
// for (i = 0; i < 7; i += 2) {
//   if (++i == 5) break;
//   else continue;
// }
// console.log(i++); // 9
// ===================================
// let digital = ["1", "2", "3", "4", "5"];
// console.log(digital.length);  // 5
// ===================================
// let a = true;
// let b = "01";
// console.log(Number (a == b));  // 1
// // console.log(Number("02"));  // 2
// ===================================
// let someValue;
// if (!someValue) {};
// if (someValue === false){};
// ===================================
// let arr = [1, 2, 3];
// arr[0].push(4);
// // arr[0] = 4;
// console.log(arr);  // error
// ===================================
// var a = Number("10") + String(20);
// if(a == 30) {
//     console.log(1);
// } else if(a == 1020) {
//     console.log(2);
// } else {
//     console.log(3)
// }
// console.log("10" + "20");
// ===================================
// var y = 6;
// function func(x) {
//   return x - 1;
// }
// y = func(y);
// console.log(y);
// ===================================
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i); // 3
//   }, i * 100);
// }
// ===================================
// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i); // 3
//   }, i * 100);
// }
// ===================================
// // function square(x) {
// //     return x*x;
// // }
// const square = x => {
//   return x * x;
// };
// const a = square(5);
// console.log(a);
// ===================================
// const sq = x => x * x;
// const arr = ["1", "3", "2", "4"];
// const res = arr
//   .map(el => Number(el))
//   .filter(num => num % 2 !== 0)
//   .reduce((max, value) => Math.max(max, value), 0);

// console.log(res);

// ===================================
// const a = '4';
// const b = Number(a);
// console.log(typeof b)
// ===================================
// const greeter = {
//   greet: function(name) {
//     console.log("Hello", name);
//   },
//   greetAll: function(names) {
//     names.forEach((name) => {
//       this.greet(name);
//     });
//   }
// };
// greeter.greetAll(["Bob", "Mark", "Pete"]);
// ===================================
// function Person() {}
// Person.prototype.hi = function() {};
// ===================================
// function findProducts (opts = {minPrice: 10, maxPrice: 20}) {
//     console.log(opts);
// };
// findProducts();  // {minPrice: 10, maxPrice: 20}
// findProducts({});  // {}
// ===================================
// let num;
// debugger
// function func() {
//   num = 4;
// }
// num = 5;
// func();
// console.log(num);  // 4
// ============== !!! =====================
// const arr = new Array("");
// for (let i = 0; i < 10; i++) {
//   arr[i] = new Array("");
//   for (let j = 0; j < 10; j++) {
//     arr[i][j] = i * j;
//   }
// }
// console.log(arr[4][8]);  // 32
// ===================================
// let x = 1;
// for (let i = 0; i < 3; i++) {
//   x *= i;
// }
// console.log(x); // 0
// ===================================

// const userOrder1 = { id: "id-1", name: "Борщ", price: 50 };
// const userOrder2 = { id: "id-50", name: "Пельмени", price: 120 };

// const dishes = [
//   { id: "id-1", name: "Борщ", quantity: 0, price: 50 },
//   { id: "id-2", name: "Гуляш", quantity: 0, price: 74 },
//   { id: "id-3", name: "Плов", quantity: 0, price: 82 },
//   { id: "id-4", name: "Суши", quantity: 0, price: 164 },
// ];

// const takeAnOrder = (order, menu) => {
//   let updatedMenuWithOrder = [];
//   return (updatedMenuWithOrder = menu.map((dish) => {
//     if (order.id === dish.id) {
//       const { id, name, quantity, price } = dish;
//       return {
//         id,
//         name,
//         quantity: quantity + 1,
//         price,
//       };
//     } else {
//       return dish;
//     }
//   }));
// };

// const result_1 = takeAnOrder(userOrder1, dishes);
// const result_2 = takeAnOrder(userOrder2, dishes);

// console.log("result_1", result_1);
// console.log("result_2", result_2);
