/* 객체 안에 함수 넣기 */
const dog = {
  name: '멍멍이',
  sound: '멍멍!!',
  say: function say() {
    console.log(this.sound);
  }
};

/* //화살표 함수는 작동하지 않음. 화살표 함수는 this를 자신이 속한곳으로 연결하지 않음
const dog = {
  name: '멍멍이',
  sound: '멍멍!!',
  say: () => {
    console.log(this.sound);
  }
}; */

const cat = {
  name: '야옹이',
  sound: '미야오~'
};

cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say;
catSay(); //this가 뭔지 몰라서 undefined 가 뜨게 됨
