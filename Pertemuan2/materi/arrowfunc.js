// function Person() {
//   this.age = 0;
//   setInterval(function() {
//     this.age++;  // 'this' mengacu pada objek global, bukan pada objek 'Person'
//     console.log(this.age);
//   }, 1000);
// }

// const p = new Person();  // 'this' tidak sesuai dengan harapan


// -----

// function Person() {
//   this.age = 0;
//   setInterval(() => {
//     this.age++;  // 'this' mengacu pada objek 'Person' karena arrow function
//     console.log(this.age);
//   }, 1000);
// }

// const p = new Person();  // 'this' bekerja seperti yang diharapkan

// const greet = function(name) {
//   return "Hello, " + name;
// }

// const greet = name => "Hello, " + name;

// let apa = greet("Said Mazaya")
// console.log(apa)