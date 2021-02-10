/* 프로토타입과 클래스 - ES6 Class */
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }

  say() {
    console.log(this.sound);
  }
}
/* const dog = new Animal('개', '아슬란', '멍멍');
const cat = new Animal('고양이', '나비', '야옹');
 */

class Dog extends Animal {
  constructor(name, sound) {
    super('개', name, sound);
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog = new Dog('아슬란', '멍멍');
const cat = new Cat('나비', '야옹');

dog.say();
cat.say();
