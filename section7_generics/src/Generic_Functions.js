"use strict";
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    let decriptionText = 'Got no value';
    if (element.length === 1) {
        decriptionText = 'Got 1 elements';
    }
    else if (element.length > 1) {
        decriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, decriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
// keyof contraints
function extractAndConvert(obj, key) {
    return 'Value' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
