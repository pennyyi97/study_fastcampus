/* 카운터 만들기 */
const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);

increase.onclick = () => {
  const current = parseInt(number.innerText, 10); //parseInt 는 문자열을 숫자로 변환해주는 함수, 10은 10진수를 의미
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
