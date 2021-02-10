/* 배열 내장함수 - for Each */
const superheroes = [
  '아이언맨',
  '캡틴 아메리카',
  '토르',
  '캡틴마블',
  '블랙위도우'
];

function print(hero) {
  console.log(hero);
}

superheroes.forEach(print);
//더 짧은 코드
superheroes.forEach(function (hero) {
  console.log(hero);
});

//더더더 짧은 코드
superheroes.forEach((hero) => {
  console.log(hero);
});

/* 배열 내장함수 - map */
//배열 안의 원소를 변환할 때 사용

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squard = [];
for (let i = 0; i < array.length; i++) {
  squard.push(array[i] * array[i]);
}
//console.log(squard);

//forEach사용
array.forEach((n) => {
  squard.push(n * n);
});

//map 사용
const squared = array.map((n) => n * n);
//console.log(squared);

const items = [
  { id: 1, text: 'hello!' },
  { id: 2, text: 'byebye~~~' }
];

const text = items.map((item) => item.text);
//console.log(text);

/* 배열 원소의 위치를 알고싶을 때 indexOf 내장함수 사용 */

const index = superheroes.indexOf('토르');
console.log(index);

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  { id: 2, text: '함수 배우기', done: true },
  {
    id: 3,
    text: ' 객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수',
    done: false
  }
];
/* 특정 조건을 확인해서 일치하는 원소가 몇번째인지 알려주는 함수 === findIndex*/
const index1 = todos.findIndex((todo) => todo.id === 3);
const todo = todos.find((todo) => todo.id === 3);
console.log(todo);
console.log(index1);

/* 배열 내장함수 - filter 
특정 조건을 만족하는 원소를 찾아 그 원소들로 배열을 만드는 함수 */

const tasksNotDone = todos.filter((todo) => todo.done === false);
//더 짧게!
//const tasksNotDone = todos.filter((todo) => !todo.done);
console.log(tasksNotDone);

/* 배열 내장함수 - splice와 slice
splice : 배열에서 특정항목을 제거할 때 사용
*/
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);

numbers.splice(index, 1); //index번째(30)의 원소를 포함하여 개수(1개)를 센다! ∴ 30이 삭제된 10,20,40만 나오게 되는것!
console.log(numbers);

const slices = numbers.slice(0, 2);
console.log(slices);

/* 배열 내장함수 - shift, pop, unshift, push
shift: 첫번째 원소를 배열에서 추출
pop: 뒤에서 첫번째 원소를 배열에서 추출
unshift: 첫번째 원소 앞에 새로운 숫자 추가
 */

const numbers = [10, 20, 30, 40];
//const value = numbers.shift();
//const value = numbers.pop();
const value = numbers.unshift(1);
//console.log(numbers);

/* 배열 내장함수 - concat
concat: 여러개의 배열을 하나의 배열로 합체!
 */
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const concated = arr1.concat(arr2);
console.log(concated);

/* 배열 내장함수 - join
join: 배열 안의 값을 문자열 형태로 합체
 */
const array = [1, 2, 3, 4, 5];
console.log(array.join()); //1,2,3,4,5
console.log(array.join('!, ')); //1!, 2!, 3!, 4!, 5

/* 배열 내장함수 - reduce
reduce: 배열이 주어졌을 때배열 안의 모든 값을 사용하여 어떤 값을 연산해야할 경우 사용 */
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
/* 
1. 초기값 0 이 초기 accumulator가 됨
2. accumulator는 누적된 값을 의미함
3. current는 각 원소를 의미 */
console.log(sum);

//배열의 평균 구하기
const avg = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
/* 
1. 초기값 0 이 초기 accumulator가 됨
2. accumulator는 누적된 값을 의미함
3. current는 각 원소를 의미
4. index는 몇번째 원소인지를 의미함
5. array는 함수를 실행하고 있는 자기 자신을 의미 */
console.log(avg);

/* 배열 내장함수 - reduce (다른 예제) */
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});
console.log(counts);
/* reduce함수 너무 어려움!!!!!!!! */
