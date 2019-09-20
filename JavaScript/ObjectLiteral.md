# 객체 리터럴



## 1. 객체란?

원시 타입은 단 하나의 값만을 나타내지만 객체 타입(object / reference type)은 다양한 타입의 값(원시 타입의 값 또는 다른 객체)들을 하나의 단위로 구성한 **복합적인 자료 구조**(Data structure)이다. 또한 **원시 타입의 값, 즉 원시 값은 변경 불가능한 값(immutable value)이지만 객체 타입의 값, 즉 객체는 변경 가능한 값(mutable value)이다.**

자바스크립트의 객체는 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합이다.  자바스크립트의 **함수는 일급 객체**이므로 값으로 취급할 수 있다. 따라서 프로퍼티 값으로 함수를 사용할 수도 있으며 **프로퍼티 값이 함수일 경우**, 일반 함수와 구분하기 위해 **메소드**(Method)라 부른다.

객체는 데이터를 의미하는 프로퍼티와 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 메소드로 구성된 집합이다. 



## 2. 객체 리터럴에 의한 객체 생성

> **인스턴스**
>
> 인스턴스(intance)란 클래스에 의해 생성되어 메모리에 저장된 실체를 말한다. 클래스는 인스턴스를 생성하기 위한 템플릿의 역할을 한다. 인스턴스는 객체가 메모리에 저장되어 실제로 존재하는 것에 초점을 맞춘 용어이다.

하지만 자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 다른 다양한 객체 생성 방법이 존재한다.

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메소드
- 클래스 (ES6)

객체 리터럴은 중괄호({...}) 내에 **0개 이상**의 프로퍼티를 정의한다. **변수에 할당이 이루어지는 시점**에 객체 리터럴은 해석되고 그 결과 객체가 생성된다.

객체 리터럴은 표현식이 때문에 객체 리터럴의 닫는 중괄호 뒤에는 세미 콜론을 붙인다.

객체 리터럴 이외의 객체 생성 방식은 모두 함수를 사용해 객체를 생성한다.



## 3. 프로퍼티

**객체는 프로퍼티(Property)들의 집합이며 프로퍼티는 키(key)과 값(value)으로 구성된다.** 

프로퍼티 키와 프로퍼티 값으로 사용할 수 있는 값

- 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol값
- 프로퍼티 값 : 자바스크립에서 사용할 수 있는 모든 값

프로퍼티 키는 문자열이므로 따옴표(‘…’ 또는 “…”)로 묶어야 한다. 하지만 식별자 네이밍 규칙을 준수하는 이름, 즉 자바스크립트에서 사용 가능한 유효한 이름인 경우, 따옴표를 생략할 수 있다. 반대로 말하면 **식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용하여야 한다.** 



```javascript
var person = {
  first_name: 'Ung-mo', // 유효한 이름
  'last-name': 'Lee'    // 유효하지 않은 이름
};

console.log(person); // {first_name: "Ung-mo", last-name: "Lee"}
```



문자열 또는 문자열로 변환 가능한 값을 반환하는 표현식을 사용해 **프로퍼티 키를 동적으로 생성**할 수도 있다.

```javascript
var obj = {};
var key = 'hello';

// ES5 프로퍼티 키 동적 생성
obj[key] = 'world';

// ES6 프로퍼티 키 동적 생성
var obj = { [key]: 'world' };

console.log(obj); // { hello: "world" }
```

프로퍼티 키에 문자열이나 symbol 값 이외의 값을 사용하면 **암묵적 타입 변환**을 통해 문자열이 된다. 예를 들어, 프로퍼티 키로 숫자 리터럴을 사용하면 **따옴표는 붙지 않지만 내부적으로는 문자열로 변환된다.**



**이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다.** 이때 에러가 발생하지 않는 것에 주의하자.

```javascript
var foo = {
  name: 'Lee',
  name: 'Kim'
};

console.log(foo); // {name: "Kim"}
```





## 4. 메소드

프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드(Method)라 부른다.

```javascript
var circle = {
  radius: 5, // ← 프로퍼티

  // 원의 지름
  getDiameter: function () { // ← 메소드
    return 2 * this.radius; // this는 circle를 가리킨다.
  }
};

console.log(circle.getDiameter());  // 10
```

**메소드 내부에서 사용한 this 키워드는 객체 자신(위 예제에서는 circle 객체)을 가리키는 참조변수이다.**



## 5. 프로퍼티 접근

프로퍼티 값에 접근하려면 마침표(.) 연산자를 사용하는 **마침표 표기법(Dot notation)** 또는 대괄호([…]) 연산자를 사용하는 **대괄호 표기법(Bracket notation)**을 사용한다.

대괄호 표기법을 사용하는 경우, **대괄호 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.**자바스크립트 엔진은 대괄호 내의 따옴표로 감싸지 않은 이름을 프로퍼티 키로 인식하지 않고 식별자로 취급한다.

**객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.**

```javascript
var person = {
  'last-name': 'Lee',
  1: 10
};

console.log(person.'last-name');  // SyntaxError: Unexpected string
console.log(person.last-name);    // ReferenceError: name is not defined
console.log(person[last-name]);   // ReferenceError: last is not defined
console.log(person['last-name']); // Lee

// 프로퍼티 키가 숫자로 이루어진 문자열인 경우, 따옴표를 생략 가능하다.
console.log(person.1);     // SyntaxError: missing ) after argument list
console.log(person.'1');   // SyntaxError: Unexpected string
console.log(person[1]);    // 10 : person[1] -> person['1']
console.log(person['1']);  // 10
```



## 6. 프로퍼티 갱신

이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.



## 7. 프로퍼티 동적 생성

존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.



## 8. 프로퍼티 삭제

delete 연산자는 객체의 프로퍼티를 삭제한다. 이때 delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 한다. 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러없이 무시된다.



## 9. ES6에서 추가된 객체 리터럴의 확장 기능



### 9.1 프로퍼티 축약 표현

프로퍼티의 값은 변수에 할당된 값, 즉 식별자 표현식일 수도 있다.

```javascript
// ES5
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
};

console.log(obj); // {x: 1, y: 2}
```

ES6에서는 프로퍼티 값으로 변수를 사용하는 경우, 변수 이름과 프로퍼티 키가 동일한 이름일 때, 프로퍼티 키를 생략(Property shorthand)할 수 있다. 

```javascript
// ES6
let x = 1, y = 2;

const obj = { x, y };

console.log(obj); // {x: 1, y: 2}
```



### 9.2 프로퍼티 키 동적 생성

문자열 또는 문자열로 변환 가능한 값을 반환하는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수 있다. 단, 프로퍼티 키로 사용할 표현식을 대괄호([…])로 묶어야 한다. 이를 계산된 프로퍼티 이름(Computed property name)이라 한다.

ES5에서 프로퍼티 키를 동적으로 생성하려면 객체 리터럴 외부에서 대괄호([…]) 표기법을 사용해야 한다.

```javascript
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

// 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```



ES6에서는 객체 리터럴 내부에서도 프로퍼티 키를 동적으로 생성할 수 있다.

```javascript
// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 프로퍼티 키 동적 생성
var obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```



### 9.3 메소드 축약 표현

ES5에서 메소드를 정의하려면 프로퍼티 값으로 함수를 할당한다.

```javascript
// ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi!' + this.name);
	}
};

obj.sayHi(); // Hi! Lee
```



ES6에서는 메소드를 정의할 때, **function 키워드를 생략**한 축약 표현을 사용할 수 있다.

```javascript
// ES6
const obj = {
    name: 'Lee',
    sayHi() {
        console.log('Hi!' + this.name);
    }
};

obj.sayHi(); // Hi! Lee
```

ES6의 메소드 축약 표현으로 정의한 메소드는 프로퍼티에 할당한 함수와 다르게 동작한다.



## 질문

1. 다음 중 프로퍼티 키로 사용할 수 없는 것은?

   1. ''(빈문자열)
   2. '10'
   3. last-name
   4. first_name
   5. 'arr-length'
   6. 10

   A . 3번

2. ```javascript
   let shirt = {
     color: 'white',
     color: 'black'
   };
   
   console.log(foo); // ? { color: "black" }
   ```

3. ```javascript
   var foo = { name: 'Lee' };
   
   var bar = foo;
   
   bar.name = "kim";
   
   console.log(foo); // ? {name: "kim"}
   ```

4. ```javascript
   // 다음 ES5 문법을 ES6 문법으로 변환하시오.
   // ES5
   var obj = {
       name: 'Lee',
       sayHi: function() {
           console.log('Hi!' + this.name);
   	}
   };
   
   obj.sayHi(); // Hi! Lee
   ```

5. ``` javascript
   // 다음 ES6 문법을 Es5 문법으로 변환하시오.
   // ES6
   let x = 1, y = 2;
   
   const obj = { x, y };
   
   console.log(obj); // {x: 1, y: 2}
   ```

   