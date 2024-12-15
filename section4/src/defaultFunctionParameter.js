"use strict";
//default functon  parameters
const add = (a, b = 1) => a + b; //giving default parameter
const printOutput = (output) => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => console.log(event));
}
printOutput(add(5));
//이렇게하면 에러가 안난다. 5를 자동으로 첫번째 parameter로인식하기떄문.
// 그렇지만
//const add = (a: number = 1, b: number) => a + b;
//이렇게하면 에러가 난다. 왜? 기본 매개변수를 갖는 매개변수는 항상 마지막에 있어야 하기 때문
