/* 비동기 처리의 이해 */
//work 함수가 끝난 다음에 어떤 작업을 처리하려면 콜백 함수를 파라미터로 전달하기
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
    callback();
  }, 0);
}

console.log('작업 시작!');
work(() => {
  console.log('작업이 끝났어요!');
});
console.log('다음 작업');

/* 
비동기적으로 처리하는 것
1. Ajax Web API 요청: 만약 서버쪽에서 데이터를 받와아야 할 때, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 작업을 비동기적으로 처리
2. 파일 읽기: 주로 서버 쪽에서 파일을 읽어야 하는 상황
3. 암호화/복호화: 암호화/복호화를 할 때에도 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리
4. 작업 예약: 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는, setTimeout 을 사용하여 비동기적으로 처리 
*/
