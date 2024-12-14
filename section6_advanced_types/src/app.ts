interface ErrorContainer {
  //   [prop: string]: string;
  [prop: number]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  usernam: 'Must start with a capital character',
};

// 이렇게 하면 에러가 난다. number로 키값을 설정했기때문에.
