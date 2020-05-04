// const teamMembers = ['Bingo', 'Juice', 'Black-jack'];

// console.log(teamMembers[2]);
// console.log(teamMembers.length);

// teamMembers[0] = 'newBingo';
// console.log(teamMembers[0]);

// for (let i = 0; i < teamMembers.length; i += 1) {
//     console.log(teamMembers[i])
// }

// ===========================================

// ПЕРЕБОР ЭЛЕМЕНТОВ С ЦИКЛОМ FOR
// const numbers = [];
// console.log(numbers);

// for (let i = 1; i < 4; i += 1) {
//   numbers.push(`label-${i}`);
// }
// console.log(numbers); // ["label-1", "label-2", "label-3"]

// ===========================================

// Перебор массива циклом for ... of
// const hotels = ["Five stars", "Continental", "Hayat", "Hilton"];
// for (const hotel of hotels) {
//   console.log(hotel); //
// }
//  Five stars
//  Continental
//  Hayat
//  Hilton
// ==============================================

// Поиск елемента в массиве с циклом for ... of
// const palletOfColours = ['green', 'blue', 'skyblue', 'navy', 'red', 'pink', 'black', 'white'];
// let colourToFind = prompt('Please input your favourite colour');
// let message = `There is no your ${colourToFind} colour in Library of Colours`;

// for(const colour of palletOfColours) {
//     if (colour === colourToFind) {
//         message = `Your favourite ${colourToFind} colour is in Library of Colours`;
//         break;
//     }
// }
// alert(message);
// ====================================================

// проверка на число в заданном диапазоне
// const arrayOfNumbers = [4, 5, 2, 9, 10, 345, 234, 32, 54, 88, 99];
// const targetNumbers = [];
// const threshold = 200;

// for(const number of arrayOfNumbers) {
//     if (number >= threshold) {
//         targetNumbers.push(number);
//     }
// }
// console.log(targetNumbers);
//==========================================

// альтернативный метод поиска числа в заданном диапазоне (через for со счетчиком)
// const arrayOfNumbers = [4, 5, 2, 9, 10, 345, 234, 32, 54, 88, 99];
// const threshold = 200;

// for (let i = 0; i < arrayOfNumbers.length; i += 1) {
//   if (arrayOfNumbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число из массива, которые больше "${threshold}": ${arrayOfNumbers[i]}`);
// }
//================================================

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.slice(0, 4));
// console.log(arr.splice(2, 2, 'kiwi', 'bahamas'));
// console.log(arr.splice(2, 0, 'kiwi', 'bahamas'));
// console.log(arr);

//================================================

// функция
// const add = function(a, b, c) {
//     return a + b + c;
// };
// const result = add(1, 2, 5);
// console.log(result);

// const add2() {
//     return 1+2+5;
// }
// console.log(add2())

//=================================================
// Считалка от и до с заданным интервалом
// const count = function(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`count from ${countFrom} to ${countTo} step ${step}`);
//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };
// count(1, 5, 2);
//=================================================

// const summa = function() {
//   let total = 0;
//   for (const number of arguments) {
//     total += number;
//   }
//   const summaArray = Array.from(arguments);
//   console.log(summaArray);
//   return total;
// };
// console.log(summa(1, 3, 10));
//==================================================
// const someFunction = function() {
//   let total = 0;
//   for (const element of arguments) {
//     total += element;
//   }
//   const someFunctionArray = Array.from(arguments);
//   console.log(someFunctionArray);
//   return total;
// };
// console.log(someFunction(1, 4, 5, 15, 10, 4));
//==================================================

// const math = {
//   'factit': function factorial(n) {
//     console.log(n);
//     if (n <= 1) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }
// };

// math.factit(3) //3;2;1;
//==================================================

// const add = function (a, b, c) {
//   return a + b + c;
// };
// console.log(add.name); // add
// console.log(add(1, 2, 3));

// function square (number) {
//     return number * number;
// }
// console.log(square(35));
//==================================================

// function remakedCar(obj) {
//   obj.firm = "Toyota";
//   obj.model = "Corolla";
//   obj.year = "2008";
//   return obj;
// }
// const obj = { firm: "Honda", model: "Arrord", year: "2005" };
// console.log(obj);
// console.log(remakedCar(obj));

// {firm: "Honda", model: "Arrord", year: "2005"}
// {firm: "Toyota", model: "Corolla", year: "2008"}
//==================================================

// Функция принимает объект и модифицирует его
// function repairTablets (obj) {
//     obj.firm = 'Toshiba';
//     obj.model = 'Compact';
//     obj.year = '2019';
//     return obj;
// }
// const obj = {firm: 'Samsung', model: 'Unpacked', year: '2016'};
// console.log(obj);
// console.log(repairTablets(obj));
//==============================================

// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };

// console.log(factorial(3));
//==============================================

// function cubeFunc(f, array) {
//   const result = [];
//   let i;
//   for (let i = 0; i < array.length; i++) {
//     result[i] = mathFunc(array[i]);
//   }
//   return result;
// }
// const mathFunc = function(x) {
//   return x * x * x;
// };
// const numbers = [1, 2, 5, 10];
// const cube = cubeFunc(mathFunc, numbers);
// console.log(cube);
//===============================================

// замыкание
// function add (a, b) {
//     function square (x) {
//         return Math.pow(x, 2);
//     }
//   return square(a) + square(b);
// }
// console.log(add(2, 4)); //20
//===============================================

// multiple clouse (мультивложенная рекурсия)
// function A (x) {
//     function B (y) {
//         function C (z) {
//           console.log(x + y + z); // 6
//         }
//         C(3);
//     }
//     B(2);
// }
// A(1);
// Функция С имеет доступ к переменным и аргументам функций A и B;
// Функция B имеет доступ к переменным и аргументам функций A;
// Функция A НЕ ИМЕЕТ доступ к переменным и аргументам функций A и B;
//===============================================

// function A (x) {
//     function B (y) {
//         function C (z) {
//             console.log(x + y + z);
//         }
//         C(3);
//     }
//     B(2);
// }
// A(1);
//===============================================

// function outside() {
//     let x = 5;
//     function inside(x){
//         return x * 2;
//     }
//     return inside;
// }
// console.log(outside());
//===============================================

// function stringToUpdate (separator) {
//     let result = '';
//     for (let i = 1; i < arguments.length; i++) {
//         result += arguments[i] + separator;
//     }
//     return result;
// }
// console.log(stringToUpdate(', ', 'blue', 'red', 'black', 'brown'));
//===============================================

// function multiply(a, b) {
//     b = typeof b !== "undefined" ? b : 1;
//   return a * b;
// }

// console.log(multiply(10));
// console.log(typeof NaN)
//===============================================

// function multiply(multiplier, ...args) {
//   return args.map(x => multiplier * x);
// }

// var arr = multiply(2, 1, 2, 3);
// console.log(arr); // [2, 4, 6]
//===============================================

// Функция обратного вызова - callback function

// function greeting(name) {
//   alert("Hello " + name);
// }

// function processUserInput(callback) {
//   let name = prompt("Please enter your name.");
//   callback(name);
// }
// console.log(processUserInput(greeting));
//===============================================

// function first() {
//   setTimeout(function() {
//     console.log(1);
//   }, 200);
// }
// function second() {
//   console.log(2);
// }
// first();
// second();
//===============================================

// function first(y) {
//   console.log(1);
//   y();
// }
// function second(a, b) {
//   console.log(a * b);
// }
// first(function() {
//   second(4, 7);
// });
//===============================================

// const add = function(a, b, c, d, e) {
//     console.log(arguments);
// };
// add(1, 2, 3, 4, 5);

// const add2 = function (...rest) {
//     console.log(rest);
// }
// add2(1, 2, 3, 4, 5);

// const add3 = (...rest) =>
//     console.log(rest);

// add3(1, 2, 3, 4, 5);
//===============================================
// Taks 1
// function logItems(array) {
//   const items = [];
//   for (let i = 0; i < array.length; i++) {
//     items.push(`${i + 1} - ${array[i]}`);
//   }
//   console.log(items);
// }
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
//===============================================

// let message = 'hello my dear'
// const array = message.split(' ');

// console.log(message.length)
// console.log(array);
// console.log(array.length);
//===============================================
// task 2
// function calculateEngravingPrice(message, pricePerWord) {
//   const array = message.split(" ");
//   const price = array.length * pricePerWord;
//   return price;
// }

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); //80
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160
// console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40)); // 200
// console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); // 100
//===============================================

// task 3
// function findLongestWord(string) {
//   let maxLength = 0;
//   let longestWord;
//   const array = string.split(" ");

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > maxLength) {
//       maxLength = array[i].length;
//       longestWord = array[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
// console.log(findLongestWord("Google do a roll")); // 'Google'
// console.log(findLongestWord("May the force be with you")); // 'force'
//===============================================

// task 4

// function formatString(string) {
//   if (string.length <= 40) {
//     return string;
//   }
//   return string.slice(0, 40) + " ...";
// }
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // // вернется форматированная строка
// //===============================================

// task 5

// function checkForSpam(str) {
//     debugger;
//   const newStr = str.toLowerCase();
//   const array = newStr.split(" ");
//   for (let i = 0; i < array.length; i++) {
//     if (f || array[i] === "sale") {
//         // можно решать через метод includes, а можно через сравнивание
//       return true;
//     }
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j].includes("spam") || array[i][j].includes("sale")) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// // console.log(checkForSpam("Latest technology news")); // false
// // console.log(checkForSpam("JavaScript weekly newsletter")); // false
// // console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("[spam] How to earn fast money?")); // true
//=================================================

// task 6
// let userNumber;
// const numbers = [];
// let total = 0;
// let message;

// while (userNumber !== null) {
//   userNumber = prompt("Введите число, которое затем будет суммироваться");
//   if (userNumber === null) {
//     break;
//   }
//   if (Number(userNumber)) {
//     numbers.push(Number(userNumber));
//   } else {
//     alert("Было введено не число, попробуйте еще раз!");
//   }
// }
// for (const number of numbers) {
//     total += number;
// }
// message = `Общая сумма чисел равна: ${total}`;
// alert(message);
//=================================================

// task 7 дополнительно
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// let login;
// function isLoginValid(login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function isLoginUnique(allLogins, login) {
//   return allLogins.includes(login);
// }
// function addLogin(allLogins, login) {
//   if (isLoginValid(login) === false) {
//     console.log("Ошибка! Логин должен быть от 4 до 16 символов");
//   } else if (isLoginUnique(allLogins, login) === false) {
//     console.log("Такой логин уже используется!");
//   } else {
//     logins.push(login);
//     console.log("Логин успешно добавлен!");
//   }
// }
// addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
// addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
// addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// // //=================================================
