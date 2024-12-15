"use strict";
// // interface Greetable {
// //   name: string;
// //   greet(phrase: string): void;
// // }
// interface Greetable {
//   readonly name: string;
//   greet(phrase: string): void;
// }
// class Person implements Greetable {
//   name: string;
//   age = 30;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }
// let user1: Greetable;
// user1 = new Person('Max'); //constructor 때문에 이게 name으로 들어간다.
// // user1.name = 'nara'; //getting error bcuz 'readonly'
// // age도 초기화를 하고싶은가?
// // constructor(name: string, age: number) {
// //     this.name = name; // name 초기화
// //     this.age = age;   // age 초기화
// //   }
// user1.greet('Hi, there! I am');
// console.log(user1);
// // output -> Hi, there! I am Max
