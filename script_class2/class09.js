/* scope의 이해-scope 이해하기 
Global (전역) Scope: 코드의 모든 범위에서 사용 가능
Function (함수) Scope: 함수 안에서만 사용 가능
Block (블록) Scope: if, for, switch 등 특정 블록 내부에서만 사용 가능
*/

const value = 'hello!'; //global

function myFunction() {
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction() {
  //funcion scope
  console.log('otherFunction: ');
  const value = 'bye!';
  console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);

function myFunction1() {
  const value = 'bye!';
  const anotherValue = 'world';
  function functionInside() {
    console.log('functionInside: ');
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}

myFunction1();
console.log('global scope: ');
console.log(value);
//console.log(anotherValue); //함수 scope안에 있어서 나오지 않음

function myFunction2() {
  const value = 'bye!';
  if (true) {
    const value = 'world';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction2();
console.log('global scope: ');
console.log(value);

/* 
//var는 Function Scope 로 선언
//if문 내부에서 선언한 value 값이 블록 밖의 value 에도 영향을 미치게 됨
var value = 'hello!';

function myFunction() {
  var value = 'bye!';
  if (true) {
    var value = 'world';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value); */

console.log('====================================');
/* scope의 이해 - hoisting */
hoistingTest();

function hoistingTest() {
  console.log('hello world!');
}
//코드를 수정하기 어려우니 되도록 하지 말기

//let을 사용하면 hoisting 방지 가능
function fn() {
  console.log(a);
  let a = 2;
}
fn();
