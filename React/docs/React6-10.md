컴포넌트마다 별개의 state를 갖고 있다.



컴포넌트도 항상 최상단의 div 태그 같은걸로 감싸주어야 했다.
=> 쓸데없는 div (CSS 적용 시 어려움)
=> 빈 태그 혹은 React.Fragment를 이용하여 해결 가능.



()는 그룹연산자이다. 우선순위를 높일 때 빼고는 의미가 없다. 꼭 써야할 필요는 없다.



class 컴포넌트에서 class의 메서드를 정의할 때 this 바인딩 문제가 있기 때문에 
화살표함수(arrow function)을 사용하는 것이 좋다.



실무에서는 constructor를 사용하지 않는 방식을 더 많이 활용한다.

```javascript
state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    answer: '',
    value: '',
    result: ''
};
```



현재의 state와 미래의 state



setState는 비동기이다.



예전 State 값으로 새로운 State를 만들 때는 return을 해주는 함수를 사용하자.

즉, this.state가 들어가면 함수를 사용하자.

```javascript
this.setState((prevState) => {
              return {
                result: '정답 ' + prevState.value,
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: ''
              };
            })
```



예) counter



ref : DOM 요소에 직접 접근하고 싶을 때

setState를 할 때는 render함수가 다시 실행된다.



함수를 따로 빼놓지 않으면 render 함수가 호출 될때마다 함수가 쌓인다.

