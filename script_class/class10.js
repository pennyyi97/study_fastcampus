/* 객체 */
const ironMan = {
  name: '토니 스타크',
  actor: '로다주',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print(hero) {
  const { alias, name, actor } = hero; //객체 비구조화 할당
  const text = `${alias} (${name}) 역할을 맡은 배우는 "${actor}" 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
