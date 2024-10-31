// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Chai',
//   age: 7,
// };

// console.log(person.name);

const person = {
  name: 'Chai',
  age: 7,
  hobbies: ['eat', 'play', 'sleep'],
};

for (const hobby of person.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); //map자체는 array에 쓸수있는데 여기서 string[]이라고 타입지정을 해도, for 문을 돌면 string으로인식해서 map을쓸수없다.
}

let favoriteActivities: string[];
// favoriteActivities = 'run'; -> getting error becuase type is array

favoriteActivities = ['Running'];

console.log(favoriteActivities);

//Tuple

const dog: {
  name: string;
  age: number;
  hobbies: string[];
  nickname: [number, string]; //tuple타입. 1번쨰요소는 넘버, 2번째요소는 string이여야한다.
} = {
  name: 'Chai',
  age: 4,
  hobbies: ['Eat', 'Play'],
  nickname: [2, 'Cutie'],
};

// dog.role[1] = 10; //에러가 난다 1번인덱스는 스트링이여야하기떄문!!
dog.nickname.push('Chasonge'); //push는 tuble에서 예외다! 허용이된다.
console.log(dog);
