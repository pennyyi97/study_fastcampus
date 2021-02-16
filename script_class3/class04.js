/* Promise all, Promise.race */
//promise all
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

/* async function process() {
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results);
} */
async function process() {
  const [dog, rabbit, turtle] = await Promise.all([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(dog);
  console.log(rabbit);
  console.log(turtle);
}
//Promise.all 를 사용 할 때에는, 등록한 프로미스 중 하나라도 실패하면, 모든게 실패 한 것으로 간주함

//promise race
async function process1() {
  const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(first);
}
process1();

//Promise.race 의 경우엔 가장 다른 Promise 가 먼저 성공하기 전에 가장 먼저 끝난 Promise 가 실패하면 이를 실패로 간주함
