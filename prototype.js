/**
 * 프로토타입
 * 
 * 자바스크립트는 프로토타입을 이용해 객체를 생성한다.
 * 객체를 생성할 때, 프로토타입을 찾을 수 있는 정보가 같이 만들어지고 `객체.prototype`으로 접근이 가능한다.
 * 
 * 프로토타입 체인
 * 인스턴스를 만든 조상과의 상속관계를 거슬러 올라가며 프로퍼티를 찾아가는 방식을 말한다. 
 */

// 생성자함수
function Mom() {
  this.name = '엄마';
  this.takeCare = function () {
    console.log('엄마는 나를 돌봐줘');
  }
}
console.log(Mom.prototype); // 자바스크립트가 어딘가에 만든 Mom의 프로토타입
/*
 {
  constructor: f Mom()
  [[Prototype]]: Object
 } 
 */
console.log(Mom === Mom.prototype); // false
console.log(Mom === Mom.prototype.constructor);// true

Mom.prototype.age = 50;
console.log(Mom.prototype);
/*
 {
  age: 50
  constructor: f Mom()
  [[Prototype]]: Object
 } 
 */
console.log(Mom);
/*
  ƒ Mom() {}
}
*/

let me = new Mom();
console.log(me instanceof Mom); // true
console.log(me instanceof Object); // true

Object.prototype.test = 'test'; // 최상위 조상의 프로토타입에 프로퍼티를 추가해도 프로토타입 체인으로 자식이 접근할 수 있다. 
console.log(me.test); // test

me.name = '나'
console.log(me)








