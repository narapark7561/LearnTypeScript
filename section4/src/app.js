"use strict";
// array & object destructuring
const hobbiess = ['Sports', 'Cooking'];
// const hobby1 = hobbie[0];
// const hobby2 = hobbie[1];
// 이 방법은 안에 배열이 많아지면 어렵다
// so,
const [hobby1, hobby2, ...remainHobbies] = hobbiess;
const mydog = {
    firstName: 'Chai',
    age: 3,
};
// object는 key기준으로 값을 빼기때문에 key이름으로써줘야해서 밑에건 에러가난다
// const { a, b } = mydog;
const { firstName: a, age } = mydog;
console.log(a, age); //output 'Chai 3'
