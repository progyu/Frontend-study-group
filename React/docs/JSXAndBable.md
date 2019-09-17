# JSX와 바벨(babel)

Class 하나가 Component 하나라고 생각하면 된다.



## JSX (JS + XML) 문법

기존의 React.createElement을 사용하는 코드가 가독성이 좋지않아서  HTML 태그 형식의 코드를 사용할 수 있게 변경.

즉, React.createElement를  대체한 것이 JSX.

하지만, 위와 같이 자바스크립트 안에서 HTML 코드를 사용하는 실험적인 문법을 지원하기 위해서는 babel을 사용해야 한다.

```html
// 바벨 적용
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<script type="text/babel">
	...
</script>
```



바벨이 JSX 문법을 React.createElement로 변경해준다.



컴포넌트의 장점

- 재사용이 쉽다.

- 원하는 개수만큼 쉽게 늘릴 수 있다.
- 코드가 깔끔하다.
- 수정이 쉽다.



XML이란 무엇인가?