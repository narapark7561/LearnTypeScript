// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // this preperty optional
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!, there is no name! ');
    }
  }
}

let user1: Greetable;
// user1 = new Person('Max'); //constructor 때문에 이게 name으로 들어간다.
user1 = new Person();

user1.greet('Hi, there! I am');
console.log(user1);
