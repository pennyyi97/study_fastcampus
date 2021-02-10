/* 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요. */
function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
  let count = numbers.reduce((acc, number) => {
    if (number > 10) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);
  return count;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

export default countBiggerThanTen;
