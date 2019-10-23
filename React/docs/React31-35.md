### PureComponent

shouldComponentUpdate를 알아서 자동으로 해준다.

PureComponent, shouldComponentUpdate는 모두 클래스형 컴포넌트에서만 사용 가능하다.

**단점**

객체 타입처럼 참조 관계가 있는 것은 제대로 변화를 감지하지 못한다.

참조값을 변경해주어야 한다. (새로운 객체나 배열을 만들어 주어야 한다.)

ex ) array: [...this.state.array, 1],

Component가 복잡해지면 작동하지 않는 경우가 많다.



{ a: 1}에서 setState {a: 1}을 할 때 새로 렌더링하므로 state에 객체 구조를 사용하지 않는 것이 좋다.

state는 가능한 간단한 자료구조를 사용하여라. => component를 잘게 쪼개어서 props를 자식에게 작은 단위로 물려줘라.



**React.memo**

클래스 컴포넌트의 PureComponent와 유사한 역할을 한다.

```jsx
// import React, { Component } from 'react';
import React, { memo } from 'react';
// const React = require('react');

// const { Component } = React;

const Try = memo( ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
 });
```



**React.createRef**

클래스형 컴포넌트에서 Hooks처럼 ref를 사용

setState를 함수형으로 사용하면 함수 안에서 다른 동작을 더 정의할 수 있기 때문에 좀 더 세밀한 조정이 가능하다.

render함수 안에서 setState()를 사용하면 setState()가 다시 render 함수를 호출하기 때문에 무한 반복된다.



부모컴포넌트에게 전달받은 props를 자식컴포넌트에서 변경해서는 안된다. => 부모에 props도 변경되기 때문에

ex) props.try = 'hello'; ( X )

props를 자식컴포넌트에서 변경하고 싶으면 props를 state로 변경한 후에 한다.

=> 이것 또한 안티 패턴이다. 제대로 하기위해서는 getDerivedStateFromProps를 사용해야 한다.



알파벳 컴포넌트

A -> B -> C -> D -> E 

A가 E 컴포넌트에 props를 넘겨주기위해서는 그 사이에 있는 다른 알파벳들을 거쳐야 한다.

쓸데없이 props를 받으면 쓸데없이 렌더링이 될 위험이 있다.

Context API를 사용하면 다른 알파벳들을 거칠 필요없이 바로 전달해 줄 수 있다.



JSX 안에서는 for와 if를 사용하지 못한다. => 쓸 수 있는 방법은 있지만 코드가 지저분해지기 때문에 추천하지 않는다. => 삼항조건식을 사용하는 것을 추천한다.

false, undefined, null은 JSX에서 태그 없음을 의미합니다.

클래스컴포넌트에서는 미리 구조분해를 하는 것을 추천한다.



클래스형 컴포넌트에서 렌더링을 발생시키고 싶지않으면 state에 넣어주지 않고 클래스의 프로퍼티로 사용하면된다.



## 질문

**React.PureComponent와 React.Component의 차이는 무엇인가?**

답.  React.Component는 shouldComponentUpdate()를 구현하지 않지만, React.PureComponent는 props와 state를 이용한 얕은 비교를 구현합니다.



**React.PureComponent의 단점과 그 단점에  대한 대안은 무엇인가?**

답. 컴포넌트에 대하여 얕은 비교만을 수행하기 때문에 컴포넌트에 복잡한 자료 구조가 포함되어있다면, 깊은 차이가 존재함에도 불구하고 차이가 없다고 판단하는 잘못된 결과를 만들어낼 수 있다. 따라서. props와 state의 구조가 간단할 것으로 예상될 때에만 `PureComponent`를 상속하고, 깊은 자료 구조의 변화가 있다면 `forceUpdate()` 또는 `불변객체`를 사용하는 것이 좋다.

`React.PureComponent`의 `shouldComponentUpdate()`는 컴포넌트의 하위 트리에 대한 props 갱신 작업을 수행하지 않는다. 



**리액트에서 얕은 비교란 무엇인가?**

`props` 와 `state` 의 이전 값과 바뀔 값을 비교할 때, 원시 타입의 값은 값 자체를 비교한다. ex) 1과 1을 비교, true와 true를 비교. 하지만 객체 타입의 값은 레퍼런스(참조)값을 비교하기 때문에 객체의 프로퍼티 등을 직접 변경하여도 변화를 감지하지 못한다. 또 다른 경우는 객체의 프로퍼티는 같지만 다른 참조 값을 갖는 객체와 비교할 경우 프로퍼티가 변경되지 않아도 계속 리렌더링되는 현상이 발생한다.



 만일 부모 컴포넌트에서 순수 컴포넌트인 자식 컴포넌트의 `props` 로 제공되는 오브젝트를 직접 변경했다고 해도 당신의 “순수” 컴포넌트는 업데이트 되지 않는데, 이는 순수 컴포넌트가 오브젝트 혹은 배열에 있어서는 이전 값과 **레퍼런스를 비교**하기 때문

=> 해결방법 :  `[ ...array ]` 혹은 `{ ...obj }` 와 같은 방법으로 완전히 새로운 오브젝트 또는 배열을 생성하는 방법



[PureComponent와 얕은비교](<https://ideveloper2.tistory.com/159>)

[얕은비교](<https://medium.com/@async3619/when-to-use-component-or-purecomponent-b810897a19a2>)

[얕은비교2](<https://stackoverflow.com/questions/36084515/how-does-shallow-compare-work-in-react>)