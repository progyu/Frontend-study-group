리액트에서 배열의 push 메소드를 사용하면 안된다.

=> 어떤 것이 변하였는지 감지를 하지 못한다. push 메소드 대신 스프레드 연산자 이용

```javascript
const array = [1];

const array2 = [...array, 2];

console.log(array2); // [1, 2]

array === array2 // false 두 배열이 같지 않기 때문에 변화를 감지할 수 있다.
// 이전 state와 현재 state가 다르면 리액트 엔진이 변화를 감지하고 렌더링한다.
// 참조가 변해야한다.
```



클래스형 컴포넌트에서 this를 사용하지 않는 함수인 경우에는 클래스 밖에서 정의하는 것이 좋다.

=> 다른 컴포넌트에서 사용하기가 쉬워진다. 클래스 컴포넌트에서 함수형 컴포넌트로 변경할 때도 아무런 영향을 받지 않기 때문에 편하다.



**React Devtools**

개발 모드에서 배포 모드로 변경하기

1. webpack.config.js 파일에서 mode를 production으로 변환
2. process.env.NODE_ENV = 'production';

배포 모드에서는 소스 코드 압축 및 최적화가 되어있다.



**shouldComponentUpdate**

state나 props가 변경되었을 때 리렌더링된다.

state 변화 없이 setState()만 호출해도 리렌더링이 된다.

`shouldComponentUpdate()`를 사용하면 현재 state 또는 props의 변화가 컴포넌트의 출력 결과에 영향을 미치는지 여부를 React가 알 수 있습니다.

이 메서드는 오직 **성능 최적화**만을 위한 것입니다.  렌더링을 방지하는 목적으로 사용할 경우 버그로 이어질 수 있습니다. `shouldComponentUpdate()`의 내용을 직접 작성하는 대신에 [`PureComponent`](https://ko.reactjs.org/docs/react-api.html#reactpurecomponent)를 사용하는 것이 좋습니다. 



## 질문

1. 리액트에서 배열의 메소드인 push를 사용하면 안되는 이유는?

   A.  어떤 것이 변하였는지 감지를 하지 못한다.

2. 클래스형 컴포넌트에서 this를 사용하지 않는 함수인 경우에는 클래스 밖에서 정의하는 것이 좋다고 한다. 그 이유는?

   A. 다른 곳에서 사용하기가 쉬워진다. 클래스 컴포넌트에서 함수형 컴포넌트로 변경할 때도 아무런 영향을 받지 않기 때문에 편하다.

3. 개발 모드에서 배포 모드로 변경하기 위해서는 webpack.config.js 파일에 mode를 [  ]로 변경하여햐 한다.

   A. production

4.   state 변화 없이 setState()만 호출해도 리렌더링이 된다? ( O , X)

   A. O

5. **shouldComponentUpdate란 **?

   A. 조건문 등을 통해 리렌더링을 제어 및 방지할 수 있다. 

