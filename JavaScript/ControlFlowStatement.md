# 제어문

제어문(Control flow statement)은 주어진 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용한다. 제어문을 사용하면 코드의 실행 흐름을 인위적으로 제어할 수 있다.



## 1. 블록문

블록문(Block statement/Compound statement)는 0개 이상의 문을 중괄호로 묶은 것으로 코드 블록 또는 블록이라고 부르기도 한다. 자바스크립트는 블록문을 하나의 실행 단위로 취급한다.

문의 끝에는 세미 콜론(;)을 붙이는 것이 일반적이지만 블록문의 끝에는 세미콜론을 붙이지 않는다.



## 2. 조건문

조건문(conditional statement)은 주어진 조건식(conditional expression)의 평가 결과에 따라 코드 블럭(블록문)의 실행을 결정한다. **조건식은 불리언 값으로 평가될 수 있는 표현식이다.**

자바스크립트는 2가지의 조건문 if…else 문과 switch 문을 제공한다.



### 2.1 if...else문

 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환되어 논리적 참, 거짓을 구별한다.

```javascript
if (조건식1) {
  // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if (조건식2) {
  // 조건식2이 참이면 이 코드 블록이 실행된다.
} else {
  // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}
```



```javascript
var num = 2;

// 0은 false로 취급된다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind); // 양수
```



## 2.2 swich 문

switch 문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 순서를 이동시킨다. case 문은 상황(case)을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 그 뒤에 실행할 문들을 위치시킨다.

```javascript
switch (표현식) {
  case 표현식1:
    switch 문의 표현식과 표현식1이 일치하면 실행될 문;
    break;
  case 표현식2:
    switch 문의 표현식과 표현식2가 일치하면 실행될 문;
    break;
  default:
    switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;
}
```

 switch 문은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용한다.

break 키워드로 구성된 break 문은 코드 블록에서 탈출하는 역할을 한다.

break 문을 생략한 폴스루(fall through)가 유용한 경우도 있다.  폴스루를 활용해 여러 개의 case 문을 하나의 조건으로 사용할 수도 있다. 



## 3. 반복문

반복문(Loop statement)은 주어진 조건식의 평가 결과가 참인 경우 코드 블럭을 실행한다. 그 후 조건식을 다시 검사하여 여전히 참인 경우 코드 블록을 다시 실행한다. 이는 조건식이 거짓일 때까지 반복된다.

자바스크립트는 3가지의 반복문 for 문, while 문, do…while 문을 제공한다. 그 외에도 for..in 문, ES6에서 새롭게 도입된 for…of 문이 있다.



### 3.1 for 문

```javascript
// 가장 일반적으로 사용되는 반복문의 형태
for (변수 선언문 또는 할당문; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
}
```



### 3.2 while 문

while 문은 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다. 조건문의 평가 결과가 거짓이 되면 실행을 종료한다. 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환되어 논리적 참, 거짓을 구별한다

```javascript
var count = 0;

// 무한루프
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2
```



### 3.3 do...while 문

 do…while 문은 **코드 블록을 먼저 실행하고 조건식을 평가**한다. 따라서 코드 블록은 **무조건 한번 이상 실행**된다.

```javascript
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2
```



## 4. break 문

레이블 문, 반복문(for, for…in, for…of, while, do…while) 또는 switch 문의 **코드 블록을 탈출한다.** 

레이블 문은 프로그램의 실행 순서를 제어하기 위해 사용한다. 사실 switch 문의 case 문과 default 문도 레이블 문이다. 레이블 문을 탈출하려면 break 문에 레이블 식별자를 지정한다.

중첩된 for 문의 내부 for 문에서 break 문을 실행하면 내부 for 문을 탈출하여 외부 for 문으로 진입한다. 이때 내부 for 문이 아닌 외부 for 문을 탈출하려면 레이블 문을 사용한다.

```javascript
// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log('inner ' + j);
  }
}

console.log('Done!');
```

중첩된 for 문을 외부로 탈출할 때 레이블 문은 유용하지만 그 외의 경우 레이블 문은 일반적으로 권장하지 않는다. 



## 5. continue 문

continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 **반복문의 증감식으로 이동**한다.

```javascript
// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === search) {
    count++;
    // code
    // code
    // code
  }
}

// continue 문을 사용면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 카운트를 증가시키지 않는다.
  if (string[i] !== search) continue;

  count++;
  // code
  // code
  // code
}
```

 

## 질문

1. continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 [ ]으로 이동한다.

   A. 반복문의 증감식