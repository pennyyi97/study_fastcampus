/* 프로토타입과 클래스 */

//객체 생성자
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};

Animal.prototype.sharedValue = 1;

const dog = new Animal('개', '아슬란', '멍멍');
const cat = new Animal('고양이', '나비', '야옹');

dog.sharedValue;
cat.sharedValue;

console.log(dog);
/* Animal {type: "개", name: "아슬란", sound: "멍멍", say: ƒ (), sharedValue: 1…} */
console.log(cat);
/* Animal {type: "고양이", name: "나비", sound: "야옹", say: ƒ (), sharedValue: 1…} */

dog.say();
cat.say();

//객체 생성자 상속
function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}
function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog('아슬란', '멍멍');
const cat = new Cat('나비', '야옹');

dog.say();
cat.say();

// 프로토 타입의 역할은 공유되는 함수나 값을 설정
