# 리액트 컴포넌트

리액트는 기본적으로 자바스크립이다. => js 파일이 가능

```html
<!-- 리액트를 사용할 수 있게 해주는 스크립트 -->
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

```html
<div id="root"></div>
<script>
// html 태그를 만드는 코드
const e = React.createElement;

// component를 만드는 코드
class LikeButton extends React.Component {
    // component가 처음에 실행될 때 가장 먼저 실행되는 부분
    // 객체지향에서는 중요하나 React에서는 기본적으로 쓰는 것이라고 생각하면 편함.
    constructor(props) {
        super(props);
    }
    // 어떻게 화면에 표시할 것인지를 결정해주는 메서드
    render() {
         return e('button', null, 'Like');
        // <button>Like</button> -> 버튼 태그를 만들겠다
        
        //return e('button', {onClick: () => this.setState({ liked: true})}, 'Like');
	}
}
</script>
```

```html
<script>
// 웹에다가 실제로 렌더링 해주는 것. ReactDOM
ReactDOM.render(e(LikeButton), document.querySelector('#root'));
// 실제로 버튼 태그를 만든다.
</script>
```

