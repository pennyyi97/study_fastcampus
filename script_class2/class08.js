/* spread와 rest-rest
rest와 spread는 반대의 역할 */
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime); //color를 제외한 나머지값이 들어가있음

//배열에서 rest
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers; //배열에서 rest는 맨 마지막에 와야 함

console.log(one);
console.log(rest);

//함수 파라미터에서 rest
/* function sum(a, b, c, d, e, f, g) {
  let sum = 0;
  if (a) sum += a;
  if (b) sum += b;
  if (c) sum += c;
  if (d) sum += d;
  if (e) sum += e;
  if (f) sum += f;
  if (g) sum += g;
  return sum;
} */
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
