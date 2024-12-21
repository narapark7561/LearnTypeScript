// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.age);

// another generic function

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let decriptionText = 'Got no value';
  if (element.length === 1) {
    decriptionText = 'Got 1 elements';
  } else if (element.length > 1) {
    decriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, decriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));

// keyof contraints

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');
