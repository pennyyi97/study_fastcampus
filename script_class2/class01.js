/* 삼항 연산자 */
const array = [];
let text = '';
//삼항연산자 미사용
if (array.length === 0) {
  text = '배열이 비어있습니다.';
} else {
  text = '배열이 비어있지 않습니다.';
}

//삼항연산자 사용
let text1 =
  array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';
console.log(text1);

//삼항연산자 중첩
const condition1 = false;
const condition2 = false;

const value = condition1 ? '와우!' : condition2 ? 'blabla' : 'foo'; //가급적 중첩하지 않는것이 좋음!

console.log(value);
