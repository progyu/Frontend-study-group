# HTML 속성과 상태(State)

기본적으로 react는 아래쪽에 component들을 렌더링할 root가 하나 필요하다. 



**HTML 속성을 넣는 자리(객체 형식으로 표현)**

```javascript
render() {
            return e('button', { onclick: () => { console.log('clicked') }, type: 'submit'}, 'Like');
}
```

- ex) onClick,  type
- camle case로 표기

```javascript
// 리액트에서 상태관리
constructor(props) {
	super(props);
    this.state = {
        liked: false
    };
}

// 리액트에서 상태변경
this.setState({ liked: true })
```



상태는 바뀌는 부분 또는 바뀔 수 있는 부분이다. 즉, 바뀔 여지가 있는 부분이 상태(state)이다.



상태가 변경되면 화면이 자동으로 변경된다.



리액트는 데이터(상태)와 화면을 자동으로 일치시켜 준다.