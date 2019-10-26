```jsx
// onClick 메서드 안에 함수를 호출하는 부분이 들어있을 때
onClickBtn = (choice) => {};

render() {
    return (
        <button onClick = {() =>this.onClickBtn('바위')}>바위</button>
        <button onClick = {() =>this.onClickBtn('가위')}>가위</button>
        <button onClick = {() =>this.onClickBtn('보')}>보</button>
    )
}


// 위 코드를 간략하게 표현. 리액트에서 많이 사용하는 패턴. 고차 함수 패턴
onClickBtn = (choice) => () => {};

render() {
    return (
        <button onClick = {this.onClickBtn('바위')}>바위</button>
        <button onClick = {this.onClickBtn('가위')}>가위</button>
        <button onClick = {this.onClickBtn('보')}>보</button>
    )
}
                              
```

setState()를 한번에 모아서 rendering 처리를 한다.

Hooks에서는 componentDidMount(), componentWillUnmount() 와 같은 라이프사이클이 없다. 대신, 흉내를 낼 수는 있다.



### Hooks와 useEffect

```jsx
// useEffect class component의 라이프 사이클을 대체한다.
useEffect(() => { // componentDidMount, componentDidUpdate 역할 ( 1대1 대응은 아님 )
    return () => { // componentWillUnmount 역할
        
    }
    // 두 번째 인수 배열에 넣은 값들이 바뀔 때 useEffect가 실행된다.
    // 두 번째 인수 배열에 아무 값도 넣지 않으면 처음 한번만 실행된다.componentDidMount와 유사
}, []);

```

useEffect를 여러 번 사용할 수 있다. =>  state마다 다른 effect를 내고 싶을 수 있기 때문에

useEffect 안에서 한꺼번에 여러 state를 처리할 수도 있다.

class의 경우 componentDidMount나 componentDidUpdate에서 모든 state를 조건문으로 분기 처리한다.

Q. Hooks는 부모 컴포넌트에서 child 컴포넌트를 가지고 있으면 부모컴포넌트가 렌더링 될 때마다 무조건 child도 다시 렌더링이 되나요?

A. 네 무조건 렌더링 됩니다. 그렇기 때문에 사용하는 것이 React.memo



필요한 곳에서 setInterval을 쓰고 componentWillUnmount에서 정리만 하면 된다.	

보통 반복문을 기점으로 컴포넌트를 분리한다.

state를 사용하지 않는 컴포넌트는 가장 단순한 형태의  함수형 컴포넌트로 만드는 것이 좋다.