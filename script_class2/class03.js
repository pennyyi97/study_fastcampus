/* 단축 평가 논리 계산법 */
console.log(true && 'hello'); // truthy && truthy
console.log(false && 'hello'); // falsy && truthy
console.log('hello' && 'bye'); // truthy && truthy
console.log(null && 'hello'); // falsy && truthy
console.log(undefined && 'hello'); // falsy && truthy
console.log('' && 'hello'); // falsy && truthy
console.log(0 && 'hello'); // falsy && truthy
console.log(1 && 'hello'); // truthy && truthy
console.log(1 && 1); // truthy && truthy

//&&연산자는 앞에 오는 값이 truthy한 값이면 뒤에 오는 값이 결과값

const dog = {
  name: '멍멍이'
};
function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName(dog);
console.log(name);

const namelessDog = {
  name: '아슬란'
};

function getNames(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다';
}

const names = getNames(namelessDog);
console.log(names);

console.log(false || 'hello'); // falsy && truthy
console.log('' || '이름없다'); // falsy && truthy
console.log(null || 'null이여~'); // falsy && truthy
console.log(undefined || 'defined되지 않았오'); // falsy && truthy
console.log(0 || '제로 입니당'); // falsy && truthy

console.log(1 || '음?'); // truthy && truthy
console.log(true || ' 여기 안봐여'); // truthy && truthy
console.log('와아' || '안본닥우'); // truthy && truthy
console.log([] || '노노노'); // truthy && truthy
//||연산자는 앞에 오는 값이 falsy한 값이면 뒤에 오는 값이 결과값, truthy한 값이면 뒤에 오는 값은 보지도 않는다!
