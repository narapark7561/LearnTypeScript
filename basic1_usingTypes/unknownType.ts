let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

// unknown은 모든 값을 받을 수 있는 타입이지만, 사용 전에 반드시 타입 확인이 필요함
// any보다 안전하고, 타입 확인을 강제함으로써 타입 오류를 줄일수있음
// 예를 들어, userInput을 string 타입으로 좁혀야 userName에 안전하게 할당할 수 있음
