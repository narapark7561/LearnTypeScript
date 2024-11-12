function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResultt(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
} //cb는 콜백함수

addAndHandle(10, 20, (result) => {
  console.log(result);
}); // output -> 30
