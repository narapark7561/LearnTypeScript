"use strict";
// 문자열 배열을 선언 (타입을 명시적으로 지정)
const names = []; // string[]과 동일
// names[0].split(' ');
// 주석 처리된 부분: 현재 배열이 비어있기 때문에 실행 시 오류 발생 가능
// Promise를 생성 (비동기 작업을 처리하는 객체)
// 이 Promise는 성공적으로 완료되면 'string' 타입 값을 반환함
const promise = new Promise((resolve, reject) => {
    // setTimeout: 2초 후에 resolve를 호출해 Promise를 성공 상태로 만듦
    setTimeout(() => {
        resolve('Resolved!'); // 2초 후 문자열 'Resolved!'를 반환
    }, 2000);
});
// .then(): Promise가 성공적으로 완료되면 실행되는 콜백 함수
promise.then((data) => {
    // resolve에서 반환된 문자열 'Resolved!'를 공백 기준으로 나누어 배열로 만듦
    console.log(data.split(' ')); // 결과: ['Resolved!']
});
