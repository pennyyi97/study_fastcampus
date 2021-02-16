/* 비구조화 할당 */
const object = { a: 1 };

const { a, b = 2 } = object; //비구조화 할당에서 기본값을 설정할 때 직접 값 설정

console.log(a);
console.log(b);
//비구조화 할당시 이름 변경
const animal = {
  name: '멍멍이',
  type: '개'
};

const { name: nickname } = animal;
console.log(nickname);
console.log(animal);
//배열의 비구조화
const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);

//깊은 값 비구조화
const deepObject = {
  state: {
    information: {
      name: 'penny',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

//const { name, languages } = deepObject.state.information;
//const { value } = deepObject;

const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted);
