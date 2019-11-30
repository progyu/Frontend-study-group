## this



## 1. this 키워드

객체는 프로퍼티로 표현되는 상태 데이터와 메소드로 표현되는 동작을 하나의 논리적인 단위로 묶은 복합적인 자료 구조이다.

동작(Behavior)인 메소드는 자신이 속한 객체의 상태(State)를 나타내는 데이터인 상태 데이터, 즉 프로퍼티를 참조하고 상태를 변경할 수 있어야 한다. 이때 메소드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 **자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.**

생성자 함수 방식으로 인스턴스를 생성하는 경우

```javascript
function Circle(radius) {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  ????.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  return 2 * ????.radius;
};

// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
const circle = new Circle(5);
```

생성자 함수 내부에서는 프로퍼티 또는 메소드를 추가하기 위해 자신이 생성할 인스턴스를 참조할 수 있어야 한다. 하지만 생성자 함수에 의한 객체 생성 방식은 먼저 생성자 함수를 정의한 이후, new 연산자와 함께 생성자 함수를 호출하는 단계가 추가로 필요하다. 다시 말해, 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수가 존재해야 한다.

따라서 생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하기 이전이므로 생성자 함수가 생성할 인스턴스를 가리키는 식별자를 알 수 없다.

**this는 객체 자신의 프로퍼티나 메소드를 참조하기 위한 자기 참조 변수(Self-referencing variable)**이다. 함수를 호출하면 arguments  객체와 this가 암묵적으로 함수 내부에 전달된다. 함수 내부에서 arguments 객체를 지역 변수처럼 사용할 수 있는 것처럼 this도 지역 변수처럼 사용할  수있다. **단, this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.** 

> **바인딩(binding)**
>
> 바인딩이란 식별자와 값을 연결하는 과정을 의미한다. 예를 들어 변수는 할당에 의해 값이 바인딩된다.

```javascript
// 객체 리터럴
const circle = {
  radius: 5,
  getDiameter() {
    // this는 메소드를 호출한 객체를 가리킨다.
    return 2 * this.radius;
  }
};

console.log(circle.getDiameter()); // 10

// 생성자 함수
function Circle(radius) {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  return 2 * this.radius;
};

// 인스턴스 생성
const circle = new Circle(5);
console.log(circle.getDiameter()); // 10
```

Java, C++와 같은 클래스 기반 언어에서 this는 언제나 클래스로부터 생성되는 인스턴스를 가리킨다. 하지만 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값, 즉 this 바인딩이 동적으로 결정된다. 또한 엄격 모드(strict mode) 역시 this 바인딩에 영향을 준다.

```javascript
// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); // window

function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
  console.log(this); // window
  return number * number;
}
square(2);

const person = {
  name: 'Lee',
  getName() {
    // 메소드 내부에서 this는 메소드를 호출한 객체를 가리킨다.
    console.log(this); // {name: "Lee", getName: ƒ}
    return this.name;
  }
};
console.log(person.getName()); // Lee

function Person(name) {
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this); // Person { name: "Lee" }
  this.name = name;
}

const me = new Person('Lee');
```

하지만 this는 객체의 프로퍼티나 메소드를 참조하기 위한 자기 참조 변수이므로 일반적으로 객체의 메소드 또는 생성자 함수에서 의미가 있다. 따라서 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다. 일반 함수 내부에서 this를 사용할 필요가 없기 때문이다.



## 2. 함수 호출 방식과 this 바인딩

**this가 가리키는 값, 즉 this 바인딩은 함수의 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.**

> **렉시컬 스코프와 this 바인딩은 결정 시기가 다르다.**
>
> 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프(Lexical scope)는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다. this에 바인딩될 객체는 함수 호출 시점에 결정된다.

함수를 호출하는 방식

1. 일반 함수 호출
2. 메소드 호출
3. 생성자 함수 호출
4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출

```javascript
// this에 바인딩될 객체는 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
  console.dir(this);
};

// 동일한 함수도 다양한 방식으로 호출할 수 있다.

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// this는 전역 객체 window를 가리킨다.
foo(); // window

// 2. 메소드 호출
// foo 함수를 프로퍼티의 값으로 할당하여 호출
// this는 메소드를 호출한 객체 obj를 가리킨다.
const obj = { foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출
// this는 인수에 의해 결정된다.
const bar = { name: 'bar' };

foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar
```



### 2.1 일반 함수 호출

**기본적으로 this에는 전역 객체(Global object)가 바인딩된다.**

```javascript
function foo() {
  console.log("foo's this: ", this);  // window
  function bar() {
    console.log("bar's this: ", this); // window
  }
  bar();
}
foo();
```

위 예제처럼 전역 함수는 물론이고 중첩 함수를 **일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩된다.** 다만, this는 객체의 프로퍼티나 메소드를 참조하기 위한 자기 참조 변수이므로 객체를 생성하지 않는 일반 함수에서 this는 의미가 없다.



```javascript
// var 키워드로 선언한 변수 value는 전역 객체의 프로퍼티이다.
var value = 1;
// const 키워드로 선언한 변수 value는 전역 객체의 프로퍼티가 아니다.
// const value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this);  // {value: 100, foo: ƒ}
    console.log("foo's this.value: ", this.value); // 100

    // 메소드 내에서 정의한 중첩 함수
    function bar() {
      console.log("bar's this: ", this); // window
      console.log("bar's this.value: ", this.value); // 1
    }

    // 메소드 내에서 정의한 중첩 함수도 일반 함수로 호출되면
    // 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.
    bar();
  }
};

obj.foo();
```



콜백 함수 내부의 this에도 전역 객체가 바인딩된다. 어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩된다.

```javascript
var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // {value: 100, foo: ƒ}
    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log("callback's this: ", this); // window
      console.log("callback's this.value: ", this.value); // 1
    }, 100);
  }
};

obj.foo();
```

> **setTimeout 함수**
>
> setTimeout 함수는 두번째 매개변수에 전달한 시간(ms)만큼 대기한 다음, 첫번째 매개변수에 전달한 콜백 함수를 호출하는 타이머 함수이다.



**이처럼 일반 함수로 호출된 모든 함수(중첩 함수, 콜백 함수 포함) 내부의 this에는 전역 객체가 바인딩된다.**

하지만 메소드 내에서 정의한 중첩 함수 또는 메소드에게 전달한 콜백 함수(보조 함수)의 this가 전역 객체를 바인딩 하는 것은 문제가 있다. 중첩 함수 또는 콜백 함수(보조 함수)는 외부 함수를 돕는 헬퍼 함수로서 역할하므로 외부 함수의 일부 로직을 대신하는 경우가 대부분이다. 하지만 외부 함수인 메소드와 중첩 함수의 this가 일치하지 않는다는 것은 중첩 함수 또는 콜백 함수(보조 함수)를 헬퍼 함수로 동작하기 어렵게 만든다.

메소드 내부에서 setTimeout 함수에 전달된 콜백 함수의 this에는 전역 객체가 바인딩된다. 따라서 this.value는 객체 obj의 value 프로퍼티가 아닌 전역 객체의 value 프로퍼티, 즉 window. value를 참조한다. var 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 되므로 window. value은 1이다.

메소드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메소드의 this 바인딩과 일치시키기 위한 방법

```javascript
var value = 1;

const obj = {
  value: 100,
  foo() {
    // 콜백 함수에 명시적으로 this를 바인딩한다.
    setTimeout(function () {
      console.log(this.value); // 100
    }.bind(this), 100);
  }
};

obj.foo();
```



### 2.2 메소드 호출

메소드 내부의  this는 메소드를 호출한 객체, 즉 메소드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체에 바인딩 된다.

```javascript
const person = {
    name: 'Lee',
    getName() {
        //  메소드의 this는 메소드를 호출한 객체에 바인딩된다.
        return this.name;
    }
};

// 메소드 getName을 호출한 객체는 person이다.
console.log(person.getName()); // Lee
```



```javascript
const anotherPerson = {
  name: 'Kim'
};
// 메소드 getName을 anotherPerson 객체의 메소드로 할당
anotherPerson.getName = person.getName;

// 메소드 getName을 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName()); // kim

// 메소드 getName을 변수에 할당
const getName = person.getName;

// 메소드 getName을 일반 함수로 호출
console.log(getName()); // ''
// => getName 함수 내부에서 참조한 this.name은 window.name과 같다
// window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이다. window.name의 값은 ‘’이다.
// 만약 Node.js 환경에서 실행하면 undefined가 출력된다.
```

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person('Lee');
// getName 메소드를 호출한 객체는 me이다.
console.log(me.getName()); // ① Lee

Person.prototype.name = 'Kim';
// getName 메소드를 호출한 객체는 Person.prototype이다.
console.log(Person.prototype.getName()); // ② Kim
```



### 2.3 생성자 함수 호출

생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.

```javascript
// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```



### 2.4 Functio.prototype.apply/call/bind 메소드에 의한 간접 호출

Function.prototype.apply, Function.prototype.call 메소드는 인수로 this와 인수 리스트를 전달받아 함수를 호출한다. apply와 call 메소드는 Function.prototype의 메소드이다. 즉, apply와 call 메소드는 Function 생성자 함수를 constructor 프로퍼티로 가리키는 모든 함수가 상속받아 사용할 수 있다.



```javascript
function getThisBinding() {
  console.log(arguments);
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

// 함수(getThisBinding)를 호출하면서 인수로 전달한 객체를 호출한 함수의 this에 바인딩한다.
// apply 메소드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// { a: 1 }

// call 메소드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding.call(thisArg, 1, 2, 3));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// { a: 1 }
```

**apply와 call 메소드의 본질적인 기능은 함수를 호출하는 것이다.** apply와 call 메소드는 함수를 호출하면서 첫번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.

apply와 call 메소드의 대표적인 용도는 arguments 객체와 같은 유사 배열 객체에 배열 메소드를 사용하는 경우이다. arguments 객체는 배열이 아니기 때문에 Array.prototype.slice와 같은 배열의 메소드를 사용할 수 없으나 apply와 call 메소드를 이용하면 가능하다.

```javascript
function convertArgsToArray() {
  console.log(arguments);

  // arguments 객체를 배열로 변환
  // slice: 배열의 특정 부분에 대한 복사본을 생성한다.
  const arr = Array.prototype.slice.apply(arguments);
  // const arr = Array.prototype.slice.call(arguments);
  console.log(arr);

  return arr;
}

convertArgsToArray(1, 2, 3); // [ 1, 2, 3 ]
```

Function.prototype.bind 메소드는 apply와 call 메소드와는 달리 함수를 호출하지 않고 this로 사용할 객체만을 전달한다.

bind 메소드는 메소드의 this와 메소드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용된다.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  // ①
  callback();
};

function foo() {
  console.log(this.name); // ②
}

const person = new Person('Lee');

person.doSomething(foo); // ''
// =>  window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이다. window.name의 기본값은 ''이다.
// 만약 Node.js 환경에서 실행하면 undefined가 출력된다.
```

콜백 함수 foo가 호출되기 이전인 ①의 시점에서 this는 doSomething 메소드를 호출한 객체, 즉 person 객체를 가리킨다. 그러나 콜백 함수 foo가 일반 함수로서 호출된 ②의 시점에서 this는 전역 객체 window를 가리킨다. 따라서 foo 함수 내부에서 참조한 this.name은 window.name과 같다.

이때 위 예제에서 콜백 함수 foo는 외부 함수 doSomething를 돕는 헬퍼 함수(보조 함수)의 역할을 하기 때문에 외부 함수 doSomething 내부의 this와 콜백 함수 내부의 this가 상이하면 문맥상 문제가 발생한다.

따라서 콜백 함수 내부의 this를 콜백 함수를 호출하는 외부 함수 내부의 this와 일치시켜 주어야 한다. 이때 bind 메소드를 사용하여 this를 일치시킬 수 있다. 물론 apply와 call 메소드를 사용할 수도 있다.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  // ①
  callback.bind(this)();
  // callback.apply(this);
  // callback.call(this);
};

function foo() {
  console.log(this.name); // ②
}

const person = new Person('Lee');

person.doSomething(foo); // Lee
```



## 질문

1. 렉시컬 스코프와 this 바인딩이 결정되는 시기는 각각 언제인가?

답. 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점, this 바인딩은 함수 호출 시점에 동적으로 생성

2. bind 메소드는 [  ] 문제를 해결하기 위해 유용하게 사용된다.

답. 메소드의 this와 메소드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는

3. ```javascript
   function convertArgsToArray() {
     console.log(arguments);
   
     // arguments 객체를 배열로 변환하여 복사본을 생성하는 코드를 작성하여라.
     
     console.log(arr);
   
     return arr;
   }
   
   convertArgsToArray(1, 2, 3); // [ 1, 2, 3 ]
   ```

답. const arr = Array.prototype.slice.apply(arguments);

