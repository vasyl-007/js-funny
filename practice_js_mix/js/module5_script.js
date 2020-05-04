//==========================================
// // ТЕОРИЯ ИЗ ЛЕКЦИИ

// const employee = {
//   name: "Richard",
//   baseSalary: 100,
//   overTime: 23,
//   effectivness: 40,
//   allSalary() {
//     return this.baseSalary + this.overTime + this.effectivness;
//   }
// };
// console.log(employee.allSalary());
//==========================================
// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };
// const hotel_1 = new Hotel("Resort", 5, 150);
// console.log(hotel_1);
// const motel = new Hotel("Pelmennaya", 3, 20);
// console.log(motel);
//==========================================

// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;
//   this.greet = function(guestName) {
//     console.log(`Hello Mr/Ms ${guestName} and welcome to ${this.name}`);
//   };
//   this.addGusts = function(amount) {
//     this.guestCount += amount;
//   };
//   this.removeGuests = function(amount) {
//     this.guestCount -= amount;
//   };
// };
// const motel = new Hotel("Rosa of Winds", 4, 50);
// console.log(motel);
// motel.greet("Vasyl");
// motel.addGusts(15);
// motel.removeGuests(3);
// console.log(motel);
//==========================================

// const worker1 = {
//   name: "Mykola",
//   countProduced: 5,
//   newProduct(product) {
//     this.countProduced += 1;
//     return console.log(
//       `${this.name} produced ${product}. His record is ${this.countProduced}`
//     );
//   }
// };
// const worker2 = {
//     name: "Petro",
//     countProduced: 2,
//     newProduct(product) {
//         this.countProduced += 1;
//         return console.log(`${this.name} produced ${product}. His record is ${this.countProduced}`);
//     }
// }
// worker1.newProduct("new smart TV");
// worker2.newProduct("electrocar");
// worker2.newProduct("scooter");
//==========================================
// const Manager = function(name = "manager", sales = 0) {
//   this.name = name;
//   this.sales = sales;
//   this.sell = function(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}`;
//   };
// };
// const cassier1 = new Manager("Mykola", 10);
// console.log(cassier1.sales);
// console.log(cassier1.sell("mircowave"));
// console.log(cassier1.sell("whinterpool"));

// const cassier2 = new Manager("Svitlana", 5);
// console.log(cassier2.sales);
// console.log(cassier2.sell("magnit tools"));
//==========================================

// ПРОТОТИПЫ - Prototype

// const countries = { flag: true, anthem: true, king: false };
// const greatBritain = { king: true };
// const ukraine = { argriculture: true };
// greatBritain.__proto__ = countries;
// ukraine.__proto__ = countries;

// console.log(greatBritain);
// console.log(greatBritain.king)
// console.log(ukraine);
// console.log(ukraine.flag)
//==========================================

// __proto__
// const employees = { works: true };
// const sidorov = { works: false };

// sidorov.__proto__ = employees;
// console.log(employees.works);
// console.log(sidorov.works);
// console.log(sidorov);
//==========================================

// const people = { speak: true, eat: true, mood: "happy" };

// // ukrainians.__proto__ = people;
// // аналог записи ниже (по современному)
// const ukrainians = Object.create(people);

// ukrainians.language = "ukrainian";
// console.log(ukrainians);
// console.log(ukrainians.language);
// console.log(ukrainians.mood);
//==========================================

// // for... in "видит" свойства (ключи: значения) объекта,
// // а также свойства proto

// const students = { study: "hard" };
// const ukrStudents = Object.create(students);
// ukrStudents.celebrate = "very hard";

// for (const key in ukrStudents) {
//   console.log(key);
//   console.log(ukrStudents[key]);
// }
//==========================================

// const adults = { car: true, flat: true };
// const students = Object.create(adults);
// students.mood = "happy";
// students.life = "interesting";
// students.work = false;
// students.study = true;

// for (const key in students) {
//   if (!students.hasOwnProperty(key)) {
//     continue;
//   }
//   console.log(key);
//   console.log(students[key]);
//   console.log('============')
// //   console.log(key, ": ", students[key])
// }
//==========================================

// const allStudents = { study: true, success: "depends on smth", work: "good" };
// const harvardStudents = Object.create(allStudents);
// harvardStudents.success = "very high";
// harvardStudents.work = "well-paid";
// harvardStudents.status = "high";

// for (const key in harvardStudents) {
//   if (!harvardStudents.hasOwnProperty(key)) {
//     console.log(`Общее, что объединяет студентво Гарварда со студентами других ВУЗов:
//       ${key} - ${harvardStudents[key]}`);
//     continue;
//   }
//   console.log(`Отличия студентов Гарварда:
//   ${key} - ${harvardStudents[key]}`);
// }
//==========================================

// const Guest = function(name, room){
//     this.name = name;
//     this.room = room;
// };
// console.log(Guest.prototype);

// const bear = new Guest('Winnie-the-Pooh', 5);
// console.log(bear);

//==========================================
// const habitatOfEarth = {creature: 'humans'};

// const europeans = Object.create(habitatOfEarth);
// europeans.language = 'bilingual';

// const ukrainians = Object.create(europeans);
// ukrainians.girls = 'beautiful';

// const habitantOfKyiv = Object.create(ukrainians)
// habitantOfKyiv.location ='Kyiv';

// console.log(habitantOfKyiv);
// for(const key in habitantOfKyiv) {
// // console.log(key);
// // console.log(habitantOfKyiv[key]);
//     console.log(`Характеристики киевлян: ${key}: ${habitantOfKyiv[key]}`)
// }
//==========================================
// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };
// Guest.prototype.showName = function() {
//   console.log(`${this.name} have booked the hotel room № ${this.room}`);
// };
// const bear = new Guest("Winnie-the-Pooh", 5);
// const donkey = new Guest("Carroot donkey", 4);
// console.log(bear.showName());
// console.log(donkey.showName());
// console.log(Guest.prototype.showName)
//==========================================
// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };
// console.log(Guest.prototype);
// console.log(typeof Guest.prototype);
// Guest.prototype = {
//   constructor: Guest
// };
// console.log(Guest.prototype);
//==========================================

// const animals = { eat: true };
// // const dog = {bark: true};
// // dog.__proto__ = animals;

// const dog = Object.setPrototypeOf(dog, animals);
// console.log(dog);
// // const dog = Object.create(animals);
// // console.log(Object.getPrototypeOf(dog) === animals)
// Object.getPrototypeOf(dog) === animals;
// console.log(dog);
// // dog.barks = true;

// // const dog = {bark: true};
// // Object.getPrototypeOf(dog) === animals;
// // console.log(dog);
// // console.log(dog.prototype)
// // console.log(Object.getPrototypeOf(dog));
// // console.log(dog);
//==========================================

// Наследование и конструкторы

// const Hero = function(name, experience) {
//   this.name = name;
//   this.experience = experience;
// };
// Hero.prototype.gainExperience = function(amount) {
//   console.log(`Your ${this.name} gained his experience of ${amount} points`);
//   this.experience += amount;
// };
// const mario = new Hero("superMario", 1000);
// console.log(mario);
// mario.gainExperience(350);
// console.log(mario);

// // Теперь создаем еще один шаблон (функцию-конструктор),
// // используя существующий шаблон (функцию-конструктор)
// const Warrior = function(name, experience, weapon) {
//   Hero.call(this, name, experience);
//   this.weapon = weapon;
// };
// Warrior.prototype.attack = function() {
//   console.log(`Your ${this.name} attacks with ${this.weapon}`);
// };
// const samurai = new Warrior("Heavy Helm", 1200, "big stick");
// console.log(samurai);
// samurai.attack();
//==========================================

// КЛАССЫ ( javascript основывается на прототипах,
//     а не на классах, как другие языки)
// class Guest {}
// // console.log(Guest);
// // console.log(typeof Guest);
// // console.log(Guest.prototype);
// const guest = new Guest();
// console.log(guest);
//==========================================

// class Guest {
//   constructor(name, room) {
//     this.name = name;
//     this.room = room;
//   }
// }
// const guest = new Guest("Mykola", 12);
// console.log(guest);
//==========================================

// // Taks 1

// const Account = function({ login, email }) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function() {
//   console.log(`Login: ${this.login}, email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo);
// // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof"
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com"
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
//==========================================

// // Taks 2
// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers.`
//     );
//   }
// }
// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

//==========================================

// Taks 3
// class Storage {
//   constructor(array) {
//     this.items = array;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     return this.items.push(item);
//   }
//   removeItem(item) {
//     if (this.items.includes(item)) {
//       const index = this.items.indexOf(item);
//       this.items.splice(index, 1);
//       return this.items;
//     } else {
//       alert(`Невозможно удалить! ${item} не значится на складе`);
//     }
//   }
// }
// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор"
// ]);
// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//==========================================

// Taks 4

// class StringBuilder {
//   constructor(string) {
//     this._value = string;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value += str;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//   }
//   pad(str) {
//     this._value = str + this._value;
//     this._value = this._value + str;
//   }
// }
// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='
//==========================================

// // task 4 (вариант решения с использованием сеттеров)

// class StringBuilder {
//   constructor(string) {
//     this._value = string;
//   }
//   get value() {
//     return this._value;
//   }
//   set append(str) {
//     this._value += str;
//   }
//   set prepend(str) {
//     this._value = str + this._value;
//   }
//   set pad(str) {
//     this._value = str + this._value;
//     this._value = this._value + str;
//   }
// }
// const builder = new StringBuilder(".");

// builder.append = "^";
// console.log(builder.value); // '.^'

// builder.prepend = "^";
// console.log(builder.value); // '^.^'

// builder.pad = "=";
// console.log(builder.value); // '=^.^='
//==========================================

// taks 5

// class Car {
//   static getSpecs(car) {
//     console.log(`
//     Максимальная скорость: ${car._maxSpeed},
//     текущая скорость: ${car._speed},
//     автомобиль заведен: ${car._isOn},
//     пробег авто: ${car._distance},
//     стоимость: ${car._price}.`);
//   }
//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     this._speed = speed;
//     this._price = price;
//     this._maxSpeed = maxSpeed;
//     this._isOn = isOn;
//     this._distance = distance;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(price) {
//     this._price = price;
//   }
//   turnOn() {
//     this._isOn = true;
//   }
//   turnOff() {
//     this._isOn = false;
//     this._speed = 0;
//   }
//   accelerate(value) {
//     if (this._speed + value <= this._maxSpeed) {
//       this._speed += value;
//     } else {
//       console.log(
//         `Attention!!! Вы пытаетесь превысить максимально допустимую безопасную скорость на ${this
//           ._speed +
//           value -
//           this._maxSpeed}`
//       );
//     }
//   }
//   decelerate(value) {
//     if (this._speed - value >= 0) {
//       this._speed -= value;
//     }
//   }
//   drive(hours) {
//     if (this._isOn === true) {
//       this._distance += hours * this._speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// //==================================================
// //==================================================

// Вебинары
// const Counter = function({ initialValue = 0, step = 1 }) {
//   this.initialValue = initialValue;
//   this.step = step;
// };
// const counter = new Counter({ initialValue: 10, step: 10 });
// console.log(counter);
//==================================================
