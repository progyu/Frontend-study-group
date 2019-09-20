# 프로퍼티 정의



## 1. 프로퍼티 정의란?

프로퍼티 정의란 프로퍼티 어트리뷰트의 값을 정의하여 프로퍼티의 상태를 관리하는 것을 말한다.

예를 들어 프로퍼티 값을 갱신 가능하도록 할 것인지, 프로퍼티를 열거 가능하도록 할 것인지, 프로퍼티를 재정의 가능하도록 할 것인지 정의할 수 있다.

**자바스크립트 엔진은 프로퍼티를 생성(객체 리터럴의 평가, 프로퍼티 동적 생성)할 때, 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.**

```javascript
const obj = {};

// 자바스크립트 엔진은 프로퍼티를 생성할 때, 프로퍼티의 상태를 나타내는
// 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
obj.prop = 10;

// 정의된 프로퍼티 어트리뷰트는 Object.getOwnPropertyDescriptor 메소드로 확인할 수 있다.
var descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(descriptor);
// obj 객체의 prop 프로퍼티는 value, writable, enumerable, configurable
// 어트리뷰트가 정의되어 있다.
// {value: 10, writable: true, enumerable: true, configurable: true}
```

프로퍼티 정의는 프로퍼티 어트리뷰트를 정의하는 것을 말한다. 프로퍼티 어트리뷰트는 프로퍼티의 상태를 나타낸다. 프로퍼티의 상태란 프로퍼티의 값(value), 값의 갱신 가능 여부(writable), 열거 가능 여부(enumerable), 재정의 가능 여부(configurable)를 말한다.

프로퍼티 어트리뷰트는 `Object.getOwnPropertyDescriptor` 메소드를 사용해 참조할 수 있다. 이 메소드는 프로퍼티 어트리뷰트 정보를 제공하는 객체인 **프로퍼티 디스크립터(PropertyDescriptor)**를 반환한다.

```javascript
// ES8
// 모든 프로퍼티 어트리뷰트를 표현하는 프로퍼티 디스크립터 객체를 취득한다.
var descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
// {
//   prop: { value: 10, writable: true, enumerable: true, configurable: true }
// }
```



## 2. 내부 슬롯/메소드

내부 슬롯(Internal slot)과 내부 메소드(Internal method)는 ECMAScript 스펙에서 요구하는 객체와 관련된 내부 상태와 내부 동작을 정의한 것이다.

내부 슬롯과 내부 메소드는 객체의 프로퍼티가 아니다. 따라서 내부 슬롯과 내부 메소드는 직접적으로 접근하거나 호출할 수 있는 방법을 원칙적으로 제공하지 않는다. 단, 일부 내부 슬롯과 내부 메소드(의 구현체)에 간접적으로 접근할 수 있는 수단은 있다.

 모든 객체가 갖고 있는 내부 메소드 [`[[Get\]]`](https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots-get-p-receiver)

이 내부 메소드는 프로퍼티 키로 프로퍼티 값에 접근하면 내부적으로 호출된다. 내부 메소드 [[Get]]의 동작을 파악하면 자바스크립트 엔진이 어떻게 프로퍼티 키로 프로퍼티 값에 접근하는지 파악할 수 있다.  [[Get]] 내부 메소드는 아래와 같이 동작한다.

1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심볼이어야 한다.
2. 프로토타입 체인에서 프로퍼티를 검색한다.

1. 검색된 프로퍼티가 "**데이터 프로퍼티(Data property)**"라면 프로퍼티 값, 즉 데이터 프로퍼티의 프로퍼티 어트리뷰트 [[Value]]의 값을 그대로 반환한다.
2. 만약 프로퍼티가 "**접근자 프로퍼티(Accessor property)"**라면 접근자 프로퍼티의 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수를 호출하여 그 결과를 반환한다.
3. 검색된 프로퍼티가 "**데이터 프로퍼티(Data property)**"라면 프로퍼티 값, 즉 데이터 프로퍼티의 프로퍼티 어트리뷰트 [[Value]]의 값을 그대로 반환한다.
4. 만약 프로퍼티가 "**접근자 프로퍼티(Accessor property)"**라면 접근자 프로퍼티의 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수를 호출하여 그 결과를 반환한다.



> 프로토타입과 프로토타입 체인
>
> **프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체이다.** **프로토타입은 하위(자식) 객체에게 자신의 프로퍼티와 메소드를 상속한다.** 프로토타입 객체의 프로퍼티나 메소드를 상속받은 하위 객체는 자신의 프로퍼티 또는 메소드인 것처럼 자유롭게 사용할 수 있다.
> **프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조**를 말한다. 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 프로토타입 체인을 따라 프로토타입의 프로퍼티나 메소드를 차례대로 검색한다.



## 3. 접근자 프로퍼티

프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

- 데이터 프로퍼티(Data property)

  키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.

- 접근자 프로퍼티(Accessor property)

  자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수(Accessor function)로 구성된 프로퍼티다.

  

접근자 함수는 getter/setter 함수라고도 부른다. 접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수도 있고 하나만 정의할 수도 있다. 

```javascript
const person = {
  // 데이터 프로퍼티
  firstName: 'Ungmo',
  lastName: 'Lee',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티이다.
  // getter 함수
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(person.firstName + ' ' + person.lastName); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'Heegun Lee';
console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

// firstName는 데이터 프로퍼티이다.
// 데이터 프로퍼티는 value, writable, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
// {value: "Heegun", writable: true, enumerable: true, configurable: true}

// fullName는 접근자 프로퍼티이다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
// {get: ƒ, set: ƒ, enumerable: true, configurable: true}
```



person 객체의 firstName과 lastName 프로퍼티는 일반적인 데이터 프로퍼티다. 메소드 앞에 get, set이 붙은 메소드가 있는데 이것들이 바로 getter와 setter 함수이고 getter/setter 함수의 이름 fullName이 접근자 프로퍼티이다. 접근자 프로퍼티는 자체적으로 값(value 프로퍼티 어트리뷰트)을 가지지 않으며 다만 데이터 프로퍼티의 값을 읽거나 저장할 때 관여할 뿐이다.



```javascript
// 일반 객체의 __proto__는 접근자 프로퍼티이다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 함수 객체의 prototype은 데이터 프로퍼티이다.
Object.getOwnPropertyDescriptor(function() {}, 'prototype');
// {value: {…}, writable: true, enumerable: false, configurable: false}
```



## 4. 프로퍼티 어트리뷰트

모든 프로퍼티, 즉 데이터 프로퍼티와 접근자 프로퍼티는 자신의 상태와 동작을 정의한 내부 슬롯/메소드를 가지고 있다. 이들을 프로퍼티 어트리뷰트(property attribute)라 한다

```javascript
Object.defineProperty 메소드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다. 인수는 객체의 참조와 데이터 프로퍼티의 키인 문자열 그리고 프로퍼티 디스크립터 객체를 전달한다.
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Ungmo',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'lastName', {
  value: 'Lee'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);
// firstName {value: "Ungmo", writable: true, enumerable: true, configurable: true}

// [[Enumerable]]의 값이 false인 경우,
// 해당 프로퍼티는 for…in 문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person)); // ["firstName"]

// [[Writable]]의 값이 false인 경우, 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// 에러는 발생하지 않고 무시된다.
// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
person.lastName = 'Kim';

// [[Configurable]]의 값이 false인 경우, 해당 프로퍼티를 삭제할 수 없다.
// 에러는 발생하지 않고 무시된다.
// lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없다.
delete person.lastName;
```

Object.defineProperty 메소드는 한번에 하나의 프로퍼티만 정의할 수 있다. Object.defineProperties 메소드를 사용하면 여러 개의 프로퍼티를 한번에 정의할 수 있다.

```javascript
const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  // 접근자 프로퍼티 정의
  fullName: {
    // getter 함수
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    // setter 함수
    set: function (name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
  }
});

person.fullName = 'Heegun Lee';
console.log(person); // {firstName: "Heegun", lastName: "Lee"}
```



## 질문

1. 접근자 프로퍼티(Accessor property)란 무엇인가?

   A.  자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수(Accessor function)로 구성된 프로퍼티다.

2. 다음 중 접근자 프로퍼티의 프로퍼티 어트리뷰트가 아닌 것을 고르시오.

   1. value
   2. get
   3. writable
   4. enumerable
   5. configurable

   A. 3

3. ```javascript
   const person = {};
   
   // 데이터 프로퍼티 정의
   Object.defineProperty(person, 'lastName', {
     value: 'Lee'
   });
   
   console.log(Object.keys(person)); // ?
   
   person.lastName = 'Kim';
   
   console.log(person.lastName); // ?
   ```

   A . [], Lee