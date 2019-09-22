## React Hooks 사용하기

함수형 컴포넌트(Functional Component)

- 새로이 등장한건 아니다.
- setState() 메소드나 ref를 사용할 필요가 없을 때 사용하였다.
- 함수형 컴포넌트를 좋아하는 사람들의 요구 => 함수형 컴포넌트에서도 setState()와 ref를 사용할 수 있게 해달라! => 이 요구를 반영하여 만든 것이 React Hooks!!



Hooks

- use로 시작하는 메서드가 Hooks이다.
- 코드량이 기존 클래스 컴포넌트에 비해 훨씬 적다.
- state(상태) 관리 부분과 이벤트 리스너 부분, ref 사용법에서 기존 클래스 컴포넌트와  차이점이 있다.



state

- Hooks에서 state 관리는 비구조화 할당, 구조분해(디스트럭쳐링)을 이용한다.

```javascript
// 예) setFirst: setState 역할. 즉, first 전용 setState // useState(): 괄호 안에는 초기값 설정

const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9)); 
const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
const [value, setValue] = React.useState('');
const [result, setResult] = React.useState('');
```



ref 

- Hooks에서는 useRef를 이용하여 DOM에 접근한다.

```javascript
const inputRef = React.useRef(null); // 괄호 안에 초기 값 설정 가능

inputRef.current.focus(); // current를 추가하는 것을 잊지말자.

<input type="number" ref={inputRef} value={value} onChange={onChangeInput} />
```





## Class와 Hooks 비교하기

클래스 컴포넌트에서는 state가 변경되었을 때 render() 함수만 재실행 되었지만 Hooks는 함수 전체가 재실행되기 때문에 조금 더 느릴 수 있다.

React에서는 html 속성 중 class와 for를 사용하지 못한다. => 대신에 각각 className, htmlFor를 사용하면 된다.

Hooks에서 setState()를 모아서 한번에 처리하기 때문에(비동기) state를 바꾸는 코드가 여러 줄 있어도 딱 한번만 리렌더링한다.

setState는 promise가 아니므로 await을 해도 아무런 효과가 없다.



 ## 웹팩 설치하기

**웹팩을 왜 사용해야 할까?**

- 유지보수성을 향상 시키기 위해

- 스크립트 간 중복을 방지하기 위해
- 간단하게 바벨 적용 가능
- 쓸데 없는 코드 제거 가능 ex) console.log()를 다 제외시킬 수 있다.



**웹팩이란?**

- 여러 개의 자바스크립트 파일을 합쳐서 한번에 합쳐서 하나의 자바스크립트 파일로 만들어준다.



웹팩을 사용하기위해서는 Node를 알아야 한다. Node는 자바스크립트 실행기이다.

웹팩은 Node에서 동작한다

폴더경로로 이동하여 **npm init 이름 설정하고 author에 자신의 이름 License에 MIT 하고 yes하면 package.json이 생성된다.**

package.json에 React 개발에 필요한 모든 패키지들을 넣어주면 된다.



### 웹팩 설치 및 사용하기

```javascript
npm i react react-dom
```

```javascript
npm i -D webpack webpack-cli // -D: 나는 개발용으로만 webpack 쓸거야. 실제 서비스 할 때는 웹팩이 필요없다.
```

```javascript
// package.json
// 실제 서비스에서 사용 
"dependencies": {
    "react": "^16.9.0",
    "react-dom": "^16.9.0"
  },
// 개발 용도로만 사용      
  "devDependencies": {
    "webpack": "^4.39.3",
    "webpack-cli": "^3.3.8"
  }
```

- webpack.config.js 파일을 폴더 내에 생성한다. 파일 내에 `module.exports = {};`를 적어준다.

- clients.jsx 파일을 폴더 내에 생성한다. 파일 내에 아래 내용을 적는다.

```javascript
// React와 React DOM을 불러온다.
// 스트립트로 React를 불러오지 않고 Node의 모듈 시스템을 이용하여 npm에 설치했던 것을 불러올 수 있다.
const React = require('react');
const ReactDom = require('react-dom');

ReactDom.render(<WordRelay />, document.querySelector('#root'));
```



create react app을 하면 기본셋팅을 자동으로 해주지만 직접 처음부터 다 세팅을 해봐야 create react app이 하는 일을 이해할 수 있다.

js 파일도 쓸 수 있지만 리액트 전용 파일이라는 것을 쉽게 알아볼 수 있게 하기위해서 jsx 파일을 사용하는 것이 좋다.

```html
<!-- 위 과정 + 코드 -> 기본세팅 -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>끝말잇기</title>
</head>
<body>
  <div id="root"></div>
  <script src="./dist/app.js"></script>
</body>
</html>
```



파일을 쪼개는 경우. 아래의 두 부분을 추가로 적어줘야 한다.

```javascript
// wordRelay.jsx

// 쪼갠 파일에서 필요로 하는 패키지나 라이브러리를 가져오는 부분
const React = require('react'); 
const { Component } = React; // class WordRelay extends React.Component를 줄일 수 있다.

// 쪼갠 파일에 사용하는 컴포넌트들을 파일 외부에서도 사용할 수 있게 해주는 부분. node의 모듈 시스템
module.exports = WordRelay;
```



웹팩은 webpack.config.js로 다 돌아간다.

입력과 출력 app.js라는 파일을 하나로 만들어서 html이 실행할 수 있게 해주는 것이 웹팩의 목적

예) 입력은 client.js + wordRelay.js , 출력은 app.js



**모듈 시스템의 장점**

- 필요한 것만 불러올 수 있다.



**webpack이라는 명령어를 입력 했을 시**

'webpack' 은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.

위 에러는 webpack이 명령어로 등록되지 않았기 때문에 발생하는 오류이다.

해결책 3가지

- package.json 파일에 script 부분에 등록해준다.

```javascript
"scripts": {
    "dev": "webpack"
  },
// npm run dev
```

- npx webpack





webpack을 실행시키면 dist 폴더 안에 app.js 파일이 생성된다.

=> webpack.config.js 파일에 entry를 읽어서 app.js라는 하나의 파일로 만들어 주는 것이다.



![1567919237033](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1567919237033.png)

- webpack이 jsx 문법을 알지 못해서 발생하는 에러
- jsx는 자바스크립트 문법이 아니다. -> 바벨을 이용해서 해결했었다. -> 웹팩에도 바벨을 추가적으로 세팅을 해줘야 jsx를 처리할 수 있다.



```javascript
// 바벨 설치
npm i -D @babel/core // 기본적인 바벨. 최신 문법을 예전 문법으로 변환.

npm i -D @babel/preset-env // 개인의 브라우저의 환경에 맞게 변환해주는 것.

npm i -D @babel/preset-react // jsx 같은 것을 지원할 수 있다.
npm i --no-optional -D @babel/preset-react

npm i -D babel-loader // 바벨과 웹팩을 연결해준다.

npm i -D @babel/plugin-proposal-class-properties
```



entry에 있는 파일을 읽고 그 파일에 module을 적용한 후 output으로 뺀다.

문법마다 바벨의 기능이 다르다.

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게 하겠다?
  resolve: {
    extensions: ['.js', '.jsx']
  },// entry에 파일 확장명 부분을 등록하여 자동으로 찾게해준다.
  
  // 가장 중요한 두 부분
  entry: {
    app: ['./client'], // client.jsx에서 wordRelay.jsx 파일을 이미 불러오고 있기 때문에 아래와 같이 쓰지 않아도 된다.
    // app: ['./client.jsx', 'wordRelay.jsx'],
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/, // 정규표현식, js파일과 jsx 파일에 이 rule을 적용하겠다.
      loader: 'babel-loader', // 어떤 룰을 적용할 것인지 설정.
      options: { // babel의 옵션들.
        presets: ['@babel/preset-env', '@babel/preset-react'], // 설치할 때 다운받은 preset들 등록.
        plugins: ['@babel/plugin-proposal-class-properties'], // 각각의 문법에 따른 바벨 설정.
      },
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'), // 현재 폴더 안에 있는 dist 라는 의미
    filename: 'app.js'
  }, // 출력
};
```



## 질문

1. React Hooks에서 상태관리를 하기 위해서 사용하는 메서드는 ?

   A.  React.useState()

2. React Hooks에서 ref를 사용하기 위한 메서드는 ?

   A. React.useRef()

3. React에서 html 속성 중 사용할 수 없는 속성 두 가지와 대체하는 속성명은 무엇인가?

   A. class와 for를 사용하지 못한다. => 대신에 각각 className, htmlFor를 사용하면 된다.

4. 웹팩을 사용해야 하는 이유는?

   A. 

	- 유지보수성을 향상 시키기 위해
	- 스크립트 간 중복을 방지하기 위해
	- 간단하게 바벨 적용 가능
	- 쓸데 없는 코드 제거 가능 ex) console.log()를 다 제외시킬 수 있다.

5. 웹팩이란?

   A. 여러 개의 자바스크립트 파일을 합쳐서 한번에 합쳐서 하나의 자바스크립트 파일로 만들어주는 것.

6. 함수형 컴포넌트(Functional Component)에서 사용할 수 없었던 2가지는?

   A. setState()와 ref

7. 바벨과 웹팩을 연결해주는 역할을 하는 것은?

   A. babel-loader