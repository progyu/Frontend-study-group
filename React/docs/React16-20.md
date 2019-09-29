plugin들의 모음이 preset이다.

```javascript
 presets: ['@babel/preset-env', '@babel/preset-react']
```

plugin : 확장 프로그램

```javascript
 presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'], // browerslist 한국에서 브라우저 점유율이 5%이상인 것은 다 지원하겠다.
            },
            debug: true,
          }], 
          '@babel/preset-react'
        ],
```

[preset-env 관련 설정 모음](<https://github.com/browserslist/browserslist>)

한국에서 브라우저 점유율이 5% 이상인 브라우저

![1568039882898](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1568039882898.png)





currentTarget 과 target의 차이는??? -> 웹게임 강좌에 나와있음.

value와 onChange는 세트로 입력해야함. 그게 아니면 defaultValue

[WDS] : Webpack dev server

[HMR] : Hot Module Reload



### webpack-dev-server와 hot-loader

```javascript
// jsx 파일의 코드 변화를 감지하여 즉시 변경사항을 반영하여 준다.
npm i -D react-hot-loader
npm i -D webpack-dev-server


"scripts": {
   "dev": "webpack-dev-server --hot"
},
```

- webpack-dev-server의 역할
  - webpack.config.js를 읽어서 build를 해주고 항상 뒤쪽 서버로 유지를 시켜준다.

webpack-dev-server가 감지하는 부분은 클라이언트 부분. web.config.js 파일 등의 수정이 있었을 시에는 재실행 시켜주어야 한다.

publicPath는 가상의 경로이다.

```javascript
// client.jsx
const React = require('react');

const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root'); //

const WordRelay = require('./WordRelay'); 

const Hot = hot(WordRelay); //

ReactDom.render(<Hot />, document.querySelector('#root')); //
```

```javascript
plugins: [
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel'
],
```



## 질문 

1. babel을 이용하여 브라우저의 지원 범위를 설정하고 싶을 때 어떻게 하면 되는가?

   A. webpack.config.js 파일에서 module -> rules -> options -> presets -> @babel/preset-env -> targets -> browers

2. event 객체의 프로퍼티인 currentTarget 과 target의 차이는???

   A. 

   ```html
   <div onclick="checkTarget();">
     <span>test</span>
   </div>
   ```

   ```javascript
   function checkTarget(event) {
     var ele = event.currentTarget;
     console.log(ele);
   }
   ```

   

- event.target  //  클릭된 span 태그를 반환
- event.currentTarget  //  이벤트가 바인딩된 div 요소를 반환

3. React 개발단계에서 jsx 파일의 코드 변화를 감지하여 즉시 변경사항을 반영하여 주는 역할을 하는 것은?

   A. Webpack dev server

   ​     react-hot-loader

4. plugin들의 모음을 [ ]이라고 한다.

   A. preset

5. ```javascript
     const [ count, setCount ] = useState(0);
      
     increase = ()=> {
       setCount(count + 1);
       setCount(count + 1);
       setCount(count + 1);
       
        setCount((prev) => {
          return prev + 1;
        });
        setCount((prev) => {
          return prev + 1;
        }); 
        setCount((prev) => {
          return prev + 1;
        });
     }
      
     decrease = ()=> {
       setCount(count -1 );
     }
      
     return (
       <>
         <div>현재 숫자는 { count } 입니다. </div>
         <button onClick = { increase }>+</button>
         <button onClick = { decrease }>-</button>
       </>
     )
     
     // + 버튼을 한 번 클릭 하였을 시 count의 값은?
   ```



**setState() 관련 링크**

<https://ko.reactjs.org/docs/react-component.html#setstate>

<https://ko.reactjs.org/docs/faq-state.html#when-is-setstate-asynchronous>

