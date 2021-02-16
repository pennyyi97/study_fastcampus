/* async, await */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* async function process() {
  console.log('안녕하세요!');
  await sleep(1000);
  console.log('반갑습니다~');
} */
//함수에서 async 를 사용하면, 해당 함수는 결과값으로 Promise를 반환
async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process();
