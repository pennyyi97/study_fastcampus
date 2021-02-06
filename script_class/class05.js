//=====조건문======
const a = 1;
if (a + 1 === 2) {
  const a = 2;
  console.log('if문 안의 a의 값은 ' + a);
}
console.log('if문 밖의 a의 값은 ' + a);
//다른 블록 범위에서는 같은 이름으로 선언 가능함
//var을 사용하면 a의 값이 동일함.

/* if else */
const b = 10;
if (b > 15) {
  console.log('b가 15보다 큽니다.');
} else {
  console.log('b가 15보다 크지 않습니다.');
}

if (b === 5) {
  console.log('5 입니다!');
} else if (b === 10) {
  console.log('10입니다!');
} else {
  console.log('5도 10도 아닙니당');
}
