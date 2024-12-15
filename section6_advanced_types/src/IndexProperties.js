"use strict";
// interface ErrorContainer {
//   [prop: number]: string;
// }
// const errorBag: ErrorContainer = {
//   email: 'Not a valid email',
//   usernam: 'Must start with a capital character',
// };
// 이렇게 하면 에러가 난다. number로 키값을 설정했기때문에.
// interface ErrorContainer {
//     [prop: number]: string; // 키는 number, 값은 string 타입
//   }
//   const errorBag: ErrorContainer = {
//     404: 'Page not found', // 정상
//     500: 'Internal server error', // 정상
//     email: 'Not a valid email', // 오류: 키는 number만 가능
//   };
