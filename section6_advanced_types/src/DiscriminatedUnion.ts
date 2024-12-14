interface Bird {
  type: 'bird'; // 공통 속성 (Discriminant)
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // 공통 속성 (Discriminant)
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (
    animal.type // Discriminant를 사용해 타입 좁히기
  ) {
    case 'bird':
      console.log('Flying at speed:', animal.flyingSpeed); // Bird 타입
      break;
    case 'horse':
      console.log('Running at speed:', animal.runningSpeed); // Horse 타입
      break;
  }
}

moveAnimal({ type: 'bird', flyingSpeed: 20 }); // "Flying at speed: 20"
moveAnimal({ type: 'horse', runningSpeed: 50 }); // "Running at speed: 50"
