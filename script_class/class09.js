/* 화살표 함수 */
/* const add = (a, b) => {
  return a + b;
} */
//더 짧은 함수로 만들기
const add = (a, b) => a + b;
const sum = add(1, 2);
console.log(sum);

const hello = (name) => {
  console.log(`Hello, ${name}!`);
};
hello('penny');

/* 화살표 함수에서 가리키는 this의 값과 function에서 가리키는 this의 값이 다름 */
