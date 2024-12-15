"use strict";
class Cats {
    constructor(n) {
        this.friends = [];
        this.name = n;
    }
    describe() {
        console.log(`This cat's name is ${this.name}`);
    }
    addFriend(friend) {
        this.friends.push(friend);
    }
}
const myCat = new Cats('Whiskers');
myCat.describe(); // 1번 출력
myCat.addFriend('Mittens');
myCat.describe(); // 2번 출력
console.log(myCat); // 전체 객체 출력
