"use strict";
// Speard Operator (...)
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    name: 'Max',
    age: 30,
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
//Rest parameter
const adding = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = adding(5, 10, 2, 3.7);
console.log(addedNumbers);
