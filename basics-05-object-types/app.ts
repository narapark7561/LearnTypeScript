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
  console.log(hobby.map()); //map자체는 array에 쓸수있는데 여기서 string[]이라고 타입지정을 해도, for 문을 돌면 string으로인식해서 map을쓸수없다.
}

let favoriteActivities: string[];
// favoriteActivities = 'run'; -> getting error becuase type is array

favoriteActivities = ['Running'];

console.log(favoriteActivities);
