### Context API

context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다.

부모와 자식 간의 관계가 다층 관계이면 props를 물려주기 복잡하다. 그러한 복잡함을 개선하기위해 사용하는 것이 Context API이다.



**React.createContext**

Context API에서 접근할 수 있는 데이터들의 접근하고 싶은 컴포넌트들을 Provider로 묶어주어야 한다.

값들은 value에다가 넣어준다.

다른 파일에서도 사용할 수 있게 export 해준다.



**React.useContext**

사용하고 싶은 컴포넌트에서 import 해주고 useContext를 이용하여 가져온다. 



Context API의 단점

- 성능 최적화하기가 힘들다.
  - 리렌더링 될 때마다 객체가 새로 생성된다. => Context API를 사용하는 자식 컴포넌트들도 매번 리렌더링 된다.
  - 해결책 : useMemo를 이용하여 객체를 기억한다(캐싱). dispatch는 항상 같게 유지된다.



onContextMenu : 마우스 오른쪽 클릭 이벤트



**Context.Provider**

Context 오브젝트에 포함된 React 컴포넌트인 Provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 합니다.

Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 `value` prop가 바뀔 때마다 다시 렌더링 됩니다. 



## 질문

1. 리액트에서 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있게 해주는 기능은 무엇인가?

   답. context

2. context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 하는 메서드는 무엇인가?

   답. Context.Provider

3. Context API를 사용하면 리렌더링 될 때마다 객체가 새로 생성되며 Context API를 사용하는 자식 컴포넌트들도 매번 리렌더링 되어 불필요한 렌더링이 발생하게 된다. Hooks에서 이런 성능상의 이슈를 해결하기 위한 방법으로 무엇이 있는가?

   답. useMemo를 이용하여 객체를 기억한다(캐싱).

