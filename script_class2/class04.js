/* 함수의 기본 파라미터 */

function calculateCircleArea(r = 1) {
  //기본값으로 1을 사용
  return Math.PI * r * r;
}

//const calculateCircleArea = (r=1) => Math.PI *r *r;
const area = calculateCircleArea();
console.log(area);
