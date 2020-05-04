// const someObj = {
//   name: "Vasyl",
//   surname: "Manyo",
//   location: "Kyiv"
// };
// console.log(someObj);
// someObj.location = "Los Angeles";
// console.log(someObj);
// ================================================
// const key = 'person';
// const obj = {};
// obj.key = 'Mango';
// console.log(obj.key);

// const obj2 = {
//   person: 'Mango',
// };
// console.log(obj2.person);
// ================================================
// const key = 'person';
// const getKey = function() {
//   return 'age';
// };

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}
// ================================================
// const key1 = 'name';
// const surn = 'Manyo';
// function key2 (){
// return 'surname';
// }
// const obj = {
//   [key1]: 'Vasyl',
//   [key2()]: surn,
// }
// console.log(obj);
// ================================================
// const hotel = {
//   name: 'Resort',
//   greet(name){
//     console.log(`Welcome, dear ${name}`);
//   },
// };
// hotel.greet('Vasyl');
// ================================================
// const hotel = {
//   name: 'Resort',
//   greeting: function greet(name){
//     console.log(`Welcome, dear ${name}`);
//   },
// };
// hotel.greeting ('Vasyl');
// ================================================
// const hotel = {
//   name: 'Spa Resort',
//   stars: '5 stars',
//   capacity: 200,
//   showName(){
//     console.log(this.name);
//   },
//   changeName(newName) {
//     this.name = newName;
//   },
//   newCapacity(value){
//     this.capacity = value;
//   },
// };
// console.log(hotel.name);
// hotel.changeName('Rosa of the Seas');
// console.log(hotel.name);
// hotel.newCapacity(250);
// console.log(hotel.capacity);
//=================================================
// const hotel = {
//   name: "Spa Resort",
//   stars: "5 stars",
//   capacity: 200
// };
// for (const key in hotel) {
//   console.log("Key: ", key); // name, stars, capacity;
//   console.log("Value: ", hotel[key]); // 'Spa Resort', '5 stars', '200';
// }
//=================================================
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100
// };
// // console.log(Object.keys(hotel));
// // console.log(Object.values(hotel));
// console.log(Object.entries(hotel));
// const keys = Object.keys(hotel);
// // console.log(keys);
// for (const key of keys) {
//     // console.log('Values: ', hotel[key]);
// };
//=================================================
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100
// };
// const key_value = Object.entries(hotel);
// for (const key of key_value) {
//   const keys = key[0];
//   const values = key[1];
//   console.log(`${keys}: ${values}`);
// }
//=================================================
// const hotelResort = {
//     room_1: 2,
//     room_2: 1,
//     room_3: 0,
//     room_4: 4,
// };
// let total = 0;
// const values = Object.values(hotelResort);
// for (const value of values) {
//     total += value;
// }
// console.log(total);
//=================================================

// ...spread - распыление элементов для передачи в функцию
// в качестве аргументов
// const temperatures = [18, 14, 12, 21, 17, 29];
// const minTemperature1 = Math.min(temperatures); // NaN (потому, что массив, а не число);
// const minTemperature2 = Math.min(...temperatures);
// console.log(minTemperature2); // 12
//=================================================

// ...spread - распыление массивов
// const oldBooks = ['book-1', 'book-2', 'book-3'];
// const newBooks = ['book-11', 'book-12', 'book-13'];
// const allBooks = [...oldBooks, ...newBooks];
// console.log(allBooks);

// const modifiedAllBooks = [...oldBooks.slice(0,2), ...newBooks.slice(2)];
// console.log(modifiedAllBooks);
//=================================================

// // ...spread - распыление объектов
// // объединяются объекты. При этом, если свойства отсутствуют,
// // то они записываются, если повторяются - перезаписываются
// const a = { x: 5, y: 0 };
// const b = { x: 2, z: 10 };
// const c = {...a, ...b};
// console.log(c);
//=================================================

// // Object.assign() - тоже объединяет объекты
// const a = { x: 5, y: 0 };
// const b = { x: 2, z: 10 };
// const c1 = Object.assign({}, a, b);
// const c2 = Object.assign(a, b);
// console.log(c1);
// console.log(c2);
//=================================================

// ...rest - сбор аргументов (значений)
// Используется в функциях и при деструктуризации
// const add = function(a, b, ...args) {
//   console.log(args); // 3, 4;
// };
// add(1, 2, 3, 4);
//=================================================

// // деструктуризация
// const hotel = {
//   name: "Resort",
//   stars: 5,
//   capacity: 100
// };
// // Объявим переменные и присвоим им значения из объекта
// const {name, stars, capacity, status} = hotel;
// console.log(name, stars, capacity, status);
// //Resort 5 100 undefined
//=================================================

// const hotel = {
//   name: "Resort",
//   stars: 5,
//   capacity: 100
// };
// const {
//   name = "newResort",
//   stars = 3,
//   capacity = 150,
//   status = "empty"
// } = hotel;
// console.log(name, stars, status, capacity);
//=================================================

// const hotel = {
//   name: "Resort",
//   stars: 5,
//   capacity: 100
// };
// const { name, ...rest } = hotel;
// console.log(name); // "Resort"
// console.log(rest); // {stars: 5, capacity: 100}
//=================================================

// Task_01
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = "false";

// const keys = Object.keys(user);

// for (const elem of keys) {
//   const key = elem;
//   const value = user[elem];
//   console.log(`${key}: ${value}`);
// }
// ================================================

// Task_02
// // вариант решения №1 (через функцию)
// const countProps = function(obj){
//   console.log(Object.keys(obj).length);
// }
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// //=========================================

// // вариант решения №2 (через свойство)
// const obj1 = {
//   name: "Mango",
//   age: 2,
// };
// console.log(Object.keys(obj1).length);

// const obj2 = {
//   mail: "poly@mail.com",
//   isOnline: true,
//   score: 500
// };
// console.log(Object.keys(obj2).length);
// //=========================================

// // Task_03
// const findBestEmployee = function(employees) {
//     const namesOfEmployees = Object.keys(employees);
//     let maxValue = 0;
//     let bestEmployer;
//     for (const value in employees) {
//       if (employees[value] > maxValue) {
//         maxValue = employees[value];
//         bestEmployer = value;
//       }
//     }
//     console.log(bestEmployer);
//   };
//   const employeesList1 = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99 // lorence
//   };
//   const employeesList2 = {
//     poly: 12,
//     mango: 17, // mango
//     ajax: 4
//   };
//   const employeesList3 = {
//     lux: 147, // lux
//     david: 21,
//     kiwi: 19,
//     chelsy: 38
//   };
//   findBestEmployee(employeesList1);
//   findBestEmployee(employeesList2);
//   findBestEmployee(employeesList3);
//   // ======================================

// Task_04
// const countTotalSalary = function(employees) {
//   let totalSalary = 0;
//   const arrayOfSalaries = Object.values(employees);
//   for (const salary of arrayOfSalaries) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// };
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150
//   })
// ); // 400
// //=========================================

// Task_05
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];
// const getAllPropValues = function(arr, prop) {
//   const filteredArray = [];
//   for (const elem of arr) {
//     if (prop in elem) {
//       filteredArray.push(elem[prop]);
//     }
//   }
//   return filteredArray;
// };
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []
// // ===============================================







































// const clients = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// console.log('//==============================')

// const clients1 = ['Mango', 'Poly', 'Ajax'];
// for (const mem of clients1) {
//   console.log(mem);
// }

// console.log('//==============================')

// const string = 'javascript';
// for (const character of string) {
//   console.log(character)
// }

// console.log("//==============================");

// const clients = ["Poly", "Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = `${clientNameToFind} найден в массиве!`;
//     break;
//   }
//   message = `${clientNameToFind} нет в массиве!`;
// }
// console.log(message);

// console.log("//==============================");

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < 15) {
//     continue;
//   }
//   console.log(
//     `Здесь выведены значения, которые больше "${threshold}": ${numbers[i]}`
//   );
// }
// console.log("//==============================");
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (const number of numbers) {
//   if (number < 15) {
//     continue;
//   }
//   console.log(
//     `Здесь выведены значения, которые больше "${threshold}": ${number}`
//   );
// }

// console.log("//==============================");
// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);
//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// getAllPropValues(arr, prop)

// function task_05() {
//   let cost;
//   let message;
//   let userChoice = prompt("Введите вашу страну для доставки товара");
//   if (userChoice === null) {
//     message = "Отменено пользователем!";
//   } else {
//     userChoice = userChoice.toLocaleLowerCase();

//     switch (userChoice) {
//       case "china":
//         cost = 100;
//         message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//         break;
//       case "chile":
//         cost = 250;
//         message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//         break;
//       case "australia":
//         cost = 170;
//         message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//         break;
//       case "india":
//         cost = 80;
//         message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//         break;
//       case "jamaica":
//         cost = 120;
//         message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//         break;
//     }
//     if ((userChoice = null)) {
//       message = "Выберите страну доставки";
//     } else if (!cost) {
//       message = "В вашей стране доставка не доступна";
//     }
//   }
//   console.log(message);
// }
// ======================================
// Модуль 3. Задача 2.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = function(arr, prop) {
//   const rezult = [];
//   for (let i = 0; i < arr.length; i++) {
//     let currentObject = arr[i];

//     if (currentObject[prop]) {
//       rezult.push(currentObject[prop]);
//     }
//   }
//   return rezult;
// };
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []

// ========================================

// Ранжирование массива от большого к малому

// const arr = [11, 6, 7, 8, 4, 5, 11, 10];

// const mySort = (arr) => {
//   const rezult = [];
//   const _arr = [...arr];

//   while(_arr.length>0) {
//     let maxNumber = Math.max(..._arr);
//     rezult.push(..._arr.splice(_arr.indexOf(maxNumber), 1));
//   }
//   return rezult;
// }
// console.log(mySort(arr));

// ========================================

// const people = [
//   { name: "Roman", height: 170, colorEye: "brown", weight: 70 },
//   { name: "Sergiy", height: 175, colorEye: "blue", weight: 86 },
//   { name: "Petro", height: 186, colorEye: "black", weight: 92 },
//   { name: "Vasyl", height: 172, colorEye: "black", weight: 92 },
//   { name: "Grisha", height: 182, colorEye: "grey", weight: 92 },
//   { name: "Anya", height: 168, colorEye: "blue", weight: 92 },
// ];
// console.log(people);
// console.log('//=========================');

// const getNamePeople = function(arr2){
//   const result = [];
//   for(const element of arr2) {
//     result.push(element.name);
    
//   }
//   return result;
// }
// console.log(getNamePeople(people));


// const getFirstPeople = function(arr2){
//   return arr2[0]
// }
// console.log(getFirstPeople(people))

// const getLastPeople = function(arr2){
//   return arr2[people.length - 1]
// }.
// console.log(getLastPeople(people))
// get last
// }
// const getLastPeople = function(){
// get last
// }
// const findColorEye = function(searchEyeColor, searchArray) {
  // searchArray = [...people];


//   const result = [];
//   return result;
// }

// console.log(getAllPeople(people));

// const findHeight = function() {

//   return: object
// }

// const summHeightAllPeople = function() {

//   return: object + summ
// }
//======================================================

// =========================================

// mosule #4

// const names = ["Petro", "Marina", "Volodymyr", "Maxim"];

// function canDrink(person) {
//   return this.age >= 18;
// }

// function learnGreetings(person) {
//   person.sayHello = sayHello;
//   console.log(`Hello! My name is ${name}`);
// }

// function sayHello(name) {
//   name = this.name;
//   console.log(`Hello! My name is ${name} and I ${this.canDrink()?'can':'can not'} drink`);
// }

// function createPerson(name) {
//   const resultObject = {
//     name,
//     age: Math.round(Math.random() * 99 + 1)
//   };
//   return resultObject;
// }
// function createPeople(arr) {
//   for (const elem of arr) {
//     const person = createPerson(elem);
//     learnGreetings(person);
//     person.canDrink = canDrink;
//     peopleArray.push(person);
//     console.log(person);
//   }
//   const peopleArray = [];
//   peopleArray.push(person);
// }
// const peopleArray = createPeople(names);
// console.log(peopleArray);
// const petro = peopleArray[1];
// petro.sayHello;

// petro.canDrink;

// console.log(peopleArray[1].sayHello());

// функция createPeople принимает два параметра arr
// в input входит string  \список имен\, в output ложатся обьекты с Name и Age=>целое число не больше 100
// всех людей нужно научить здороваться через метод Сей хеллоу /Привет меня зовут.../
// метод canDrink задает параметры может ли человек пить или нет

// ======================================

// const names = ['Petro', 'Marina', 'Volodimir', 'Katya', 'Maxim'];
// function canDrink() {
//   return this.age >= 18;
// }
// function sayHello() {
//   const name = this.name;
//   console.log(`Hello, my name is ${name}, I ${this.canDrink() ? 'can' : 'cannot'} drink`);
// }
// function learnGreetings(person){
//   person.sayHello = sayHello;
// }
// function createPerson(name){
//   const resultObject = {
//     name,
//     age: Math.round(Math.random() * (100 - 1) + 1)
//   };
//   return resultObject;
// }
// function createPeople(arr){
//   const peopleArray = [];
//   for (const elem of arr) {
//     const person = createPerson(elem);
//     learnGreetings(person);
//     person.canDrink = canDrink;
//     peopleArray.push(person);
//   }
//   return peopleArray;
// }
// const peopleArray = createPeople(names);
// console.log(peopleArray);
// const petro = peopleArray[1];
// petro.sayHello();

// =========================================
