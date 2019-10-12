# 전역 객체

전역 객체(Global Object)는 어떤 객체보다도 먼저 생성되며 어떤 객체에도 속하지 않은 최상위 객체이다.  전역 객체는 일반 객체와는 다른 특수한 객체이다.

- 전역 객체는 개발자가 의도적으로 생성할 수 없다.
- 전역 객체의 프로퍼티를 참조할 때 window를 생략할 수 있다.

```javascript
// 문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다.
console.log(window.parseInt('F', 16)); // 15
// 전역 객체 window의 메소드인 parseInt은 window.parseInt 또는 parseInt으로 호출할 수 있다.
console.log(parseInt('F', 16)); // 15

console.log(window.parseInt === parseInt); // true
```

- 전역 객체는 Object, String, Number, Boolean, Function, Array, RegExp, Date, Math, Promise와 같은 모든 표준 빌트인 객체를 프로퍼티로 가지고 있다.
- 자바스크립트 실행 환경에 따라 추가적으로 프로퍼티와 메소드를 갖는다. 브라우저 환경의 window 객체는 DOM, BOM, Canvas, XMLHttpRequest, Fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web worker와 같은 [클라이언트 사이드 Web API](https://www.w3.org/standards/webdesign/script)를 프로퍼티로 소유한다.
- var 키워드로 선언한 전역 변수와 선언하지 않은 변수에 값을 할당한 암묵적 전역 변수 그리고 전역 함수는 전역 객체의 프로퍼티가 된다.

let이나 const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다. 즉, window.foo와 같이 접근할 수 없다. let이나 const 키워드로 선언한 전역 변수는 보이지 않는 개념적인 블록(전역 렉시컬 환경의 선언적 환경 레코드) 내에 존재하게 된다.



## 1. 전역 프로퍼티(Global property)



### 1.1 Infinity

Infinity 프로퍼티는 양/음의 무한대를 나타내는 숫자값 Infinity를 갖는다.

```javascript
// 전역 프로퍼티는 window를 생략하고 참조할 수 있다.
console.log(window.Infinity === Infinity); // true

// 양의 무한대
console.log(3/0);  // Infinity
// 음의 무한대
console.log(-3/0); // -Infinity
// Infinity는 숫자 타입인 값이다.
console.log(typeof Infinity); // number
```



### 1.2 NaN

NaN 프로퍼티는 숫자가 아님을 나타내는 숫자값 NaN을 갖는다. NaN 프로퍼티는 Number.NaN 프로퍼티와 같다.



### 1.3 undefined

undefined 프로퍼티는 원시 타입 undefined를 값으로 갖는다.





### 2. 빌트인 전역함수

빌트인 전역 함수(Built-in global function)는 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메소드이다.



### 2.1 eval

문자열 형태로 매개변수에 전달된 코드를 런타임에 동적으로 평가하고 실행하여 결과값을 반환한다. 전달된 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행 후 마지막 결과값을 반환한다.

eval 함수를 통해 사용자로부터 입력 받은 콘텐츠(untrusted data)를 실행하는 것은 보안에 매우 취약하다. 또한 자바스크립트 엔진에 의해 최적화가 수행되지 않으므로 일반적인 코드 실행에 비해 처리 속도가 느리다. 따라서 eval 함수의 사용은 가급적 금지되어야 한다.



### 2.2 isFinite

매개 변수에 전달된 값이 정상적인 유한수인지 검사하여 그 결과를 불리언 타입으로 반환한다. 매개변수에 전달된 값이 숫자가 아닌 경우, 숫자로 타입을 변환한 후 검사를 수행한다.

```javascript
console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));       // false
console.log(isFinite('Hello'));   // false
console.log(isFinite('2005/12/12'));   // false

console.log(isFinite(0));         // true
console.log(isFinite(2e64));      // true
console.log(isFinite('10'));      // true: '10' → 10
console.log(isFinite(null));      // true: null → 0
```



### 2.3 isNaN

매개변수에 전달된 값이 NaN인지 검사하여 그 결과를 불리언 타입으로 반환한다. 매개변수에 전달된 값이 숫자가 아닌 경우, 숫자로 타입을 변환한 후 검사를 수행한다.

```javascript
// 숫자
console.log(isNaN(NaN)); // true
console.log(isNaN(10));  // false

// 문자열
console.log(isNaN('blabla')); // true: 'blabla' → NaN
console.log(isNaN('10'));     // false: '10' → 10
console.log(isNaN('10.12'));  // false: '10.12' → 10.12
console.log(isNaN(''));       // false: '' → 0
console.log(isNaN(' '));      // false: ' ' → 0

// 불리언
console.log(isNaN(true)); // false: true → 1
console.log(isNaN(null)); // false: null → 0

// undefined
console.log(isNaN(undefined)); // true: undefined → NaN

// 객체
console.log(isNaN({}));  // true: {} → NaN

// date
console.log(isNaN(new Date()));             // false: new Date() → Number
console.log(isNaN(new Date().toString()));  // true:  String → NaN
```



### 2.4 parseFloat

매개변수에 전달된 문자열을 부동소수점 숫자(floating point number)로 변환하여 반환한다.

```javascript
console.log(parseFloat('3.14'));  // 3.14
console.log(parseFloat('10.00')); // 10
// 공백으로 구분된 문자열은 첫번째 문자열만 변환한다.
console.log(parseFloat('34 45 66')); // 34
console.log(parseFloat('40 years')); // 40
// 첫번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
console.log(parseFloat('He was 40')); // NaN
// 전후 공백은 무시된다.
console.log(parseFloat(' 60 ')); // 60
```



### 2.5 parseInt

매개변수에 전달된 문자열을 정수형 숫자(Interger)로 해석(parsing)하여 변환한다. 반환값은 언제나 10진수이다.

```javascript
// '10'을 10진수로 해석하고 10진수 정수로 그 결과를 반환한다
console.log(parseInt('10')); // 10
// '10'을 2진수로 해석하고 10진수 정수로 그 결과를 반환한다
console.log(parseInt('10', 2)); // 2
// '10'을 8진수로 해석하고 10진수 정수로 그 결과를 반환한다
console.log(parseInt('10', 8)); // 8
// '10'을 16진수로 해석하고 10진수 정수로 그 결과를 반환한다
console.log(parseInt('10', 16)); // 16
```

기수를 지정하여 10진수 숫자를 해당 기수의 문자열로 변환하여 반환하고 싶을 때는Number.prototype.toString 메소드를 사용한다.

```javascript
const x = 15;

// 15을 2진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(x.toString(2)); // '1111'
// 15을 8진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(x.toString(8)); // '17'
// 15을 16진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(x.toString(16)); // 'f'

// 숫자값을 문자열로 변환한다.
console.log(x.toString()); // '15'
```

두번째 매개변수에 진법을 나타내는 기수를 지정하지 않더라도 첫번째 매개변수에 전달된 문자열이 "0x" 또는 "0X"로 시작하는 16진수 리터럴이면 16진수로 해석하여 10진수 정수로 반환한다.



### 2.6 encodeURI / decodeURI

encodeURI 함수는 매개변수로 전달된 URI(Uniform Resource Identifier)를 인코딩한다. URI는 인터넷에 있는 자원을 나타내는 유일한 주소를 말한다. URI의 하위개념으로 URI, URN이 있다.

인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의마한다.

이스케이프 처리는 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋(ASCII Character-set)으로 변환하는 것이다. 

```javascript
// 완전한 URI
const uri = 'http://example.com?name=이웅모&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 전달받아 인코딩하여 이스케이프 처리한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
```

decodeURI 함수는 매개변수로 전달된 인코딩된 URI을 전달받아 이스케이프 처리되기 이전으로 디코딩한다.

```javascript
const uri = 'http://example.com?name=이웅모&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 전달받아 인코딩하여 이스케이프 처리한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리되기 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher
```



### 2.7 encodeURIComponent / decodeURIComponent

encodeURIComponent 함수는 매개변수로 전달된 URI(Uniform Resource Identifier) 구성 요소 (component)를 인코딩한다. 여기서 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다. 단, 알파벳, 0~9의 숫자, -_.!~*'() 문자는 이스케이프 처리에서 제외된다. decodeURIComponent 함수는 매개변수로 전달된 URI 구성요소를 디코딩한다.

encodeURIComponent 함수는 매개변수로 전달된 문자열을 URI의 구성요소인 쿼리 파라미터의 일부 간주한다. 따라서 쿼리 파라미터 구분자로 사용되는 =, ?, &를 인코딩한다.

반면 encodeURI 함수는 매개변수로 전달된 문자열을 완전한 URI 전체라고 간주한다. 따라서 쿼리 파라미터 구분자로 사용되는 =, ?, &를 인코딩하지 않는다.

```javascript
// URI의 쿼리 파라미터
const uriComp = 'name=이웅모&job=programmer&teacher';

// encodeURIComponent 함수는 매개변수로 전달된 문자열을 URI의 구성요소인 쿼리 파라미터의 일부 간주한다.
// 따라서 쿼리 파라미터 구분자로 사용되는 =, ?, &를 인코딩한다.
let enc = encodeURIComponent(uriComp);
console.log(enc);
// name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher

let dec = decodeURIComponent(enc);
console.log(dec);
// 이웅모&job=programmer&teacher

// encodeURI 함수는 매개변수로 전달된 문자열을 완전한 URI로 간주한다.
// 따라서 쿼리 파라미터 구분자로 사용되는 =, ?, &를 인코딩하지 않는다.
enc = encodeURI(uriComp);
console.log(enc);
// name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

dec = decodeURI(enc);
console.log(dec);
// name=이웅모&job=programmer&teacher
```

