useState()가 호출되면 렌더링을 다시한다.

useRef()는 리렌더링을 하지 않는다. -> 함수형 컴포넌트에서 값이 바뀌어도 다시 렌더링을 하고 싶지 않은 값들에 사용하면 된다.

함수형 컴포넌트에서 Ref를 사용할  때는 뒤에 항상 current를 사용해줘야한다.

**return 내부에 for과 if 쓰기**

```jsx
return (
	<>
    <div
    	id="scrre"
        className={state}
        onClick={onClickScreen}
    >
        {message}
    </div>
    // jsx 안에서 {}를 사용하면 자바스크립트를 사용할 수 있다.
    // jsx 안에서는 if 나 for를 사용하지 못하지만 함수 안에서는 사용 가능
    // 즉시 실행 함수를 만들어 줘야한다.
    // 잘 사용하지 않는다.
    {(() => {
        if(result.length === 0) {
			return null;
        } else {
            return ...
        }
	})()}
);
```



```jsx
// 배열을 return 할 수도 있다. 
// 하지만 잘 쓰이지 않는다.
return [
    <div key ="사과">사과</div>,
    <div key ="배">배</div>,
    <div key ="감">감</div>,
    <div key ="귤">귤</div>,
    <div key ="복숭아">복숭아</div>,
]
```



렌더링이되면 컴포넌트가 dom에 딱 달라붙는 순간이 있다.



렌더함수가 실행되면 jsx를 DOM에다가 딱 붙여준다. 붙여주고 난 바로 그 순간에 특정한 동작을 할 수 있다.



```jsx
// render가 처음 실행되고 정상적으로 실행되면 componentDidMount가 실행된다.
// 리렌더링이 발생할 때는 실행되지 않는다.
// 비동기 요청을 많이 한다.
componentDidMount() {

}

// 리렌더링 후
componentDidUpdate() {
    
}

// 컴포넌트가 제거되기 직전 실행 ex) 부모 컴포넌트가 자식 컴포넌트를 제거했을 때	
// 비동기 요청 정리를 많이 한다.
componentWillUnmount() {
    
}
```

```jsx
// 라이프 사이클 과정
// 클래스 컴포넌트의 경우
// constructor -> render -> ref -> componentDidMount -> (setState/props 바뀔 때 -> shouldComponentUpdate(true)-> render -> componentDidUpdate -> 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸)
```



비동기 함수가 비동기 함수 밖에 있는 변수를 참조하면 클로저 문제가 발생한다.



## 질문

함수형 컴포넌트에서 값이 바뀌어도 리렌더링을 하고 싶지 않은 값들에 사용하는 메소드는 무엇인가?

A.  useRef()



useRef()를 사용하여 값을 할당한 변수를 사용할 때는 항상 뒤에 [ ]를 사용해줘야 한다.

A. current



다음 설명 중 올바르게 짝지어지지 않은 것을 고르시오.

1. componentDidUpdate - 리렌더링 후 실행된다.

2. componentDidMount - render가 처음 실행되고 정상적으로 실행되면 componentDidMount가 실행된다.
3. componentWillUnmount - 컴포넌트가 제거되기 직전 실행되며 비동기 요청을 많이 한다.
4. componentDidMount - 리렌더링이 될 때는 실행되지 않는다.

A. 2



