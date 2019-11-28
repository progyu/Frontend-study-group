**Context api 최적화**

하위컴포넌트들이 React.memo가 되어있어야지 상위 컴포넌트도 React.memo를 적용할 수 있게  된다.

React.useMemo를 이용하여 실제로 리렌더링되는 부분을 감싸주어 값을 캐싱하면 비록 함수는 실행되고 console.log()는 찍히더라고 실제로 리렌더링이 되는 것은 아니다.



**React Router 도입하기**

React router는 웹과 앱 모두 사용할 수 있다.

```
npm i react-router // 뼈대
npm i react-router-dom // 웹에서 사용할 때
npm i react-router-native // 앱에서 사용할 때
```



router는 BrowerRouter, HashRouter, StaticRouter 가 있는데 보통 BrowerRouter, HashRouter를 많이 사용한다. StaticRouter는 서버쪽에서 사용한다.

ReactRouter는 눈속임이다. 실제로 페이지가 여러 개 있는 것이 아니라 있는척 하는 것이다. a태그를 사용하여 Routing하면 에러가 난다.

```jsx
// a태그가 아닌 Link라는 컴포넌트를 사용하면 된다.
<Link to="/number-baseball">숫자야구</Link> 
```

라우터를 하는 곳에서 다른 component에서 사용하는 패키지들을 설치해주어야 한다.

가상의 주소는 서버가 알지 못한다. => 새로고침하면 접근할 수 없다는 메세지가 나온다. 클라이언트 사이드인 리액트 라우터만이 가상의 주소를 알고 있다.



## 질문

1. 다음 코드 중 오류를 발생시키는 부분을 찾아서 고치시오.

```jsx
const Games = () => {
    return (
    	<BrowserRouter>
        	<div>
            	<a href="/number-baseball">숫자야구</a>
                <a href="/rock-scissors-paper">가위바위보</a>
                <a href="/lotto-generator">로또생성기</a>
            </div>
            <div>
            	<Route path="/number-baseball" component={NumberBaseball}></Route>
                <Route path="/rock-scissors-paper" component={Rsp}></Route>
                <Route path="/lotto-generator" component={Lotto}></Route>
            </div>
        </BrowserRouter>
    )
}
```

답.

```jsx
// a태그가 아닌 Link 태그를 사용하여야 한다.
<Link to="/number-baseball">숫자야구</Link> 
```

2. React Router를 web에서 사용하기 위하여 설치해야 하는 라이브러리는 무엇인가?

   답. react-router-dom

3. React Router에서 보통 가장 많이 사용하는 Router는 [  ] 이다.

   답. BrowserRouter