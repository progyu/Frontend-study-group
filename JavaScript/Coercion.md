# 타입 변환과 단축 평가



## 1. 타입 변환이란?

개발자가 의도적으로 값의 타입을 변환하는 것을 **명시적 타입 변환(Explicit coercion)** 또는 **타입 캐스팅(Type casting)**이라 한다.

**동적 타입 언어**인 자바스크립트는 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다. 이를 **암묵적 타입 변환(Implicit coercion)** 또는 **타입 강제 변환(Type coercion)**이라고 한다.

변수의 값이 원시 타입의 값인 경우, 변수 값을 변경하려면 재할당 이외에는 변경할 방법이 없다.



## 2. 암묵적 타입 변환

자바스크립트 엔진은 표현식을 평가할 때 코드의 문맥을 고려하여 암묵적 타입 변환을 실행한다.



### 2.1 문자열 타입으로 변환

`+` 연산자는 피연산자 중 하나 이상이 문자열이면 문자열 연결 연산자로 동작한다. 

```javascript
0 + ''              // "0"
true + ''           // "true"
null + ''           // "null"
undefined + ''      // "undefined"
({}) + ''           // "[object Object]"
[10, 20] + ''       // "10,20"
```



### 2.2 숫자 타입으로 변환

산술 연산자의 역할은 숫자 값을 만드는 것이다. 

피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이 된다.

```javascript
1 / 'one'  // NaN
```

피연산자를 숫자 타입으로 변환해야 할 문맥은 산술 연산자 뿐만이 아니다. 

```javascript
'1' > 0 //true
```

**비교 연산자의 역할은 불리언 값을 만드는 것**이다. > 비교 연산자는 피연산자의 크기를 비교하므로 모든 피연산자는 코드의 문맥 상 모두 숫자 타입이여야 한다.



```javascript
+''             // 0
+'string'       // NaN
+null           // 0
+undefined      // NaN

// 객체 타입
+{}             // NaN
+[]             // 0 Truthy값이다.
+[10, 20]       // NaN
+(function(){}) // NaN
```



### 2.3 불리언 타입으로 변환

**자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 인식할 값) 또는 Falsy 값(거짓으로 인식할 값)으로 구분한다.** 

Falsy 값 7가지

- false
- undefined
- null
- 0, -0
- NaN
- ''(빈문자열)



## 3. 명시적 타입 변환

개발자의 의도에 의해 명시적으로 타입을 변경하는 방법은 다양하다. 원래는 래퍼 객체를 생성하기 위해 사용하는 **래퍼 객체 생성자 함수**(String, Number, Boolean)를 **new 연산자 없이 호출**하는 방법과 자바스크립트에서 제공하는 **빌트인 메소드**를 사용하는 방법, 그리고 앞에서 살펴본 **암묵적 타입 변환**을 이용하는 방법이 있다.

```javascript
var x = 100;

// 숫자를 문자열로 타입 캐스팅
// x는 숫자 타입의 원시 값이지만 객체처럼 동작한다.
var str = x.toString();

console.log(str); // "100"
```

이처럼 원시 값을 객체처럼 사용하면 자바스크립트 엔진은 원시값을 감싸는 객체, 즉 레퍼 객체를 생성한다. 레퍼 객체를 생성하는 함수를 래퍼 객체 생성자 함수라고 한다. 



### 3.1 문자열 타입으로 변환

문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법 3가지

1. String 생성자 함수를 new 연산자 없이 호출하는 방법
2. Object.prototype.toString 메소드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법

```javascript
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(String(1));        // "1"

// 2. Object.prototype.toString 메소드를 사용하는 방법
console.log((1).toString());        // "1"

// 3. 문자열 연결 연산자를 이용하는 방법
console.log(1 + '');        // "1"
```



### 3.2 숫자 타입으로 변환

숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법 4가지

1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
3. `+` 단항 연결 연산자를 이용하는 방법
4. `*` 산술 연산자를 이용하는 방법

```javascript
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Number('-1'));    // -1

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
console.log(parseInt('-1'));      // -1

// 3. + 단항 연결 연산자를 이용하는 방법
console.log(+'-1');    // -1

// 4. * 산술 연산자를 이용하는 방법
console.log('-1' * 1);    // -1
```





### 3.3 불리언 타입으로 변환

불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법 2가지

1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2. ! 부정 논리 연산자를 두번 사용하는 방법

```javascript
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean([]));        // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
console.log(!![]);        // true
```



## 4. 단축평가

 논리합(`||`) 연산자와 논리곱(`&&`) 연산자의 연산 결과는 불리언 값이 아닐 수도 있다. 이 두 연산자는 언제나 피연산자 중 어는 한쪽 값을 반환한다.

```javascript
// 논리합(||) 연산자
'Cat' || 'Dog'  // 'Cat'
false || 'Dog'  // 'Dog'
'Cat' || false  // 'Cat'

// 논리곱(&&) 연산자
'Cat' && 'Dog'  // Dog
false && 'Dog'  // false
'Cat' && false  // false
```

논리합(`||`) 연산자와 논리곱(`&&`) 연산자는 **논리 연산의 결과를 결정하는 피연산자를 그대로 반환한다.** 이를 단축 평가(Short-Circuit evaluation)라 부른다.



단축 평가의 유용한 패턴

- 객체가 null인지 확인하고 프로퍼티를 참조할 때

```javascript
console.log(elem.value); // TypeError: Cannot read property 'value' of null
console.log(elem && elem.value); // null
```

객체는 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합이다. 만약 객체가 null인 경우, 객체의 프로퍼티를 참조하면 타입 에러(TypeError)가 발생한다. 이때 단축 평가를 사용하면 에러를 발생시키지 않는다.



- 함수 매개변수에 기본값을 설정할 때

```javascript
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || '';
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2
```

함수를 호출할 때 인수를 전달하지 않으면 매개변수는 undefined를 갖는다. 이때 단축 평가를 사용하여 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.





## 질문

1. [10, 20] + ''  의 평가 결과는?

   A. "10,20"

2.  문맥 상 피연산자를 숫자 타입으로 변환해야 할 연산자 종류 두 가지는?

   A. 산술연산자, 비교연산자

3. 다음 중 평가 결과가 다른 것 하나는?

   1. +''
   2. +[]
   3. +null
   4. +undefined

4. Falsy 값 7 가지는 무엇인가?

   A. false, null, undefined, NaN, 0, -0, ''(빈문자열)

5. 숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법 4가지?

   A. 

   1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
   2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
   3. `+` 단항 연결 연산자를 이용하는 방법
   4. `*` 산술 연산자를 이용하는 방법

6. 논리합(`||`) 연산자와 논리곱(`&&`) 연산자는 [ ]를 그대로 반환한다. 

   A. 논리 연산의 결과를 결정하는 피연산자