function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   console.log(typeof number1);
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number9: number;
number9 = 5;
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
console.log(add(number1, number2, printResult, resultPhrase));
