// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.age);
