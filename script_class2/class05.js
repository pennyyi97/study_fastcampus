/* 조건문 더 스마트하게 쓰기 */
function isAnimal(text) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return animals.includes(text);
}

console.log(isAnimal('개'));

/* function getSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === '고양이') return '야용~';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구';
  if (animal === '호랑이') return '어흥';
  return '...?';
} */
function getSound(animal) {
  const sounds = {
    개: '멍멍!',
    고양이: '미야오',
    참새: '짹짹',
    비둘기: '구구',
    호랑이: '어흥'
  };
  return sounds[animal] || '...?';
}
console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));

//객체 활용
function makeSound(animal) {
  const tasks = {
    개: () => {
      console.log('멍멍!');
    },
    고양이() {
      console.log('미야오~');
    },
    비둘기() {
      console.log('구국구ㅜ구구ㅜ');
    },
    호랑이() {
      console.log('어흥~!');
    }
  };
  const task = tasks[animal];
  if (!task) {
    console.log('...?');
    return;
  }
  task();
}
makeSound('개');
makeSound('비둘기');
makeSound('인간');
