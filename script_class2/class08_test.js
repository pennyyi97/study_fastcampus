/* 함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요. */
function max(...numbers) {
  return numbers.reduce(
    (acc, current) => (current > acc ? current : acc),
    numbers[0]
  );
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);

// 테스트 코드에서 불러오기 위하여 사용하는 코드
export default max;
