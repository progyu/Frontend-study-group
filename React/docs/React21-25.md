require는 노드의 모듈 시스템이다.



exports 할 파일에서 `module.exports = [export할 대상]` 을 하고 import할 파일에서 `const [변수명] = require('파일 경로 및 import할 대상')`



남이 만든 스크립트도 `require`를 사용하여 가져올 수 있다. ex) `const React = require('react');`



**import, export 문법** 

ex)

1. `import [ import할 대상];` `export defalut [export할 대상]`

2. `export const hello = 'hello';` `import { hello }`

exports 되는게 객체나 배열이면 구조 분해할 수 있다.



노드 모듈 시스템에서 `module.exports = { hello: 'a'};`와 `exports.hello = 'a'`는 같다.



es2015(ES6) 모듈 문법 - import, export default

최신 commonJs 노드의 모듈 문법 - require, module.exports

import는 정적 임포트, require는 동적 임포트이다.  import는 항상 파일 상단에, require는 파일 아무데서나 쓸 수 있다.



리액트는 key를 보고 같은 컴포넌트인지 아닌지 판단한다. => key 값으로 i(index)를 주면 배열의 순서가 바뀌면 문제가 발생한다. 또 성능 최적화의 문제도 발생한다.

요소가 추가만 되는 배열인 경우 key에 index를 써도 괜찮다.



```javascript
   <ul>
          {[
            { fruit: '사과', taste: '맛있다'},
            { fruit: '바나나', taste: '맛없다'},
            { fruit: '자두', taste: '새콤하다'}
          ].map((v)=> {
            return (
            <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
            );
        })}
	</ul>
```



**props는 부모가 자식에게 물려주는 유산이다.**

```html
class Try extends Component {
  render() {
    return(
      <li>
        <b>{this.props.value.fruit}</b> - {this.props.value.taste}
      </li>
    )
  }
}
```

```html
<ul>
    {this.fruits.map((v, i)=> {
    	return (
    	<Try key={v.fruit + v.taste} value={v} index={i} />
    	);
    })}
</ul>
```

`map()` 함수 내부에 있는 엘리먼트에 key를 넣어 주는 게 좋다.

[key가 필요한 이유](<https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children>)

[index를 key로 사용할 경우 부정적인 영향](<https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318>)



React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트를 해당 컴포넌트에 단일 객체로 전달한다. 이 객체를 “props”라고 한다.



## 질문

다음이 설명하는 용어는 무엇인가?

- 엘리먼트의 배열을 만들 때 포함해야 하는 특별한 문자열

- React가 어떤 항목을 변경, 추가 혹은 삭제할지 식별하는 것을 돕는 역할을 한다

A. key



index를 key로 사용하면 좋지 않은 이유는 무엇인가?

A. 인덱스를 key로 사용 중 배열이 재배열되면 컴포넌트의 state와 관련된 문제가 발생할 수 있다. 컴포넌트 인스턴스는 key를 기반으로 갱신되고 재사용된다. 인덱스를 key로 사용하면, 항목의 순서가 바뀌었을 때 key 또한 바뀔 것이다. 그 결과로, 컴포넌트의 state가 엉망이 되거나 의도하지 않은 방식으로 바뀔 수도 있다.



props는 무엇인가?

A.  React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트를 해당 컴포넌트에 단일 객체로 전달한다. 이 객체를 “props”라고 한다.

properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소이다.



commonJS란 무엇인가?

JavaScript를 브라우저에서뿐만 아니라, 서버사이드 애플리케이션이나 데스크톱 애플리케이션에서도사용하려고 조직한 자발적 워킹 그룹

노드의 모듈 문법으로 사용되고 있다.



다음 commonJS 문법을 ES6문법으로 변환하여라.


```javascript
const React = require('react');

const { Component } = React;

const Try = require('./Try');

module.exports = Baseball;
```

```javascript
import React, { Component } from 'react';

import Try from './Try';

export default Baseball;
```

