# 함수

## 1. 함수란?

프로그래밍 언어의 함수는 **일련의 과정을 문(statement)들로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것**이다. **입력을 전달받는 변수를 매개변수(parameter), 입력을 인수(argument),** 출력을 반환값(return value)이라 한다.

![1568282017458](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1568282017458.png)

함수는 함수 정의(Function Definition)를 통해 생성한다.

```javascript
// 함수 정의
function add(x, y) {
    return x + y;
}

// 함수 호출
var result = add(2, 5);

console.log(result); // 7
```



## 2. 함수의 이용

함수는 몇 번이든 호출할 수 있으므로 **코드의 재사용**이라는 측면에서 매우 유용하다.

코드의 중복을 억제하고 재사용성을 높이는 **함수는 유지보수의 편의성을 높이고 실수를 줄여 코드의 신뢰성을 높이는 효과가 있다.**



## 3. 함수 리터럴

함수 리터럴은 function 키워드, 함수 이름, 매개변수 목록 그리고 함수 몸체로 구성된다.

```javascript
// 변수에 함수 리터럴을 할당
var add = function add(x,y) {
    return x + y;
};
```

- 함수 이름
  - 함수 이름은 식별자이다. 따라서 식별자 네이밍 규칙을 준수해야 한다.
  - 함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다.
  - 함수 이름은 생략할 수 있다. 함수 이름이 있는 함수를 기명 함수(named function), 함수 이름이 없는 함수를 익명 함수(anonymous function)라 한다.
- 매개변수 목록
  - 0개 이상의 매개변수를 괄호로 감싸고 쉼표로 구분한다.
  - 매개변수에는 인수가 할당된다.
  - 매개변수는 함수 몸체 내에서 변수와 동일하게 취급된다. 따라서 매개변수도 변수와 마찬가지로 식별자 네이밍 규칙을 준수해야 한다.
- 함수 몸체
  - 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록이다.
  - 함수 몸체는 함수 호출에 의해 실행된다.

**함수는 객체다.** 함수가 객체라는 사실은 다른 프로그래밍 언어와 구별되는 자바스크립트의 중요한 특징이다. 함수는 객체이지만 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다. 그리고 **일반 객체에는 없는 함수 객체만의 고유한 프로퍼티를 갖는다.**



## 4. 함수 정의

함수를 정의하는 방법은 4가지가 있다.

- 함수 선언문(Function Declaration/Function Statement)

```javascript
function add(x ,y) {
    return x + y;
};
```

- 함수 표현식(Function Expression)

```javascript
var add = function (x, y) {
    return x + y;
};
```

- Function 생성자 함수(Fucntion Constructor)

```javascript
var add = new Function('x', 'y', 'return x + y');
```

- 화살표 함수(Arrow Function): ES6

```javascript
var add = (x, y) => x + y;
```



### 4.1 함수 선언문

함수 선언문(Function Declaration)은 함수 리터럴 표기법과 형태가 동일하다. 단, **함수 선언문은 함수 이름을 생략할 수 없다**.

`앞에서 살펴본 “3. 함수 리터럴”에서 “함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다”라고 했다. 이 말은 함수 이름 add를 함수 몸체 외부에서는 참조할 수 없다는 의미이다. 그렇다면 함수를 참조하고 호출할 때 사용한 add는 도대체 무엇인가? 함수 이름은 함수 몸체 외부에서 참조할 수 없는 식별자임에도 불구하고 함수 몸체 외부에서 참조하고 있다.

함수 선언문은 실행되어 함수 객체를 생성한다. 이때 생성된 함수 객체를 할당할 변수가 필요하다. **자바스크립트 엔진은 함수 이름과 동일한 이름의 식별자를 암묵적으로 선언하고 생성된 함수 객체를 할당한다.**

**함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 변수로 호출한다.** 



### 4.2 함수 표현식

앞에서 언급했듯이 자바스크립트의 함수는 객체이다. 자바스크립트의 객체는 값처럼 변수에 할당 할 수도 있고 프로퍼티의 값이 될 수도 있으며 배열의 요소가 될 수도 있다. 이러한 객체를 일급 객체([first-class object](https://ko.wikipedia.org/wiki/%EC%9D%BC%EA%B8%89_%EA%B0%9D%EC%B2%B4))라 한다. **자바스크립트의 함수는 일급 객체이다.** 함수가 일급 객체라는 것은 함수를 값처럼 자유롭게 사용할 수 있다는 의미다.

함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.

**함수 선언문은 표현식이 아닌 문이고 함수 표현식은 표현식인 문이다.**



### 4.3 함수 생성 시점과 함수 호이스팅

```javascript
// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};
```

위 예제와 같이, 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다. 그러나 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다. 이는 **함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르기 때문이다.**

함수 선언문으로 함수를 정의하면 자바스크립트 엔진에 의해 다른 코드가 실행되기 이전에 함수 이름과 동일한 이름의 변수를 암묵적으로 선언하고 함수 객체를 생성하여 할당한다. **즉, 다른 코드가 실행되기 이전에 이미 함수 객체가 생성되고 함수 이름과 동일한 변수에 할당까지 완료된 상태다.** 따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.

이처럼 **함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅(Function Hoisting)이라 한다.**  **함수 호이스팅은 선언 단계와 초기화 단계, 그리고 할당 단계(암묵적으로 선언된 변수에 함수 객체를 할당)까지 동시에 진행된다.**



**함수 표현식**은 **변수 할당문의 값이 함수 리터럴인 문**이다. 따라서 함수 표현식은 변수 선언문과 변수 할당문을 한번에 기술한 축약 표현과 **동일하게 동작**한다. 변수 선언은 **런타임 이전**에 실행되어 **undefined로 초기화**되지만, **변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가**되므로 **함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 된다.**



4.4 Function 생성자 함수

자바스크립트가 기본 제공하는 빌트인 함수인 Function 생성자 함수는 매개변수 목록과 함수 몸체를 문자열로 전달받는다.

> **생성자 함수(Constructor Function)**
>
> 생성자 함수는 객체를 생성하는 함수를 말한다. 객체를 생성하는 방식은 객체 리터럴 이외에 다양한 방법이 있다. 

Function 생성자 함수로 함수를 생성하는 방식은 일반적이지 않으며 바람직하지도 않다.

Function 생성자 함수로 생성한 함수는 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다. Function 생성자 함수 방식으로 생성한 함수는 클로저를 생성하지 않는다.



### 4.5 화살표 함수

ES6에서 새롭게 도입된 화살표 함수(Arrow function)는 function 키워드 대신 화살표(=>, Fat arrow)를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있다. 화살표 함수는 항상 익명 함수로 정의한다.

하지만 기존의 함수 선언문 또는 함수 표현식을 완전히 대체하기 위해 디자인된 것은 아니다. 따라서 모든 상황에서 화살표 함수를 사용할 수 있는 것은 아니다. **기존의 함수와 this 바인딩 방식이 다르고, prototype 프로퍼티가 없으며 arguments 객체를 생성하지 않는다.**



## 5. 함수 호출

함수는 함수를 참조하는 변수와 한 쌍의 소괄호인 함수 호출 연산자로 호출한다.



## 6. 매개변수와 인수

함수의 실행을 위해 함수 외부에서 함수 내부로 값을 전달할 필요가 있는 경우, 매개변수(parameter, 인자)를 통해 인수(argument)를 전달한다.

### ![1568373851813](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1568373851813.png)

매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다. 즉, 매개변수의 스코프(유효 범위)는 함수 내부이다.

함수를 호출할 때 매개변수의 개수만큼 인수를 전달하는 것이 일반적이지만 그렇지 않은 경우에도 에러가 발생하지는 않는다. 

```javascript
function add(x, y) {
    return x + y;
}

console.log(add(2)); // NaN
```

위 예제의 매개변수 x에는 인수 2가 전달되지만, 매개변수 y에는 전달할 인수가 없다. 따라서 매개변수 y는 undefined가 초기화된 상태 그대로이다. 따라서 함수 몸체의 문 `x + y`는 `2 + undefined`와 같으므로 NaN이 반환된다.

인수가 매개변수보다 더 많은 경우, 초과되는 인수는 무시된다.

> **arguments 객체**
>
> 사실 초과된 인수가 그냥 버려지는 것은 아니다. 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.

```javascript
function add(x,y) {
    console.log(arguments);
    // Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    
    return x + y;
}

add(2, 5, 7);
```



## 7. 인수 확인

```javascript
function add(x, y) {
  return x + y;
}

console.log(add(2));        // NaN
console.log(add('a', 'b')); // 'ab'
```

위 코드는 자바스크립트 문법상 어떠한 문제도 없으므로 자바스크립트 엔진은 아무런 이의 제기없이 위 코드를 실행할 것이다. 이러한 상황이 발생한 이유는 아래와 같다.

1. 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
2. 자바스크립트는 동적 타입 언어이다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정하지 않는다.

```javascript
function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('매개변수에 숫자 타입이 아닌 값이 할당되었습니다.');
    }
    return x + y;
}
```



## 8. 매개변수의 개수

매개변수는 순서에 의미가 있다. 따라서 매개변수가 많아지면 함수를 호출할 때 전달해야 할 인수의 순서를 고려해야 한다. 이는 함수의 사용 방법을 어렵게 만들고 실수를 발생시킬 가능성을 높인다.

함수의 매개변수는 코드 이해에 방해가 되는 요소이므로 이상적인 매개변수 개수는 0개이며 적을 수록 좋다. 이상적인 함수는 한가지 일만 해야 하며 가급적 작게 만들어야 한다.(클린 코드(로버트 C. 마틴 저)를 읽어보면 많은 것을 느낄 수 있다.)

따라서 매개변수는 최대 3개 이상을 넘지 않는 것을 권장한다. 만약 그 이상의 매개변수가 필요하다면 하나의 매개변수를 선언하고 객체를 인수로 전달받는 것이 유리하다. 



## 9. 외부 상태의 변경과 함수형 프로그래밍

매개변수도 함수 몸체 내부에서 변수와 동일하게 취급되므로 매개변수 또한 타입에 따라 값에 의한 전달, 참조에 의한 전달 방식을 그대로 따른다.

```javascript
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
}

// 외부 상태
var num = 100;
var person = { name: 'Lee' };

console.log(num); // 100
console.log(person); // {name: "Lee"}

// 원시값은 값 자체가 복사되어 전달되고 객체는 참조값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // {name: "Kim"}
```

참조에 의한 전달 방식을 통해 참조값이 공유되어 있는 객체는 언제든지 변경될 수 있다. 복잡한 코드에서 의도치 않은 객체의 변경을 추적하는 것은 어려운 일이다. 객체의 변경을 추적하려면 [Observer 패턴](https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4)으로 참조를 통해 객체를 공유하는 모든 이들에게 변경 사실을 통지하고 이에 대처하는 추가 대응이 필요하다.

이러한 문제의 해결 방법 중 하나는 객체를 불변 객체([immutable object](https://ko.wikipedia.org/wiki/%EB%B6%88%EB%B3%80%EA%B0%9D%EC%B2%B4))로 만들어 사용하는 것이다. 비용은 들지만 객체를 마치 원시 값처럼 변경 불가능한 값으로 동작하게 만드는 것이다. 

**함수형 프로그래밍에서는 어떤 외부 상태도 변경시키지 않는, 즉 부수 효과가 없는 함수를 순수 함수(Pure function), 외부 상태를 변경시키는 즉, 부수 효과가 있는 함수를 비순수 함수(Impure function)라고 부른다**

함수형 프로그래밍은 변수의 사용을 억제하여 상태 변경을 피하고 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하려는 프로그래밍 패러다임이다.  함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과(Side effect)를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 한 방법이라고 할 수 있다.



## 10. 반환문

```javascript
function multiply(x, y) {
  return x * y; // 값의 반환
}

// 함수는 반환값으로 평가된다.
var result = multiply(3, 5);

console.log(result); // 15
```

 **함수 호출은 표현식이다. 이때 함수 호출 표현식은 return 키워드가 반환한 값, 즉 반환값으로 평가된다.**

반환문의 두가지 역할

1. 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나간다. 따라서 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
2. 반환문은 return 키워드 뒤에 지정한 값을 반환한다. return 키워드 뒤에 반환값을 명시적으로 지정하지 않으면 undefined가 반환된다.

함수는 반환문을 생략할 수 있다. 이때 함수는 함수 몸체의 마지막 문까지 실행한 후 암묵적으로 undefined를 반환한다.



## 11. 다양한 함수의 형태



### 11.1 즉시 실행함수

**함수의 정의와 동시에 즉시 호출되는 함수**를 즉시 실행 함수(IIFE, Immediately Invoke Function Expression)라고 한다. 한번만 호출되며 다시 호출할 수는 없다. 즉시 실행 함수는 함수 이름이 없는 익명 즉시 실행 함수를 사용하는 것이 일반적이다.

그룹 연산자로 먼저 함수를 평가하여 함수 객체를 생성한 다음 함수를 호출한다. 그룹 연산자 뿐만 아니라 함수를 평가하여 함수 객체를 생성할 수 있는 방법은 다양하다. 

```javascript
(function () {
  // ...
}());

(function () {
  // ...
})();

!function () {
  // ...
}();

+function () {
  // ...
}();
```

즉시 실행 함수는 일반 함수처럼 값을 반환할 수 있고 인수를 전달할 수도 있다.

```javascript
var res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
}());

console.log(res); // 15

res = (function (a, b) {
  return a * b;
}(3, 5));

console.log(res); // 15
```

즉시 실행 함수 내에 코드를 모아 두면 혹시 있을 수도 있는 변수나 함수 이름이 충돌하는 것을 방지할 수 있다. 이를 위한 목적으로 즉시 실행 함수를 사용하기도 한다.



### 11.2 재귀 함수

함수가 자기 자신을 호출하는 것을 재귀 호출(recursive call)이라 한다. 재귀 함수(recursive function)는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.

```javascript
// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  return factorial(n - 1) * n;
}
```

재귀 함수는 자신을 무한히 연쇄 호출하므로 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다. 위 예제의 경우 인수가 1 이하일 때 재귀 호출을 멈춘다. 탈출 조건이 없는 경우, 함수가 무한 호출되어 stack overflow 에러가 발생한다.



### 11.3 중첩 함수

함수 내부에 정의된 함수를 중첩 함수(nested function) 또는 내부 함수(Inner function)라 한다. 일반적으로 중첩 함수는 자신을 포함하는 외부 함수(outer function)를 돕는 헬퍼 함수(helper function)의 역할을 한다. 



### 11.4 콜백 함수

자바스크립트의 함수는 일급 객체이므로 함수의 매개 변수에게 함수를 전달할 수 있다.

```javascript
// 콜백 함수를 전달받는 함수
function print(f) {
    var string = 'Hello';
    // 콜백 함수를 전달받는 함수가 콜백 함수의 호출 시기를 결정하고 호출
    return f(string);
}

// print 함수에 콜백 함수를 전달하면서 호출
var res1 = print(function (str) {
    return str.toUpperCase();
});

// print 함수에 콜백 함수를 전달하면서 호출
var res2 = print(function (str) {
  return str.toLowerCase();
});

console.log(res1, res2); // HELLO hello
```

print 함수에 인수로 전달된 함수를 콜백 함수(Callback function)라고 한다. 

콜백 함수가 콜백 함수를 전달받는 함수 내부에만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서 인수로 곧바로 전달하는 것이 일반적이다. 이때 콜백 함수로서 전달된 함수 리터럴은 콜백 함수를 전달받은 함수가 호출될 때 평가되어 생성된다.

단, **콜백 함수를 다른 곳에서도 호출할 필요가 있거나, 콜백 함수를 전달받는 함수가 자주 호출된다면 함수 외부에서 콜백 함수를 정의한 후 콜백 함수를 전달하는 편이 효율적이다.**

```javascript
// toUpperCase 함수는 단 한번만 생성된다.
var toUpperCase = function (str) {
  return str.toUpperCase();
};

// 콜백 함수를 전달
var res = print(toUpperCase);
console.log(res); // HELLO
```

**위 예제의 toUpperCase 함수는 단 한번만 생성된다. 하지만 콜백 함수를 익명 함수 리터럴로 정의하면서 인수로 곧바로 전달하면 콜백 함수를 전달받는 함수가 호출될 때마다 콜백 함수가 생성된다**.

**중첩 함수가 외부 함수를 돕는 헬퍼 함수의 역할을 하는 것처럼 콜백 함수는 함수에 전달되어 헬퍼 함수의 역할을 한다. 단, 중첩 함수는 고정되어 있어서 교체할 수 없지만 콜백 함수는 함수 외부에서 인수로 주입하기 때문에 자유롭게 교체할 수 있다는 장점이 있다.**

```javascript
// 콜백 함수를 사용하지 않으면 함수를 분리해야 한다.
function printToUpperCase() {
  var string = 'Hello';
  return string.toUpperCase();
}

console.log(printToUpperCase()); // HELLO

function printToLowerCase() {
  var string = 'Hello';
  return string.toLowerCase();
}

console.log(printToLowerCase()); // hello

// 콜백 함수를 외부에서 전달하면 콜백 함수에 따라 다양한 동작을 하는 함수를 만들 수 있다.
function print(f) {
  var string = 'Hello';
  return f(string);
}

console.log(print(function (str) {
  return str.toUpperCase();
})); // HELLO

console.log(print(function (str) {
  return str.toLowerCase();
})); // hello
```



콜백 함수는 비동기 처리를 위해 사용하는 일반적인 패턴으로 주로 이벤트 처리나 Ajax 통신에 사용된다.

```javascript
// 콜백 함수를 사용한 이벤트 처리
// myButton 버튼을 클릭하면 콜백 함수를 실행한다.
document.getElementById('myButton').addEventListener('click', function () {
  console.log('button clicked!');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지를 출력한다.
setTimeout(function () {
  console.log('1초 경과');
}, 1000);
```

뿐만 아니라 콜백 함수는 고차 함수(Higher-order Function)에서도 사용하는 패턴으로 사용 빈도가 매우 높고 중요한 패턴이다.

```javascript
// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(res); // [ 2, 4, 6 ]

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function (item) {
  return item % 2;
});

console.log(res); // [ 1, 3 ]
```



## 질문

1. 순수 함수란?

2. 함수형 프로그래밍이란?

3. ```javascript
   // 기명 즉시 실행 함수
   (function foo() {
     var a = 3;
     var b = 5;
     return a * b;
   }());
   
   foo();
   ```

   