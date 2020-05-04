//=======================================

// Rest parameter
// // max(1, 3);
// // max(1, 3, 3, 4, 5);

// // function max() {
// //   // pseudo-array
// //   var numbers = Array.prototype.slice.call(arguments);
// // }
// function max(a, b, ...numbers) {
//   // pseudo-array
//   console.log(numbers);
// }
// max(1, 3, 4, 7, 5);
// max();
//=======================================

// Spread operator
// const arr = [1, 2, 3];

// // const res = Math.max.apply(Math, arr);
// const res = Math.max(...arr);
// console.log(res);
//=======================================
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const res = Math.max(...arr1, 5, 7, 9, ...arr2);
// console.log(res);
//=======================================

// Destructuring
// const person = {
//   name: {
//     first: "Peter",
//     last: "Smith"
//   },
//   age: 27,
//   role: "admin"
// };

// const {
//   name: { first: firstName, last: lastName }
// } = person;
// console.log(firstName, lastName);

// // const { role = "user" } = person;
// const { permissions: { role = "user" } = {} } = person;
// console.log(role);
//=======================================

// function connect({ host = "localhost", port = "12345", user = "guest" } = {}) {
//   console.log("user: ", user, "port: ", port, "host: ", host);
// }
// // connect({
// //   host: "localhost",
// //   port: 1829,
// //   user: "peter"
// // });
// // connect({ port: 1111 });
// // connect(); // нужно хоть что-то передать
// connect(); // или нужно указать пустой парамент по умолчанию (пустой объект в function)
//=======================================

// const dictionary = {
//   duck: "quack",
//   dog: "wuff",
//   mouse: "squeak"
// };
// const { duck, ...otherAnimals } = dictionary;
// console.log(duck, otherAnimals)
//=======================================
