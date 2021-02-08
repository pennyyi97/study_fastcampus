function biggerThanThree(numbers) {
  /* 구현해보세요 */
  const array = [];
  for (let n of numbers) {
    if (numbers[n] > 3) array.push(numbers[n]);
  }
  return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

export default biggerThanThree;
