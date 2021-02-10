/* truthy와 falsy
문법보다는 개념에 가까움 */
function print(person) {
  if (!person) {
    //print();만 사용했을 경우 에러나지 않도록 함
    return;
  }
  console.log(person.name);
}

const person = {
  name: '경빈'
};

print(person);

/* JS에서 undefined와 null은 flasy한 값-false-이라고 생각함  */
