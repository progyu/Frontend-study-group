# 클래스

## 1. 클래스는 프로토타입의 문법적 설탕인가?

자바스크립트는 프로토타입 기반(prototype-based) 객체지향 언어다. 비록 다른 객체지향 언어들과의 차이점에 대한 논쟁이 있긴 하지만, 자바스크립트는 강력한 객체지향 프로그래밍 능력을 지니고 있다.

프로토타입 기반 객체 지향 언어는 클래스가 필요 없는(class-free) 객체지향 프로그래밍 언어이다. ES5에서는 클래스 없이도 아래와 같이 생성자 함수와 프로토타입 체인, 클로저를 사용하여 객체 지향 언어의 상속, 캡슐화(정보 은닉) 등의 개념을 구현할 수 있다.

```javascript
// ES5 생성자 함수
var Person = (function () {
  // 자유 변수이며 private하다
  var _name = '';

  // 생성자 함수
  function Person(name) { _name = name; }

  // 프로토타입 메소드. 이 메소드는 클로저이다.
  Person.prototype.sayHi = function () {
    console.log('Hi! My name is ' + _name);
  };

  // 생성자 함수 반환
  return Person;
}());

// 인스턴스 생성
var me = new Person('Lee');

// _name은 지역 변수이므로 외부에서 접근하여 변경할 수 없다. 즉, private하다.
// me 객체에는 _name 프로퍼티가 존재하지 않기 때문에 me._name 프로퍼티를 동적 추가뿐이다.
me._name = 'Kim';
me.sayHi(); // Hi! My name is Lee
```

ES6에서 새롭게 도입된 클래스는 기존 프로토타입 기반 객체지향 프로그래밍보다 Java나 C#과 같은 클래스 기반 객체지향 프로그래밍에 익숙한 프로그래머가 보다 빠르게 학습할 수 있도록 클래스 기반 객체지향 프로그래밍 언어와 매우 흡사한 새로운 객체 생성 매카니즘을 제시하고 있다.

그렇다고 ES6의 클래스가 기존의 프로토타입 기반 객체지향 모델을 폐지하고 새롭게 클래스 기반 객체지향 모델을 제공하는 것은 아니다. 사실 클래스는 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼 사용할 수 있도록 하는 [문법적 설탕(Syntactic sugar)](https://en.wikipedia.org/wiki/Syntactic_sugar)이라고 볼 수도 있다.

하지만 클래스와 생성자 함수가 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않는다. **클래스는 생성자 함수보다 엄격하며 클래스는 생성자 함수에서는 제공하지 않는 기능도 제공한다.**

클래스는 생성자 함수와 매우 유사하게 동작하지만 아래와 같이 몇가지 차이가 있다.

1. 클래스는 new 연산자를 사용하지 않고 호출하면 에러가 발행한다. 하지만 생성자 함수는 new 연산자를 사용하지 않고 호출하면 일반 함수로서 호출된다.
2. **클래스는 상속을 지원하는 extentds와 super 키워드를 제공한다.** 하지만 생성자 함수는 extentds와 super 키워드를 지원하지 않는다.
3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다. 하지만 생성자 함수는 함수 호이스팅이 발생한다.
4. **클래스의 모든 코드는 암묵적으로 strict 모드가 지정되어 실행**되며 strict 모드를 해지할 수 없다. 하지만 생성자 함수는 암묵적으로 strict 모드가 지정되지 않는다.
5. 클래스의 constructor, 프로토타입 메소드, 정적 메소드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이다. 다시 말해, 열거되지 않는다.



## 2. 클래스 정의

```javascript
// 클래스 선언문
class Person {}

일반적이지는 않지만, 함수와 마찬가지로 표현식으로 클래스를 정의할 수도 있다. 이때 클래스는 함수와 마찬가지로 이름을 가질 수도 있고, 갖지 않을 수도 있다.
// 익명 클래스 표현식
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass {};
```

클래스를 표현식으로 정의할 수 있다는 것은 클래스가 값으로 사용할 수 있는 일급 객체이라는 것을 의미한다. 

**클래스 몸체에는 0개 이상의 메소드만을 선언할 수 있다. 클래스 몸체에서 정의할 수 있는 메소드는 construnctor(생성자), 프로토타입 메소드, 정적 메소드 3가지가 있다.**



```javascript
// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메소드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메소드
  static sayHello() {
    console.log('Hello!');
  }
}

// 인스턴스 생성
const me = new Person('Lee');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// 프로토타입 메소드 호출
me.sayHi(); // Hi! My name is Lee
// 정적 메소드 호출
Person.sayHello(); // Hello!
```

**클래스 정의와 생성자 함수에 의해 인스턴스 생성 방식의 비교**

![1570492825237](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1570492825237.png)



## 3. 클래스 호이스팅

클래스 선언문도 변수 선언, 함수 정의와 마찬가지로 호이스팅이 발생한다. 단, 클래스는 let, const 키워드로 선언한 변수처럼 호이스팅된다. 따라서 클래스 선언문 이전에 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다.

var, let, const, function, function*, class 키워드를 사용하여 선언된 모든 식별자는 호이스팅된다. 모든 선언문은 런타임 이전에 먼저 실행되기 때문이다.



## 4. 인스턴스 생성

클래스는 인스턴스를 생성하는 것이 존재 이유이므로 반드시 new 연산자와 함께 호출하여야 한다.



## 5. 메소드

>**클래스 정의에 대한 새로운 제안 사양**
>
>2019년 8월 현재, 클래스 몸체에 메소드 뿐만이 아니라 프로퍼티를 직접 정의할 수 있는 새로운 표준 사양이 제안되어 있다. 현재 ECMAScript 사양에 따르면 인스턴스 프로퍼티는 반드시 constructor 내부에서 정의해야 한다. 하지만 제안된 새로운 표준 사양에 의해 머지않아 클래스 몸체에 프로퍼티도 정의할 수 있게 될 것으로 보인다.



### 5.1 constructor

constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메소드이다.

 클래스도 함수 객체 고유의 프로퍼티를 모두 갖고 있으며 함수와 동일하게 스코프 체인을 구성한다.
모든 함수 객체가 가지고 있는 prototype 프로퍼티가 가리키는 객체의 constructor 프로퍼티는 클래스 자신을 가리키고 있다. 이는 클래스가 인스턴스를 생성하는 생성자 함수라는 것을 의미한다. 즉, new 연산자와 함께 클래스를 호출하면 클래스는 인스턴스를 생성한다.

생성자 함수와 마찬가지로 constructor 내부에서 this에 추가한 프로퍼티는 인스턴스 프로퍼티가 된다. **constructor 내부의 this는 생성자 함수와 마찬가지로 클래스가 생성한 인스턴스를 가리킨다.**

> 클래스의 constructor 메소드와 Person.prototype.constructor
>
> 이름이 같아 혼동할 수 있으나 클래스 몸체에 정의한 constructor와 Person.prototype.constructor는 직접적인 관련이 없다. 프로토타입의 constructor 프로퍼티는 모든 프로토타입이 가지고 있는 프로퍼티이며 생성자 함수를 가리킨다.

constructor는 메소드로 해석되는 것이 아니라 클래스가 평가되어 생성한 함수 객체 코드의 일부가 된다. 다시 말해, 클래스 정의가 평가되면 constructor의 기술된 동작을 하는 함수 객체가 생성된다.



#### consturctor의 특징

- constructor는 클래스 내에 최대 한 개만 존재할 수 있다. 만약 클래스가 2개 이상의 constructor를 포함하면 문법 에러(SyntaxError)가 발생한다.

- constructor는 생략할 수 있다.

  ```javascript
  class Person {
  // constructor를 생략하면 암묵적으로 디폴트 constructor가 정의된다.
    constructor() {}
  }
  
  // 빈 객체가 생성된다.
  const me = new Person();
  console.log(me); // Person {}
  ```

  constructor를 생략한 클래스는 빈 객체를 생성한다. 프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.

  인스턴스를 생성할 때, 클래스 외부에서 인스턴스 프로퍼티의 초기값을 전달하려면 아래와 같이 constructor에 매개변수를 선언하고 인스턴스를 생성할 때 초기값을 전달한다. 이때 초기값은 constructor의 매개변수로 전달된다.

  ```javascript
  class Person {
    constructor(name, address) {
      // 인스턴스 초기화
      this.name = name;
      this.address = address;
    }
  }
  
  // 초기값을 전달한다. 초기값은 constructor에 전달된다.
  const me = new Person('Lee', 'Seoul');
  console.log(me); // Person {name: "Lee", address: "Seoul"}
  ```

  이처럼 constructor 내에서는 인스턴스의 생성과 동시에 인스턴스 프로퍼티 추가를 통해 인스턴스의 초기화를 실행한다. 따라서 인스턴스를 초기화하려면 constructor를 생략해서는 안된다.

- constructor는 별도의 반환문을 갖지 않아야 한다. 



### 5.2 프로토타입 메소드

클래스 몸체에서 정의한 메소드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 prototype 프로퍼티에 메소드를 추가하지 않아도 기본적으로 프로토타입 메소드가 된다.

```javascript
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 프로토타입 메소드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const me = new Person('Lee');
me.sayHi(); // Hi! My name is Lee
```

![1570503908168](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1570503908168.png)



### 5.3 정적 메소드

정적(static) 메소드는 인스턴스를 생성하지 않아도 호출할 수 있는 메소드를 말한다.

클래스 몸체에서 정의한 메소드에 static 키워드를 붙이면 정적 메소드(클래스 메소드)가 된다.

![1570504905750](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1570504905750.png)

정적 메소드는 클래스 자신의 메소드가 된다. 클래스는 함수 객체로 평가되므로 자신의 프로퍼티/메소드를 소유할 수 있다. 클래스는 코드가 평가되는 시점에 함수 객체가 되므로 별다른 인스턴스 생성 과정이 필요 없다. 따라서 정적 메소드는 클래스 정의 이후 인스턴스를 생성하지 않아도 호출할 수 있다. 정적 메소드는 프로토타입 메소드처럼 인스턴스로 호출하지 않고 클래스로 호출한다.

인스턴스의 프로토타입 체인 상에는 클래스가 존재하지 않기 때문에 인스턴스로 클래스의 메소드를 상속받을 수 없다.



### 5.4 정적 메소드와 프로토타입 메소드의 차이

1. 정적 메소드와 프로토타입 메소드가 속해 있는 프로토타입 체인이 다르다.
2. 정적 메소드는 클래스로 호출하고 프로토타입 메소드는 인스턴스로 호출한다.
3. 정적 메소드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메소드는 인스턴스 프로퍼티를 참조할 수 있다.

```javascript
class Square {
  // 정적 메소드
  static area(width, height) {
    return width * height;
  }
}

console.log(Square.area(10, 10)); // 100

const square = new Square();
square.area(); // TypeError: square.area is not a function
```

정적 메소드 area는 2개의 인수를 전달받아 면적을 계산한다. 이때 정적 메소드 area는 인스턴스 프로퍼티를 참조하지 않는다. 만약 인스턴스 프로퍼티를 참조해야 한다면 정적 메소드 대신 프로토타입 메소드를 사용해야 한다.

프로토타입 메소드는 인스턴스로 호출해야 하므로 프로토타입 메소드 내부의 this는 프로토타입 메소드를 호출한 인스턴스를 가리킨다.  정적 메소드는 클래스로 호출해야 하므로 정적 메소드 내부의 this는 인스턴스가 아닌 클래스를 가리킨다. 즉, 프로토타입 메소드와 정적 메소드 내부의 this는 가리키는 객체가 다르다.

물론 메소드 내부에서 this를 사용하지 않더라도 프로토타입 메소드로 정의할 수 있다. 하지만 반드시 인스턴스를 생성한 다음 인스턴스로 호출해야 하므로 this를 사용하지 않는 메소드는 정적 메소드로 정의하는 것이 좋다.

클래스 또는 생성자 함수를 하나의 네임 스페이스로 사용하여 정적 메소드를 모아 놓으면 이름 충돌 가능성을 줄여 주고 함수들을 구조화 할 수 있는 효과가 있다. 이와 같은 이유로 정적 메소드는 애플리케이션 전역에서 사용할 유틸리티 함수를 전역 함수로 정의하지 않고 메소드로 구조화할 때 유용하다.



### 5.5 클래스에서 정의한 메소드의 특징

1. function 키워드를 생략한 메소드 축약 표현을 사용한다.
2. 객체 리터럴과는 다르게 클래스에 메소드를 정의할 때는 콤마가 필요 없다.
3. 암묵적으로 strict 모드로 실행된다.
4. for…in 문이나 Object.keys 메소드 등으로 열거할 수 없다. 즉, 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이다.
5. 내부 메소드 [[Construct]]를 갖지 않는 non-constructor이다. 따라서 new 연산자와 함께 호출할 수 없다.



## 6. 클래스의 인스턴스 생성 과정

new 연산자와 함께 클래스를 호출하여 인스턴스를 생성하면 생성자 함수와 마찬가지로 클래스의 내부 메소드 [[Construct]]가 호출된다. 클래스는 new 연산자 없이 호출할 수 없다.

**1. 인스턴스 생성과 this 바인딩**

암묵적으로 빈 객체가 생성된다. 이 빈 객체가 바로 (아직 완성되진 않았지만) 클래스가 생성한 인스턴스이다. 이때 클래스가 생성한 인스턴스의 프로토타입으로 클래스의 prototype 프로퍼티가 가리키는 객체가 설정된다. 그리고 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다. 따라서 constructor 내부의 this는 클래스가 생성한 인스턴스를 가리킨다.

**2. 인스턴스 초기화**

constructor에 기술되어 있는 코드가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다. 즉, this에 바인딩되어 있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기값으로 인스턴스의 프로퍼티를 초기화한다.

**3. 프로토타입 / 정적 메소드 추가**

클래스 몸체에 프로토타입 메소드가 존재하면 클래스의 prototype 프로퍼티가 가리키는 객체에 메소드로 추가된다. 클래스 몸체에 정적 메소드가 존재하면 클래스에 메소드로 추가된다.

**4. 인스턴스 반환**

클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.



```javascript
class Person {
  // 생성자
  constructor(name) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
console.log(this); // Person {}
    console.log(Object.getPrototypeOf(this) === Person.prototype); // true

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.name = name;

    // 4. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }

  // 3. 프로토타입 메소드는 클래스의 prototype에 메소드로 추가된다.
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 3. 정적 메소드는 클래스에 메소드로 추가된다.
  static sayHello() {
    console.log('Hello!');
  }
```



## 7. 프로퍼티



### 7.1 인스턴스 프로퍼티

constructor 내부에서 this에 추가한 프로퍼티는 언제나 클래스가 생성한 인스턴스의 프로퍼티가 된다. ES6의 클래스는 다른 객체지향 언어처럼 private, public, protected 키워드와 같은 접근 제한자(access modifier)를 지원하지 않는다. 따라서 인스턴스 프로퍼티는 언제나 public하다. 다행히도 private한 프로퍼티를 정의할 수 있는 사양이 현재 제안 중에 있다. 



### 7.2 접근자 프로퍼티

접근자 프로퍼티(Accessor property)는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수(Accessor function)로 구성된 프로퍼티다.

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

// fullName는 접근자 프로퍼티이다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
// {get: ƒ, set: ƒ, enumerable: true, configurable: true}
```

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티이다.
  // getter 함수
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const me = new Person('Ungmo', 'Lee');

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${me.firstName} ${me.lastName}`); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
me.fullName = 'Heegun Lee';
console.log(me); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(me.fullName); // Heegun Lee

// fullName는 접근자 프로퍼티이다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}
```

접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수(Accessor function), 즉 getter 함수와 setter 함수로 구성되어 있다.

getter는 인스턴스 프로퍼티에 접근할 때마다 프로퍼티 값을 조작하는 행위가 필요할 때 사용한다. 

 setter는 인스턴스 프로퍼티에 값을 할당할 때마다 프로퍼티 값을 조작하는 행위가 필요할 때 사용한다.

getter는 호출하는 것이 아니라 프로퍼티처럼 참조하는 형식으로 사용하며 참조 시에 getter가 호출된다. setter는 호출하는 것이 아니라 프로퍼티처럼 값을 할당하는 형식으로 사용하며 할당 시에 setter가 호출된다.

getter는 이름 그대로 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야 하고 setter는 무언가를 프로퍼티에 할당해야 하므로 반드시 매개 변수가 있어야 한다. setter는 단 하나의 데이터 프로퍼티에 값을 할당하므로 단 하나의 매개 변수만을 선언할 수 있다.

 클래스의 접근자 프로퍼티 또한 인스턴스 프로퍼티가 아닌 프로토타입의 프로퍼티가 된다.



### 7.3 클래스 필드 정의 제안

클래스 필드(필드 또는 멤버)는 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어이다.

자바스크립트에서도 인스턴스 프로퍼티를 마치 클래스 기반 객체지향 언어의 클래스 필드처럼 정의할 수 있는 새로운 표준 사양인 [“Class field declarations”](https://github.com/tc39/proposal-class-fields#field-declarations)가 2019년 8월 현재, [TC39 프로세스](https://tc39.github.io/process-document)의 [stage 3(candidate)](https://github.com/tc39/proposals/blob/master/README.md)에 제안되어 있다.

> Technical Committee 39(TC39)
>
> Ecma 인터내셔널에는 ECMAScript 이외에도 다양한 기술의 사양을 관리하고 있고 이들 사양을관리하는 주체인 기술 위원회(Technical Committee)도 여럿 존재한다. 이 중 ECMA-262 사양(ECMAScript)의 관리를 담당하는 위원회가 바로 TC39이다. TC39는 Google, Apple, Microsoft, Mozilla 등 브라우저 벤더와 Facebook, Twitter와 같이 ECMA-262 사양(ECMAScript)를 제대로 준수해야 하는 기업으로 구성되어 있다.

> TC39 프로세스
>
> TC39 프로세스는 ECMA-262 사양(ECMAScript)에 새로운 표준 사양(제안. Proposal)을 추가하기 위해 공식적으로 명문화해 놓은 과정을 말한다. TC39 프로세스는 0 단계부터 4 단계까지 총 5개의 단계로 구성되어 있고 상위 단계로 승급하기 위한 명시적인 조건들이 존재한다. 승급 조건을 충족시킨 제안(Proposal)은 TC39의 동의를 통해 다음 단계(Stage)로 승급된다.
> TC39 프로세스는 아래의 단계를 거쳐 최종적으로 ECMA-262 사양(ECMAScript)의 새로운 표준 사양이 된다.
>
> stage 0: strawman => stage 1: proposal => stage 2: draft => stage 3: candidate => stage 4: finished
>
> stage 3(candidate)까지 승급한 제안은 심각한 문제가 없는 한 변경되지 않고 대부분 stage 4로 승급된다. stage 4(finished)까지 승급한 제안은 큰 이변이 없는 이상, 새로운 ECMAScript 버전에 포함된다. 현재 TC39 프로세스에 올라와 있는 제안을 확인하려면 [ECMAScript proposals](https://github.com/tc39/proposals)을 참고하기 바란다.

클래스 몸체에서 클래스 필드를 정의할 수 있는 클래스 필드 정의(Class field definitions) 제안은 아직 ECMAScript의 정식 표준 사양으로 승급 되지 않았다. 하지만 최신 브라우저(Chrome 72 이상)와 최신 Node.js(버전 12 이상)는 표준 사양으로 승급이 확실시되는 이 제안을 미리 구현해 놓았다. 따라서 최신 브라우저와 최신 Node.js에서는 아래 예제와 같이 클래스 필드를 클래스 몸체에 정의할 수 있다.

```javascript
class Person {
  // 클래스 필드 정의
  name = 'Lee';
}

const me = new Person('Lee');
console.log(me); // Person {name: "Lee"}
```

클래스 몸체에서 클래스 필드를 정의하는 경우, this에 클래스 필드를 바인딩해서는 안된다. this는 클래스의 메소드 내에서만 유효하다.

```javascript
class Person {
  // this에 클래스 필드를 바인딩해서는 안된다.
  this.name = ''; // SyntaxError: Unexpected token .
}
```

클래스 필드를 참조하는 경우, Java와 같은 클래스 기반 객체지향 언어에서는 this를 생략할 수 있으나 자바스크립트에서는 this를 반드시 사용해야 한다.

```javascript
class Person {
  // 클래스 필드
  name = 'Lee';

  constructor() {
    console.log(name); // ReferenceError: name is not defined
  }
}

new Person();
```

인스턴스를 생성할 때, 외부의 초기값으로 클래스 필드를 초기화해야 할 필요가 있다면 constructor에서 클래스 필드를 초기화해야 한다.

```javascript
class Person {
  constructor(name) {
    // 클래스 필드 초기화.
    this.name = name;
  }
}

const me = new Person('Lee');
console.log(me); // Person {name: "Lee"}
```

함수는 일급 객체이므로 클래스 필드에 할당할 수 있으므로 클래스 필드를 통해 메소드를 정의할 수도 있다.

```javascript
class Person {
  // 클래스 필드에 문자열을 할당
  name = 'Lee';

  // 클래스 필드에 함수를 할당
  getName = function () {
    return this.name;
  }
  // 화살표 함수로 정의할 수도 있다.
  // getName = () => this.name;
}

const me = new Person();
console.log(me); // Person {name: "Lee", getName: ƒ}
console.log(me.getName()); // Lee
```

이처럼 클래스 필드에 함수를 할당하는 경우, 이 함수는 프로퍼티 메소드가 아닌 인스턴스의 메소드가 된다. 모든 클래스 필드는 인스턴스 프로퍼티가 되기 때문이다. 따라서 클래스 필드에 함수를 할당하는 것은 권장하지 않는다.

클래스 필드 정의 제안으로 인해 인스턴스 프로퍼티를 정의하는 방식은 2가지가 되었다. 인스턴스를 생성할 때 외부 초기값으로 클래스 필드를 초기화할 필요가 있다면 기존의 constructor에서 인스턴스 프로퍼티를 정의하는 방식을 사용하고, 인스턴스를 생성할 때 외부 초기값으로 클래스 필드를 초기화할 필요가 없다면 기존의 constructor에서 인스턴스 프로퍼티를 정의하는 방식과 클래스 필드 정의 제안 모두 사용할 수 있다.



클래스 필드에 화살표 함수를 할당하여 이벤트 핸들러 내부의 this를 인스턴스에 바인딩되도록 하는 경우도 있다.

```html
<!DOCTYPE html>
<html>
<body>
  <div>0</div>
  <button>Click me</button>
  <script>
    class Counter {
      $button = document.querySelector('button');
      $div = document.querySelector('div');
      count = 0;

      constructor() {
        // increase 메소드를 이벤트 핸들러로 등록
        // 이벤트 핸들러 내부의 this는 HTML 엘리먼트를 가리킨다.
        // 하지만 increase는 화살표 함수로 정의되어 있으므로
        // increase 내부의 this는 인스턴스를 가리킨다.
        this.$button.onclick = this.increase;
      }

      // 인스턴스 메소드
      // 화살표 함수 내부의 this는 언제나 상위 컨텍스트의 this를 가리킨다.
      increase = () => this.$div.innerText = ++this.count;
    }
    new Counter();
  </script>
</body>
</html>
```



### 7.4 private 필드 정의 제안

constructor 내부에서 this를 통해 정의한 인스턴스 프로퍼티는 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다. 즉, 언제나 public이다.

ES6의 클래스는 다른 객체지향 언어처럼 private, public, protected 키워드와 같은 접근 제한자(access modifier)를 지원하지 않는다.

생성자 함수에서는 클로저를 사용하여 private한 프로퍼티를 흉내낼 수 있었다. 단 private한 프로퍼티를 흉내낸 자유 변수에 접근하면 에러가 발생하지 않고 undefined를 반환하므로 아쉬움이 남는다.

```javascript
// ES5
var Person = (function () {
  // 자유 변수이며 private하다
  var _name = '';

  // 생성자 함수
  function Person(name) { _name = name; }

  // 프로토타입 메소드. 이 메소드는 클로저이다.
  Person.prototype.sayHi = function () {
    console.log('Hi! My name is ' + _name);
  };

  // 생성자 함수를 반환
  return Person;
}());

// 인스턴스 생성
var me = new Person('Lee');

// _name에 접근할 수 없다.
console.log(me); // Person {}
```



하지만 클래스는 클래스 몸체에 변수를 선언할 수 없으므로 위 예제와 같은 방식으로 private한 프로퍼티를 흉내낼 수 없다.

```javascript
class Person {
  // 클래스 몸체에 변수를 선언할 수 없다.
  let name = ''; // SyntaxError: Unexpected identifier
}
```

다행히도 2019년 8월 현재 TC39 프로세스의 stage 3(candidate)에는 [private 필드를 정의할 수 있는 새로운 표준 사양이 제안](https://github.com/tc39/proposal-class-fields#private-fields)되어 있다. 표준 사양으로 승급이 확실시 되는 이 제안도 최신 브라우저(Chrome 74 이상)과 최신 최신 Node.js(버전 12 이상)에 이미 구현되어 있다.



```javascript
class Person {
  // private 필드 정의
  #name = '';

  constructor(name) {
// private 필드 참조
    this.#name = name;
  }
}

const me = new Person('Lee');

// private 필드 #name은 클래스 외부에서 참조할 수 없다.
console.log(me.#name);
// SyntaxError: Private field '#name' must be declared in an enclosing class
```

> **TypeScript**
>
> C#의 창시자인 덴마크 출신 소프트웨어 엔지니어 Anders Hejlsberg(아네르스 하일스베르)가 개발을 주도한 자바스크립트의 Superset(상위 확장)인 TypeScript는 클래스 기반 객체 지향 언어가 지원하는 **접근 제한자 public, private, protected를 모두 지원**하며 의미 또한 기본적으로 동일하다.



private 필드는 클래스 내부에서만 참조할 수 있다.

| 접근 가능성                 | public | private |
| --------------------------- | :----: | :-----: |
| 클래스 내부                 |   O    |    O    |
| 자식 클래스 내부            |   O    |    X    |
| 클래스 인스턴스를 통한 접근 |   O    |    X    |

즉, 부모 클래스를 포함한 클래스 외부에서 private 필드에 직접 접근할 수 있는 방법은 없다. **다만 접근자 프로퍼티를 통해 간접적으로 접근하는 방법은 유효하다.**

```javascript
class Person {
  // private 필드 정의
  #_name = '';

  constructor(name) {
    this.#_name = name;
  }

  // name은 접근자 프로퍼티이다.
  get name() {
    // private 필드를 참조하여 trim한 다음 반환한다.
    return this.#_name.trim();
  }
}

const me = new Person(' Lee ');

console.log(me.name); // "Lee"
```

private 필드는 반드시 클래스 몸체에 정의해야 한다. private 필드를 직접 constructor에 정의하면 에러가 발생한다.

```javascript
class Person {
  constructor(name) {
    // private 필드는 클래스 몸체에서 정의해야 한다.
    this.#name = name;
    // SyntaxError: Private field '#name' must be declared in an enclosing class
  }
}
```





### 7.5 static 필드 정의 제안

클래스에는 static 메소드를 정의할 수 있다. 하지만 static 필드를 정의할 수는 없었다. 하지만 static public 필드, static private 필드, static private 메소드를 정의할 수 있는 새로운 표준 사양인 [“Static class features”](https://github.com/tc39/proposal-static-class-features)이 2019년 8월 현재, TC39 프로세스의 stage 3(candidate)에 제안되어 있다. 이 제안 중에 static public/private 필드는 2019년 8월 현재, 최신 브라우저(Chrome 72 이상)과 최신 Node.js(버전 12 이상)에 이미 구현되어 있다.

```javascript
class MyMath {
  // static public 필드 정의
  static PI = 22 / 7;

  // static private 필드 정의
  static #num = 10;

  // static 메소드
  static increment() {
    return ++MyMath.#num;
  }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()); // 11
```



## 8. 상속에 의한 클래스 확장



### 8.1 클래스 상속과 생성자 함수 상속

![1570519849927](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1570519849927.png)

클래스와 생성자 함수는 인스턴스를 생성할 수 있는 함수라는 점에서 매우 유사하다. 하지만 클래스는 상속을 통해 기존의 클래스를 확장할 수 있는 문법이 기본적으로 제공되지만 생성자 함수는 그렇지 않다.

Animal 클래스는 동물의 속성을 표현하고 Bird, Lion 클래스는 상속을 통해 동물 클래스의 속성을 그대로 사용하고 자신만의 고유한 속성만을 추가하여 확장할 수 있다.

![1570520015788](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1570520015788.png)

```javascript
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() { return 'eat'; }

  move() { return 'move'; }
}

class Bird extends Animal {
  fly() { return 'fly'; }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat());  // eat
console.log(bird.move()); // move
console.log(bird.fly());  // fly
```

상속에 의해 확장된 클래스 Bird에 의해 생성된 인스턴스의 프로토타입 체인은 아래와 같다.S

![1570520125867](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1570520125867.png)

클래스는 상속을 통해 다른 클래스를 확장할 수 있는 문법인 extends 키워드가 기본적으로 제공된다.



### 8.2 extends 키워드

상속을 통해 클래스를 확장하려면 extends 키워드를 사용하여 상속받을 클래스를 정의한다.

```javascript
// 수퍼(파생/부모) 클래스
class Base {}

// 서브(파생/자식) 클래스
class Derived extends Base {}
```

extends 키워드의 역할은 수퍼 클래스와 서브 클래스 간의 상속 관계를 설정하는 것이다. 클래스도 프로토타입을 통해 상속 관계를 구현한다.

![1570520336197](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1570520336197.png)

**수퍼 클래스와 서브 클래스는 인스턴스의 프로토타입 체인 뿐만이 아니라, 클래스 간의 프로토타입 체인도 생성한다. 이를 통해 프로토타입 메소드, 정적 메소드 모두 상속이 가능하다.**



### 8.3 동적 상속

extends 키워드는 생성자 함수를 상속받아 클래스를 확장할 수도 있다. 단, extends 키워드 앞에는 반드시 클래스가 와야 한다.

```javascript
// 생성자 함수
function Base(a) {
  this.a = a;
}

// 생성자 함수를 상속받는 서브 클래스
class Derived extends Base {}

const derived = new Derived(1);
console.log(derived); // Derived {a: 1}
```

extends 키워드 다음에는 클래스뿐만이 아니라 [[Construct]] 내부 메소드를 갖는 함수 객체를 반환하는 모든 표현식을 사용할 수 있다. 이를 통해 동적으로 상속받을 대상을 결정할 수 있다.

```javascript
function Base1() {}

class Base2 {}

let condition = true;

// 조건에 따라 동적으로 상속 대상을 결정하는 서브 클래스
class Derived extends (condition ? Base1 : Base2) {}

const derived = new Derived();
console.log(derived); // Derived {}

console.log(derived instanceof Base1); // true
console.log(derived instanceof Base2); // false
```



### 8.4 서브 클래스의 constructor

서브 클래스에 constructor를 생략하면 클래스에 아래와 같이 디폴트 constructor가 암묵적으로 정의된다. **args는 new 연산자와 함께 클래스를 호출할 때 전달한 인수의 리스트이다**. **super()는 수퍼 클래스의 constructor(super-constructor)를 호출하여 인스턴스를 생성한다.**



### 8.5 super 키워드

super 키워드는 **함수처럼 호출**할 수도 있고 this와 같은 **식별자처럼 참조할 수 있는** 특수한 키워드이다. super는 아래와 같이 동작한다.

- **super를 호출하면 수퍼 클래스의 constructor(super-constructor)를 호출한다.**
- **super를 참조하면 수퍼 클래스의 메소드를 호출할 수 있다.**



#### super 호출

super를 호출하면 수퍼 클래스의 constructor(super-constructor)를 호출한다.

아래 예제와 같이 수퍼 클래스의 **constructor 내부에서 추가한 프로퍼티를 그대로 갖는 인스턴스를 생성**한다면 **서브 클래스의 constructor를 생략할 수 있다.** 이때 new 연산자와 함께 서브 클래스를 호출하면서 전달한 인수는 모두 서브 클래스에 암묵적으로 정의된 **디폴트 constructor의 super 호출을 통해 수퍼 클래스의 constructor에게 전달된다.**

```javascript
// 수퍼 클래스
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 서브 클래스
class Derived extends Base {
  // 아래와 같이 암묵적으로 디폴트 constructor가 정의된다.
  // constructor(a, b) { super(a, b); }
}

const derived = new Derived(1, 2);
console.log(derived); // Derived {a: 1, b: 2}
```



아래 예제와 같이 수퍼 클래스에서 추가한 프로퍼티와 서브 클래스에서 추가한 프로퍼티를 갖는 인스턴스를 생성한다면 서브 클래스의 constructor를 생략할 수 없다**.  수퍼 클래스의 constructor에게 전달할 필요가 있는 인수는 서브 클래스의 constructor에서 호출한 super를 통해 전달한다.**

```javascript
// 수퍼 클래스
class Base {
  constructor(a, b) { // ④
    this.a = a;
    this.b = b;
  }
}

// 서브 클래스
class Derived extends Base {
  constructor(a, b, c) { // ②
    super(a, b); // ③
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3); // ①
console.log(derived); // Derived {a: 1, b: 2, c: 3}
```

new 연산자와 함께 Derived 클래스를 호출하면서 전달한 인수(①)는 Derived 클래스의 constructor(②)에게 전달되고 super 호출(③)을 통해 Base클래스의 constructor(④)에게 전달된다.

**이처럼 인스턴스 초기화를 전달한 인수는 수퍼 클래스와 서브 클래스에 배분되고 되고 상속 관계의 두 클래스는 서로 협력하여 인스턴스를 생성한다.**



##### super를 호출할 때 주의사항

**1. 서브 클래스의 constructor에서는 반드시 super를 호출해야 한다.**

```javascript
class Base {}

class Derived extends Base {
  constructor() {
    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    console.log('constructor call');
  }
}

const derived = new Derived();
```

**2. 서브 클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다.**

```javascript
class Base {}

class Derived extends Base {
  constructor() {
    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.a = 1;
    super();
  }
}

const derived = new Derived(1);
```

**3. super는 반드시 서브 클래스의 constructor에서만 호출한다. 서브 클래스가 아닌 클래스 또는 함수에서 호출하면 에러를 발생시킨다.**

```javascript
class Base {
  constructor() {
    super(); // SyntaxError: 'super' keyword unexpected here
  }
}

function Foo() {
  super(); // SyntaxError: 'super' keyword unexpected here
}ss
```



#### super 참조

**1. 서브 클래스의 프로토타입 메소드 내에서 super.prop는 수퍼 클래스의 프로토타입 메소드 prop를 가리킨다.**

```javascript
// 수퍼 클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

// 서브 클래스
class Derived extends Base {
  sayHi() {
    // super.sayHi는 수퍼 클래스의 프로토타입 메소드를 가리킨다.
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived = new Derived('Lee');
console.log(derived.sayHi()); // Hi! Lee. how are you doing?
```

super는 자신이 바인딩되어 있는 객체의 프로토타입을 가리킨다. 위 예제에서 Derived 클래스의 sayHi는 Derived.prototype에 바인딩되어 있고 super는 Derived.prototype의 프로토타입인 Base.prototype을 가리킨다. 따라서 super.sayHi는 Base.prototype.sayHi를 가리킨다. 단, super.sayHi, 즉 Base.prototype.sayHi를 호출할 때 call 메소드를 사용해 this를 전달하여야 한다. Base.prototype.sayHi에는 name 프로퍼티가 존재하지 않기 때문이다.

이처럼 super 참조가 동작하기 위해서는 메소드는 자신이 바인딩되어 있는 객체의 프로토타입을 기억해야 한다. 이를 위해 메소드는 내부 슬롯 [[HomeObject]]를 갖으며 자신이 바인딩된 객체를 가리킨다.

super 참조를 의사 코드로 표현하면 아래와 같다.

```javascript
super = Object.getPrototypeOf([[HomeObject]])
```

주의할 것은 ES6 사양에서 새롭게 정의한 메소드, 즉 ES6의 메소드 축약 표현으로 정의된 함수만이 [[HomeObject]]를 갖는다는 것이다.

super 참조는 클래스의 전유물은 아니다. 객체 리터럴에서도 super 참조를 사용할 수 있다. 단, ES6의 메소드 축약 표현으로 정의된 함수만 가능하다.

```javascript
const base = {
  name: 'Lee',
  sayHi() {
    return `Hi! ${this.name}`;
  }
};

const derived = {
  __proto__: base,
  // ES6 사양에서 정의한 메소드이다. [[HomeObject]]를 갖는다.
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  }
};

console.log(derived.sayHi()); // Hi! Lee. how are you doing?
```



**2. 서브 클래스의 정적 메소드 내에서 super.prop는 수퍼 클래스의 정적 메소드 prop를 가리킨다.**

```javascript
// 수퍼 클래스
class Base {
  static sayHi() {
    return 'Hi!';
  }
}

// 서브 클래스
class Derived extends Base {
  static sayHi() {
    // super.sayHi는 수퍼 클래스의 정적 메소드를 가리킨다.
    return `${super.sayHi()} how are you doing?`;
  }
}

console.log(Derived.sayHi()); // Hi! how are you doing?
```



## 8.6 상속 클래스의 인스턴스 생성 과정

상속 관계에 있는 두 클래스가 어떻게 협력하며 인스턴스를 생성하는지 살펴보도록 하자. 

직사각형을 나타내는 Rectangle 클래스와 상속을 통해 Rectangle 클래스를 확장한 ColorRectangle 클래스를 정의해 보자.

```javascript
// 수퍼 클래스
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

// 서브 클래스
class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  // 메소드 오버라이딩
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle); // Rectangle { width: 2, height: 4, color: 'red' }

// 상속을 통해 getArea 메소드를 호출
console.log(colorRectangle.getArea()); // 8
// 오버라이딩된 toString 메소드를 호출
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red
```

서브 클래스(ColorRectangle)가 new 연산자와 함께 호출되면 아래의 과정을 통해 인스턴스를 생성한다.

**1. 서브 클래스의 super 호출**

자바스크립트 엔진은 클래스를 평가할 때, 수퍼 클래스와 서브 클래스를 구분하기 위해 내부 슬롯 [[ConstructorKind]]를 갖는다. 다른 클래스를 상속받지 않는 클래스(그리고 생성자 함수)는 내부 슬롯 [[ConstructorKind]]의 값이 “base”로 설정되지만 다른 클래스를 상속받는 서브 클래스는 내부 슬롯 [[ConstructorKind]]의 값이 “derived”로 설정된다. 이를 통해 수퍼 클래스와 서브 클래스는 new 연산자와 함께 호출되었을 때의 동작이 구분된다.

**서브 클래스는 암묵적으로 빈 객체, 즉 인스턴스를 생성하지 않고 인스턴스 생성을 수퍼 클래스에게 위임한다. 이것이 바로 서브 클래스의 constructor에서 반드시 super를 호출해야하는 이유이다.(super를 호출하면 수퍼 클래스의 constructor를 호출하기 때문에 수퍼 클래스의 constructor가 인스턴스를 생성한다.  즉, 실제로 인스턴스를 생성하는 주체는 수퍼 클래스이다.)**



**2. 수퍼 클래스의 인스턴스 생성과 this 바인딩**

**수퍼 클래스가 실행되기 시작하여 암묵적으로 빈 객체를 생성한다.** 이 빈 객체가 바로 (아직 완성되진 않았지만) **클래스가 생성한 인스턴스**이다.  따라서 수퍼 클래스의 constructor 내부의 this는 생성된 인스턴스를 가리킨다.

```javascript
// 수퍼 클래스
class Rectangle {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // ColorRectangle {}
    // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
    console.log(new.target); // ColorRectangle
...
```

실제로 인스턴스는 수퍼 클래스가 생성한 것이다. 하지만 인스턴스는 new.target이 가리키는 서브 클래스가 생성한 것으로 처리된다.

생성된 인스턴스의 프로토타입은 , 서브 클래스의 prototype 프로퍼티가 가리키는 객체(ColorRectangle.prototype)이다.

```javascript
// 수퍼 클래스
class Rectangle {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // ColorRectangle {}
    // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
    console.log(new.target); // ColorRectangle

    // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype가 설정된다.
    console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype); // true
    console.log(this instanceof ColorRectangle); // true
    console.log(this instanceof Rectangle); // true
...
```



**3. 수퍼 클래스의 인스턴스 초기화**

수퍼 클래스의 constructor가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다. 즉, this에 바인딩되어 있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기값으로 인스턴스의 프로퍼티를 초기화한다.



**4. 수퍼 클래스의 프로토타입 / 정적 메소드 추가**

수퍼 클래스 몸체에 프로토타입 메소드가 존재하면 수퍼 클래스의 prototype 프로퍼티가 가리키는 객체에 메소드로 추가된다. 수퍼 클래스 몸체에 정적 메소드가 존재하면 클래스에 메소드로 추가된다.



**5. 서브 클래스 constructor로의 복귀와 this 바인딩**

**super의 호출이 종료되고 컨트롤이 서브 클래스 constructor로의 복귀한다. 이때 super가 반환한 인스턴스가 this에 바인딩된다.** super 호출이 종료하기 전에는 this를 참조할 수 없다.
**서브 클래스는 별도의 인스턴스를 생성하지 않고 super가 반환한 인스턴스를 this에 바인딩하여 그대로 사용한다.**

```javascript
// 서브 클래스
class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);

    // super가 반환한 인스턴스가 this에 바인딩된다.
    console.log(this); // ColorRectangle {width: 2, height: 4}
...
```

서브 클래스 constructor 내부의 인스턴스 초기화는 반드시 super 호출 이후에 처리되어야 한다.

**6. 서브 클래스의 인스턴스 초기화**

this에 바인딩되어 있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기값으로 인스턴스의 프로퍼티를 초기화한다.



**7. 인스턴스 반환**

클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.



### 8.7 네이티브 생성자 함수 확장

 extends 키워드 다음에는 클래스뿐만이 아니라 [[Construct]] 내부 메소드를 갖는 함수 객체를 반환하는 모든 표현식을 사용할 수 있다. String, Number, Array와 같은 네이티브 생성자 함수도 [[Construct]] 내부 메소드를 갖는 함수이므로 extends 키워드를 사용하여 상속받을 수 있다. 

```javascript
// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
  // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
  average() {
    return this.reduce((pre, cur) => pre + cur) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray); // MyArray(4) [1, 1, 2, 3]

// MyArray.prototype.uniq 호출
console.log(myArray.uniq()); // MyArray(3) [1, 2, 3]
// MyArray.prototype.average 호출
console.log(myArray.average()); // 1.75
```

이때 주의할 것은 Array.prototype의 메소드 중에서 map, filter와 같이 새로운 배열을 반환하는 메소드가 MyArray 클래스의 인스턴스를 반환한다는 것이다.

만약 새로운 배열을 반환하는 메소드가 MyArray 클래스의 인스턴스를 반환하지 않고 Array의 인스턴스를 반환하면 MyArray 클래스의 메소드와 메소드 체이닝(method chaining)이 불가능하다.

```javascript
// 메소드 체이닝이 가능한 경우
// [1, 1, 2, 3] => [ 1, 1, 3 ] => [ 1, 3 ] => 2
console.log(myArray.filter(v => v % 2).uniq().average()); // 2
```



