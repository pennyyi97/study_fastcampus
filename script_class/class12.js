/* getter/setter */
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    //console.log('sum 함수가 실행됩니다~!');
    return this.a + this.b;
  }
};

//console.log(numbers.sum);
numbers.b = 5;
//console.log(numbers.sum);

const dog = {
  _name: '멍멍이',
  set name(value) {
    //console.log('이름이 "' + value + '"로 바뀝니다..');
    this._name = value;
  }
};

//console.log(dog._name);
dog.name = '아슬란';
//console.log(dog._name);

const number = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('계산중.....');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
};

console.log(number.sum);
//값을 설정할때마다 calculate() 호출됨
number.a = 5;
number.b = 7;
number.a = 9;
console.log(number.sum);
console.log(number.sum);
console.log(number.sum);
