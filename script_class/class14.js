/* 반복문 - for */
for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

const names = ['멍멍이', '야옹이', '망뭉이', '아슬란'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

/* 반복문 - while */
let i = 0;

let isFun = false;

while (!isFun) {
  console.log(i);
  i++;
  if (i === 30) {
    isFun = true;
  }
}

/* 반복문 - for...of */

const numbers = [10, 20, 30, 40, 50];

for (let n of numbers) {
  console.log(n);
}

const doggy = {
  name: '아슬란',
  sound: '멍멍',
  age: 6
};

console.log(Object.keys(doggy));
console.log(Object.values(doggy));

for (let key in doggy) {
  console.log(key);
}
for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}

/* 반복문 - continue와 break */

for (let i = 0; i < 10; i++) {
  if (i === 2) continue; //다음에 나올 작업을 건너뛰고 반복문 실행
  console.log(i);
  if (i === 5) break; //반복문 아예 종료!
}

function sumOf(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);
