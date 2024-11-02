// Union Type
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);
const combinedNames = combine('Chai', 'Nara');
console.log(combinedNames);

// alias
type Combinable = number | string;
function combine1(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges1 = combine(3, 26);
console.log(combinedAges1);
const combinedNames1 = combine('Chaiiii', 'Nara');

//Type aliases can be used to "create" your own types.
//You're not limited to storing union types though -
//you can also provide an alias to a (possibly complex) object type.
type Users = { name: string; age: number };
const u1: Users = { name: 'Max', age: 30 };

//for example, you can simplify this code
// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
