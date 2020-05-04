//=================================================
// const array = [43, 53, 23, 21, 14, 8, 50, 87];
// let filteredArray = [];
// const threshold = 60;
// function filter() {
//     for (let i = 0; i < array.length; i ++) {
//         if ( array[i] < threshold) {
//             filteredArray.push(array[i]);
//         }
//     }
// }
// filter(array);
// console.log(filteredArray);
//=================================================

// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.filter(number => number > 2);
// console.log(newArray);

//=================================================
// Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });
// console.log(filteredNumbers); // [4, 5]
//=================================================

// Функция с побочным эффектом (влияет на массив numbers, изменяя его)
// const numbers = [1, 2, 3, 4, 5];
// const changeNumbers = (numbers, value) => {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] * value;
//   }
// };
// changeNumbers(numbers, 2);
// console.log(numbers); // [2, 4, 6, 8, 10]
//=================================================

// Чистая функция без побочного эффекта (не изменяет массив numbers за областью функции)
// const numbers = [1, 2, 3, 4, 5];
// const changeNumbers = (numbers, value) => {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     newNumbers.push(numbers[i] * value);
//   }
//   return newNumbers;
// };
// const pureChangeNumbers = changeNumbers(numbers, 2);
// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(pureChangeNumbers); // [2, 4, 6, 8, 10]
//=================================================

// array.method(callback[curretnValue, index, array])
//=================================================

// at classroom 10/12/2019
// const ourCallBack = (acum, val, ind, arr) => {
//   console.log("--->", acum, val, ind);
//   acum += val;
//   return acum;
// };
// const myReduce = function(callBackF, initParam) {
//   const arr = this;
//   let rezult = initParam ? initParam : arr[0];
//   const startFrom = initParam ? 0 : 1;
//   for (let i = startFrom; i < arr.length; i++) {
//     rezult = callBackF(rezult, arr[i], i, arr);
//   }
//   return rezult;
// };
// const rez = [1, 3, 4, 2, 5].reduce(ourCallBack, 40);
// console.log("BuildReduce:", rez);
// const rez1 = myReduce.call([1, 3, 4, 2, 5], ourCallBack, 40);
// console.log("OurReduze:", rez1);
//=================================================

// записать имплементацию функции getReport,
// принимающей минимальный возраст, массив свойств объекта и входящий массив

// const getReport (ageMin, arrayWithProps) => {
//     const resultArray = users.filter(user => users.age > 18);

//     return
// }
// console.log(getReport(18, ['name', 'isActive', 'skills', 'users'], importedUsers));
//=================================================

// const array = [1, 2, 4, 23, 34, 43, 53];
// const filteredArray = [];
// function arrayFilter() {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 35) {
//       filteredArray.push(array[i]);
//     }
//   }
// }
// arrayFilter(array);
// console.log(filteredArray);
//=================================================

// метод filter
// const array = [1, 2, 4, 23, 34, 43, 53];
// console.log(array.filter(value => value > 35));
//=================================================

// // console.log('hello its works')
// const array = [1, 2, 4, 23, 34, 43, 53];
// // const arrayDoubled = [];

// // // метод for of (без счетчика)

// // for (const elem of array) {
// //   arrayDoubled.push(elem * 2);
// // }

// // // метод for (со ссчетчиком)
// // for (let i = 0; i < array.length; i++) {
// //   arrayDoubled.push(array[i] * 2);
// // }

// // // метод map
// const arrayDoubled = array.map(elem => elem * 2);

// console.log(array);
// console.log(arrayDoubled);
//=================================================

const scientist = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
  }
];

// const newArr = arr.map(item => ({

// }))

// // 1) отримати масив вчених що народилися в 19 ст
// const born = scientist.filter((elem) => {
//   return elem.year >= 1800 && elem.year < 1900;
// });
// console.log(born);
// ====================================

// const born = scientist.every((elem) => {
//   return elem.year >= 1500 ;
// });
// console.log(born);
// ====================================

// // 2) знайти суму років скільки прожили всі вченні
// const summYearAllScientist = scientist.reduce(
//   (acc, elem) => acc + (elem.passed - elem.year), 0);
// console.log(summYearAllScientist);
// ====================================

// const x = scientist.reduce(
//     (acc, el) => ({
//         sumBornYear: acc.sumBornYear + el.year,
//         sumPassedYear: acc.sumPassedYear + el.passed,
//         allSomeYear: acc.allSomeYear + el.year + el.passed

//     }), {sumBornYear: 0, sumPassedYear: 0, allSomeYear: 0})
//     console.log(x);
// ====================================
// console.log(!!(true)) // !!(true) === Boolean(true)
// // confirm('Please enter your name')
// console.log(Number.parseInt('45.645ddf')) // 45
// console.log(Number.parseFloat('45.645dfdd')) // 45.645

// let a = {a: 1};
// let b = a;
// console.log(a);
// console.log(b);
// b.a = 100;
// console.log(b)
// console.log(a)

// ====================================

// let a = {a: 1};
// let b = a;
// console.log(a);
// console.log(b);
// b.c = 56;
// console.log(a);
// console.log(b);
// a = {a: 3};
// console.log(a);
// console.log(b);
// // console.log(b);
// ====================================
// console.log(typeof(function(){})); // function
// console.log(typeof(true));
// console.log(typeof(5));
// console.log(typeof('message'));

// console.log(typeof 'message')
// console.log(typeof true)
// ====================================
// const a = ['Ajax', 'Poly', 'Mango'];
// console.log(a[1]);
// console.log(a.indexOf('Poly'));
// console.log(a.includes('Poly'));

// ====================================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     /*
//      * Если какое-то условие выполняется, то есть все хорошо,
//      * вызываем resolve и получает данные. Условие зависит от задачи.
//      */
//     resolve("Data passed into resolve function :)");

//     // Если что-то не так, вызваем reject и передаем ошибку
//     // reject("Error passed into reject function :(")
//   }, 2000);
// });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('success!');
//     }, 2000);
//   });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success!");
//   }, 2000);
// });

// promise
//   .then(data => console.log(data)) // "success"
//   .catch(error => console.log(error))
//   .finally(() => console.log("finished!")); // "finished"

// function order(type) {
//   return new Promise(function(resolve, reject) {
//     var burger = cookBurger(type);
//     burger.ready = function(err, burger) {
//       if (err) {
//         return reject(Error("Error while cooking"));
//       }
//       return resolve(burger);
//     };
//   });
// }

// order("JakeBurger")
//   .then(burger => {
//     const milkshake = makeMilkshake("vanila");
//     return { burger: burger, shake: milkshake };
//   })
//   .then(foodItems => {
//     console.log("BURGER PARTY !", foodItems);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// ====================================

// // 3) Відсортувати вчених по алфавіту
// const sortAlphabet = scientist.sort((a, b) => (a.first > b.first ? 1 : -1));
// console.log(sortAlphabet);

// // 4) Відсортувати вчених по даті народження
// const sortBorn = scientist.sort((a, b) => (a.year > b.year ? 1 : -1));
// console.log(sortBorn);

// 5) Відсортувати вчених по кількості прожитих років
// const lifeYear = scientist.sort((a, b) => (a.passed - a.year > b.passed - b.year ? 1 : -1));
// console.log(lifeYear);

// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// const del1 = scientist.filter(({ year }) => year < 1400 || year > 1700);
// console.log(del);

// 7) Знайти вченого який народився найпізніше.
// const year = scientist.sort((a, b) => (a.year < b.year ? 1 : -1));
// console.log(year);

// 8) Знайти рік народження Albert Einstein
// const findAlbert = scientist.find(elem => elem.first === 'Albert' && elem.last === 'Einstein');
// console.log(findAlbert.year)
// console.log(findAlbert)

// const find = (arr, name, lastName) => {
//   return arr.find(elem => elem.first === name && elem.last === lastName);
// };
// const result = find(scientist, "Albert", "Einstein");
// console.log(result);

// 9) Знайти вчених прізвище яких починається на літеру С

// const findC = scientist.filter(elem => elem.last[0] === 'C' ? elem : null)
// console.log(findC);

// 10) Видалити з масива всіх вчених імя яких починається на A
// const findA = scientist.filter(elem => elem.first[0] === 'A' ? elem : null)
// console.log(findA);
//==========================================================================
// // поиск уникальных чисел
// const uniqeuNumbers = (arr, ...rest) => {
//   const uniqueArr = [];
//   const newArr = [...arr, ...rest];

//   newArr.forEach(elem => {
//     if (!uniqueArr.includes(elem)) {
//       uniqueArr.push(elem);
//     }
//   });
//   //   return uniqueArr;
//   // ниже аналог, как при помощи new Set искать уникальные значения
//   return [...new Set(newArr)];
// };
// const res = uniqeuNumbers([32, 43, 23, 24, 43, 53], 432, 23, 2);
// console.log(res);
//==========================================================================
// const storage = {
//   _items: [{ label: "item-1" }, { label: "item-2" }],
//   get items() {
//     return this._items;
//   },
//   add(item) {
//       this._items.push(item);
//   }
// };
// console.log(storage.items);
// storage.add({ label: "item-3" });
// console.log(storage.items);
//===========================================
// const storage = {
//   _items: [{ label: "item-1" }, { label: "item-2" }],
//   get items() {
//     return this._items;
//   },
//   add(item) {
//     this._items = [...this._items, item];
//   }
// };
// console.log(storage.items);
// storage.add({ label: "item-3" });
// console.log(storage.items);
//===========================================

// Task 1

// import users from "./module6_library_script.js";

// const getUserNames = users.map(user => {
//   return user.name;
// });

// console.log(getUserNames);
//===========================================

// Теория модуль 6

// const numbers = [2, 4, 6, 8, 10];
// console.log(numbers);

// const doubled = numbers.map(number => {
//     return number *2;
// });
// console.log(doubled);
// // log(doubled);

// const tripled1 = [];
// for (const number of numbers) {
//   tripled1.push(number * 3);
// }
// console.table(tripled1);

// const tripled2 = [];
// for (let i = 0; i < numbers.length; i++) {
//   tripled2.push(numbers[i] * 3);
// }
// console.log(tripled2);

// const tripled3 = numbers.map((elem) => {
//     return elem*3;
// });
// console.log(tripled3);
//===========================================

// const items = [
//   { id: 1, name: "Roshen", price: 100, quantity: 200 },
//   { id: 2, name: "ABK", price: 85, quantity: 100 },
//   { id: 3, name: "Wedel", price: 400, quantity: 150 },
//   { id: 4, name: "Motzart", price: 680, quantity: 350 },
//   { id: 5, name: "Lindt", price: 520, quantity: 400 },
//   { id: 6, name: "Ritter sport", price: 220, quantity: 280 },
//   { id: 7, name: "Ferrero", price: 450, quantity: 380 }
// ];
// const names = items.map(item => {
//   return item.name;
// });
// console.log(names);

// const prices = items.map(money => {
//   return money.price;
// });
// console.log(prices);

// const newPrices = items.map(money => {
//   return { ...items, price: Math.round(money.price * 1.1) };
// });
// console.log(newPrices);

// const newItems = [...items];
// const newPrices1 = newItems.map(money => {
//     return {price: Math.round(money.price * 1.2)};
// });

// const onlyPrices = newPrices1.map(money => {
//     return money.price;
// });
// console.log(onlyPrices);
//===========================================

// console.log("hello my friend");

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 7));

// function sum(a, b) {
//   console.log("Hello! Im here");
//   return 2;
// }
// console.log(sum());
//===========================================

// функция для поиска простых чисел в заданном диапазоне (n)
// const primes = [];
// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) continue nextPrime;
//     }
//     primes.push(i); // найденное простое число добавляем в массив
//   }
// }
// showPrimes(25);
// console.log(primes);
//===========================================

// // два разных состояния массива (при добавлении в него элементов)
// const storage = {
//   _items: [{ label: "item-10" }, { label: "item-11" }],
//   get items() {
//     return this._items;
//   },
//   add(item) {
//     // this._items.push(item);
//     this._items = [...this._items, item]
//   }
// };
// console.log(storage.items);
// storage.add({label: 'item-12'}); // разные ссылки (состояния) массива
// console.log(storage.items);
// storage.add({label: 'item-13'}); // разные ссылки (состояния) массива
// console.log(storage.items);
//===========================================

// console.log([]) // можно посмотреть методы массива (в proto)
// // те методы, которые не меняет исходящий массив (поэтому нет sort())

// console.log([])
// console.log({})
// console.log(Boolean)

//===========================================
// const numbers = [1, 4, 8, 56, 24, 33, 37, 54, 77];
// const doubled = numbers.map(number => {
// //   console.log(number);
//   return number * 2;
// });
// console.log(numbers);
// console.log(doubled);
//===========================================

// const items = [
//   { id: "id-1", name: "Roshen", price: 100, quantity: 200 },
//   { id: "id-2", name: "ABK", price: 85, quantity: 100 },
//   { id: "id-3", name: "Wedel", price: 400, quantity: 150 },
//   { id: "id-4", name: "Motzart", price: 680, quantity: 350 },
//   { id: "id-5", name: "Lindt", price: 520, quantity: 400 },
//   { id: "id-6", name: "Ritter sport", price: 220, quantity: 280 },
//   { id: "id-7", name: "Ferrero", price: 450, quantity: 380 }
// ];

// const names = items.map(candy => {
//     return candy.name;
// });
// console.log(names);

// const updatedItems = items.map(item => {
//     return {
//         ...item,
//         price: Math.ceil(item.price * 1.1),
//     };
// });
// console.table(updatedItems);

// const updatedItems2 = items.map(item => {
//     return Math.ceil(item.price *1.1);
// })
// console.log(updatedItems2);
// console.log(items);
//===========================================

// const numbers = [2, 4, 6, 8, 10];
// const tripled = numbers.map(number => {
//   return number * 3;
// });
// console.log(numbers);
// console.log(tripled);
//===========================================

// const doubledNumbers = numbers.map(number => {
//   return number * 2;
// });
// console.log(doubledNumbers);
// console.log(numbers);
//===========================================

// !!! метод map под капотом (шикарно!)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultArray = [];
// const map = (array, callback) => {
//     for(let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const result = callback(element);
//         resultArray.push(result);
//     };
//     return resultArray;
// };

// const doubledNumbers = map(numbers, number => {
//     return number * 2;
// });
// console.log(numbers);
// console.log(resultArray);
//===========================================
// const items = [
//   { id: "id-1", name: "Roshen", price: 100, quantity: 200 },
//   { id: "id-2", name: "ABK", price: 85, quantity: 100 },
//   { id: "id-3", name: "Wedel", price: 400, quantity: 150 },
//   { id: "id-4", name: "Motzart", price: 680, quantity: 350 },
//   { id: "id-5", name: "Lindt", price: 520, quantity: 400 },
//   { id: "id-6", name: "Ritter sport", price: 220, quantity: 280 },
//   { id: "id-7", name: "Ferrero", price: 450, quantity: 380 }
// ];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultArray = [];
// const map = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const result = callback(element);
//     resultArray.push(result);
//   }
//   return resultArray;
// };
// const names = map(items, item => {
//     console.log(item.name);
// })
// const tripled = map(numbers, number => {
//     return number * 3;
// });
// console.log(resultArray);

// const findItem = items.find(item => {
//     return item.id === 'id-3';
// });
// console.table(findItem)

// const filteredItems = items.filter(item => {
//     return item.price > 400;
// });
// console.table(filteredItems);

// const allItems = items.every(item => {
//     return item.price;
// });
// console.log(allItems);

// const someItems = items.some(item => {
//     return item.name === 'Rafaello';
// });
// console.log(someItems);

// console.log([])
//===========================================
// // форма записи функций
// const add1 = function(){}; // классическая запись (функция-выражение);
// const add2 = () => {}; // стрелочная форма записи функции (всегда функция выражение);
// function add3(){}; // декларативная запись функции;
//===========================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filtered = numbers.filter(number => {return number > 5});
// console.log(filtered);
//===========================================

// const numbers = [5, 23, 53, 73, 32, 3, 9];
// const sortedNumbers = numbers.sort()
// console.log(sortedNumbers);
// console.log(numbers.sort());

// const numbers = [5, 2, 3, 7, 89, 4, 34, 3, 9, 1];
// // Отсортирует по возрастанию
// console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
// console.log('After sort: ', numbers.sort()); // [1, 2, 3, 4, 5]

//===========================================

// const numbers = [85, 5, 23, 53, 73, 32, 3, 9];
// const rangedNumbers = [];
// for (let i = 0; numbers[i] > numbers[i+1]; i++) {
//     if(numbers[i] < numbers[i+1]) {
//         rangedNumbers.push(numbers[i]);
//         rangedNumbers.push(numbers[i+1]);

//     } else {
//         rangedNumbers.push(numbers[i+1]);;
//         rangedNumbers.push(numbers[i]);
//     };
//     // return rangedNumbers;
// };

// for (let i = 0; numbers[i] < numbers[i+1]; i++) {
//     if(numbers[i] < numbers[i+1]) {
//         rangedNumbers.push(numbers[i]);
//         rangedNumbers.push(numbers[i+1]);

//     } else {
//         rangedNumbers.push(numbers[i+1]);;
//         rangedNumbers.push(numbers[i]);
//     };
//     // return rangedNumbers;
// };

// console.log(rangedNumbers);
//===========================================

// // сортировка массива чисел методом пузырька
// const m = [12, 2, 63];
// const count = m.length-1;

// for (let i = 0; i < count; i++)
// debugger
//      for (let j = 0; j < count-i; j++)
//         if (m[j]> m[j+1]) {
//            const max = m[j];
//            m[j] = m[j+1];
//            m[j+1] = max;
//         }
// console.log(m);

//===========================================
// const numbers = [12, 20, 63, 84, 10, 86, 47, 82, 29, 5];
// const sortedNumbers = numbers.sort(function(a,b) {return a - b});
// console.log(sortedNumbers);
//===========================================

// const items = [
//   { id: "id-1", name: "Roshen", price: 100, quantity: 200 },
//   { id: "id-2", name: "ABK", price: 85, quantity: 100 },
//   { id: "id-3", name: "Wedel", price: 400, quantity: 150 },
//   { id: "id-4", name: "Motzart", price: 680, quantity: 350 },
//   { id: "id-5", name: "Lindt", price: 520, quantity: 400 },
//   { id: "id-6", name: "Ritter sport", price: 220, quantity: 280 },
//   { id: "id-7", name: "Ferrero", price: 450, quantity: 380 }
// ];

// const totalQuantity2 = items.reduce((acc, item) => {
//     return acc + item.quantity;
// } ,0);
// console.log(totalQuantity2)

// const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
// console.log(totalQuantity);

// // const getNames = items => {
// //     return items.map(item => {
// //         return item.name;
// //     });
// // };
// // const names = getNames(items);
// // console.log(names);

// // !!!!!!!!!
// // Сокращенная форма записи

// const getNames = items => items.map(item => item.name);

// const names = getNames(items);
// console.log(names);
//===========================================

// const updatedItems = items.map(item => {
//     return {
//     ...item,
//     price: Math.round(item.price * 1.1)}
// });
// console.log(updatedItems);
//===========================================

// // !!! для домашки
// const updatedPriceItems = items => {
//     return items.map(item => {
//     return {
//     ...item,
//     price: Math.round(item.price * 1.1)
//     };
//   });
// };
// const updatedItems = updatedPriceItems(items)
// console.log(updatedItems);
//===========================================

// const updatedPriceItems = (items, value) => {
//     return items.map(item => {
//     return {
//     ...item,
//     price: Math.round(item.price * value)
//     };
//   });
// };
// const updatedItems = updatedPriceItems(items, 1.5)
// console.log(updatedItems);
//=============================================

// // !!! без return
// const updatedPriceItems = (items, value) =>
//     items.map(item => ({
//         ...item,
//         price: item.price * value
//     }));
// const updatedItems = updatedPriceItems(items, 1.5);
// console.log(updatedItems);

//=============================================
// //==== !!!
// const updatedItemsQuantity = (items, itemId, amount) => {
//     return items.map(item => {
//         return item.id === itemId ? { ...item, quantity: item.quantity + amount } : item;
//     })
// }
// const updatedItems = updatedItemsQuantity(items, 'id-3', 50)
// console.table(items);
// console.table(updatedItems);
// //=============================================
//==== !!!
// const updatedItemsQuantity = (items, itemId, amount) => {
//     return items.map(item => {
//         return item.id === itemId
//         ? { ...item, quantity: item.quantity + amount }
//         : item;
//     })
// }
// const updatedItems = updatedItemsQuantity(items, 'id-3', 50)
// console.table(items);
// console.table(updatedItems);

// const item = items.find(element => element.id === 'id-3');
// console.log(item)
// item.quantity += 30
// console.log(item)

// console.table(items)

// const getItemsWithPrice = (items, price) => {
//     return items.filter(item => {
//         return item.price < price;
//     });
// };
// const cheapItems = getItemsWithPrice(items, 250);
// console.table(cheapItems);

// const getItemsWithQuantity = (items, value) =>
//      items.filter(item => item.quantity < value );

// const quantityItems = getItemsWithQuantity(items, 200);
// console.table(quantityItems);

// const updatedPriceItems = (items, value) => {
//     return items.map(item => {
//     return {
//     ...item,
//     price: Math.round(item.price * value)
//     };
//   });
// };
// const updatedItems = updatedPriceItems(items, 1.5)
// console.log(updatedItems);

// const findItemById = (items, itemId) => items.find(item => item.id === itemId);
// const findItem = findItemById(items, 'id-4');
// console.table(findItem);

//=============================================

// // !!! без return
// const updatedPriceItems = (items, value) =>
//     items.map(item => ({
//         ...item,
//         price: item.price * value
//     }));
// const updatedItems = updatedPriceItems(items, 1.5);
// console.log(updatedItems);
//=============================================

// const candies1 = items.forEach(item => {
//     price: item.price * 1.1;
// });
// // console.log(candies1);

// const numbers = [1, 2, 3, 4, 5];
// // const reserve = [...numbers];
// const doubledNumbers = numbers.forEach(number => {
//     numbers.push(number * 2);
// });
// // console.log(reserve);
// console.log(numbers);
// // console.log(doubledNumbers);
// const number1 = numbers.find(number => {
//     return number === 5;
// });
// console.log(number1)
//=============================================

// const storage = {
//   currentId: 1,
//   _items: [{ id: 0, label: "item-1" }, { id: 1, label: "item-2" }],
//   get items() {
//     return this._items;
//   },
//   add(item) {
//       this._items = [...this._items, {id: ++this.currentId, ...item }];
//   },
//   delete(id){
//     this._items = this._items.filter(item => item.id !== id)
//   }

// };
// console.table(storage.items);
// storage.add({ label: "item-3" });
// storage.delete(2)
// console.table(storage.items);
//==========================================================================

// // const numbers = [43, 53, 23, 21, 14, 8, 50, 87];
// const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce((accum, number) => {
//     return accum + number
// }, 0);
// console.log(total);

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };
// const total2 = Object.values(salary).reduce((acc, value) => {
//     return acc + value;
// }, 0);
// console.log(total2)
//==========================================================================

// // ... (...tweet.tages) и (...tweet.tages) распыляют элементы (а не весь массив)
// const tweets = [
//     {id: '000', likes: 5, tags: ['js', 'nodejs']},
//     {id: '001', likes: 2, tags: ['html', 'css']},
//     {id: '002', likes: 17, tags: ['html', 'css', 'nodejs']},
//     {id: '003', likes: 8, tags: ['css', 'nodejs']},
//     {id: '004', likes: 0, tags: ['js', 'react']},
// ];
// const tags = tweets.reduce((acc, tweet) => {
//    acc.push(...tweet.tags);
//    return acc;
// }, []);
// console.log(tags);
// //==========================================================================

// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 }
// ];
// console.table(players.find(player => player.id === 'id-2'))
// const log = array => console.table(array);

// // for (let i = 0; i < players.length; i++) {
// //     console.log(players[i]);
// // };
// players.forEach(player => console.log(player))

// const numbers = [4, 2, 82, 8, 2, 54, 5, 3, 1];
// const copy = [...numbers];
// copy.sort()
// console.log(numbers)
// console.log(copy)

// SORT
// const sortedPlayers = [...players].sort(
//   (playerA, playerB) => playerA.rank - playerB.rank
// );
// // log(sortedPlayers);

// FILTER
// const numbers = [1, 2, 3, 4, 5];
// const filter = (array, callback) => {
//   const filteredArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const passed = callback(array[i]);

//     if (passed) {
//       filteredArray.push(array[i]);
//     }
//   }
//   return filteredArray;
// };

// log(filter(numbers, number => number > 2));
// log(filter(numbers, number => number < 3));
//===============================================

// // filter под капотом выглядит вот так
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const filter = (array, callback) => {
//   const filteredArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const passed = callback(array[i]);

//     if (passed) {
//       filteredArray.push(array[i]);
//     }
//   }
//   return filteredArray;
// };
// console.table(filter(numbers, number => number > 3));
//===============================================

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// // console.table(numbers.filter(number => number > 3));
// const filteredNumbers = numbers.filter(number => {
//     return number > 3;
// });
// console.table(filteredNumbers);
//===============================================

// FIND метод

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const find = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     const passed = callback(array[i]);

//     if (passed) {
//       return array[i];
//     }
//   }
// };
// console.table(find(numbers, number => number > 3));
// // console.log(find(numbers, number => number > 3));
//===============================================

// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 }
// ];
// const totalRank = players.reduce((acc, player) => {
//   return acc + player.rank;
// }, 0);
// console.log(totalRank);
// //===============================================

// // REDUCE под капотом
// const numbers = [1, 2, 3, 4, 5];
// const reduce = (array, callback, initialValue) => {
//   let accumulator = initialValue;

//   for (let i = 0; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i]);
//   }
//   return accumulator;
// };
// console.log(reduce(numbers, (acc, number) => acc + number, 0));
// // //===============================================

// reduce для массива
// это для примера, так не нужно делать (это плохая практика, т.к. нельзя менять менять
// практику встоенных объектов. А вдруг в будущем javascript будет в прототипе другой метод пропишут!

// Array.prototype.customReduce = function(callback, initialValue = array[0]) {
// console.log('this: ', this);
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i]);
//   }
//   return accumulator;
// };
// console.log([1, 2, 3, 4, 5].customReduce((acc, num) => acc + num, 0));
// // //===============================================

// // chain - цепочка методово
// const numbers = [1, 2, 3, 4, 5];
// // const greaterThenTwo = numbers.filter(number => number > 2);

// // const multByTwo = greaterThenTwo.map(number => number * 2);

// // const sortedNumbers = multByTwo.sort((a, b) => a - b);

// // console.log(greaterThenTwo);
// // console.log(multByTwo);
// // console.log(sortedNumbers);

// const result = numbers.filter(number => number > 2)
// .map(number => number * 2)
// .sort((a, b) => a - b);
// console.log(result)
// // //===============================================

// // chain
// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 }
// ];
// const onlineAndSorted = players.filter(player => player.isOnline == true)
// .sort((a, b) => b.rank - a.rank);
// console.table(onlineAndSorted);
