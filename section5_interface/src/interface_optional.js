"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!, there is no name! ');
        }
    }
}
let user1;
// user1 = new Person('Max'); //constructor 때문에 이게 name으로 들어간다.
user1 = new Person();
user1.greet('Hi, there! I am');
console.log(user1);
