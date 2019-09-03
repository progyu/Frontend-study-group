# 자바스크립트란?



## 1. 자바스크립트의 탄생

1995년 당시 넷스케이프 커뮤니케이션즈는 정적인 HTML을 동적으로 표현하기 위해 경량의 프로그래밍언어를 도입하기로 결정했는데 그렇게 탄생한 언어가 브렌던 아이크(Brendan Eich)가 개발한 자바스크립트이다.

이렇게 탄생한 자바스크립트는 현재 모든 브라우저의 표준 프로그래밍 언어가 되었다.



## 2. 자바스크립트의 파편화와 표준화

1996년 8월, 마이크로소프트는 자바스크립트의 파생 버전인 “JScript”를 Internet Explorer 3.0에 탑재하였다. 그런데 문제는 JScript와 자바스크립트가 표준화되지 못하고 적당히 호환되었다는 것이다. 즉, 자사 브라우저의 시장 점유율을 점유하기 위해 **자사 브라우저에서만 동작하는 기능을 경쟁적으로 추가**하기 시작했다는 것이다.

이로 인해 브라우저에 따라 웹 페이지가 정상 동작하지 않는 크로스 브라우징 이슈가 발생하기 시작했고 모든 브라우저에서 동작하는 웹 페이지를 개발하는 것은 무척 어려워졌다.

이에 자바스크립트의 파편화를 방지하고 모든 브라우저에서 동일하게 동작하는 표준화된 자바스크립트에 대한 필요성이 제기되기 시작했다. 이를 위해 1996년 11월, 넷스케이프 커뮤니케이션즈는 컴퓨터 시스템의 표준을 관리하는 비영리 표준화 기구인 [ECMA 인터내셔널](https://www.ecma-international.org/)에 자바스크립트의 표준화를 요청하였다.



## 3. 자바스크립트 성장의 역사

초창기 자바스크립트는 웹 페이지의 보조적인 기능을 수행하기 위해 한정적인 용도로 사용되었다.

1999년, 자바스크립트를 이용해서 **비동기적(Asynchronous)**으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 기능인 **Ajax(Asynchronous JavaScript and XML)**가 XMLHttpRequest이라는 이름으로 등장했다.

이전의 웹 페이지는 서버로부터 완전한 HTML을 전송 받아 웹 페이지 전체를 렌더링하는 방식으로 동작했다. 따라서 화면이 전환되면 서버로부터 새로운 HTML을 전송 받아 웹 페이지 전체를 처음부터 다시 렌더링하였다.

2005년, 구글이 발표한 **Google Maps**는 웹 애플리케이션 개발 프로그래밍 언어로서 자바스크립트의 가능성을 확인하는 계기를 마련했다. 웹 브라우저에서 자바스크립트와 Ajax를 기반으로 동작하는 Google Maps가 데스크톱 애플리케이션과 비교해 손색이 없을 정도의 퍼포먼스와 부드러운 화면 전환 효과를 보여준 것이다.

Google Maps를 통해 가능성이 확인된 자바스크립트로 웹 애플리케이션을 구축하려는 시도가 늘어가면서 보다 빠르게 동작하는 자바스크립트 엔진이 요구되었다. 2008년 등장한 구글의 **V8 자바스크립트 엔진**은 이러한 요구에 부합하는 빠른 성능을 보여 주었다. V8 자바스크립트 엔진의 등장으로 자바스크립트는 데스크톱 애플리케이션과 유사한 사용자 경험(user experience)을 제공할 수 있는 웹 애플리케이션 개발 프로그래밍 언어로 정착하게 되었다.

2009년, 브라우저에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서 동작시킬 수 있는 자바스크립트 실행 환경인 **Node.js**의 등장으로 자바스크립트는 웹 브라우저를 벗어나 서버 사이드 애플리케이션 개발에서도 사용되는 범용 프로그래밍 언어가 되었다.

SPA(Single Page Application)가 대중화되면서 [Angular](https://angular.io/), [React](https://facebook.github.io/react), [Vue.js](https://vuejs.org/) 등 다양한 SPA 프레임워크/라이브러리 또한 많은 사용층을 확보하고 있다.



## 4. JavaScript와 ECMAScript

자바스크립트는 일반적으로 프로그래밍 언어로서 기본 뼈대(core)를 이루는 ECMAScript와 브라우저가 별도 지원하는 **클라이언트 사이드 Web API**, 즉 DOM, BOM, Canvas, XMLHttpRequest, Fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web worker 등을 아우르는 개념이다.

클라이언트 사이드 Web API는 ECMAScript와는 별도로 [World Wide Web Consortium (W3C)](https://www.w3.org/)에서 별도의 명세로 관리하고 있다. 클라이언트 사이드 Web API의 자세한 내용은 [MDN web docs: Web API](https://developer.mozilla.org/ko/docs/Web/API)를 참고하기 바란다.



## 5. 자바스크립트의 특징

자바스크립트는 개발자가 별도의 컴파일 작업을 수행하지 않는 **인터프리터 언어(Interpreter language)**이다. 대부분의 모던 자바스크립트 엔진(크롬의 V8, 파이어폭스의 Spidermonkey, 사파리의 JavaScriptCore, 마이크로소프트 엣지의 Chakra 등)은 인터프리터와 컴파일러의 장점을 결합하여 비교적 처리 속도가 느린 인터프리터의 단점을 해결했다. 인터프리터는 소스코드를 즉시 실행하고 컴파일러는 빠르게 동작하는 머신 코드를 생성하고 최적화한다. 이를 통해 컴파일 단계에서 추가적인 시간이 필요함에도 불구하고 보다 빠른 코드의 실행이 가능하다.

자바스크립트는 [명령형(imperative)](https://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D), [함수형(functional)](https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D), [프로토타입 기반(prototype-based) 객체지향 프로그래밍](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85_%EA%B8%B0%EB%B0%98_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)을 지원하는 **멀티 패러다임 프로그래밍 언어**이다.

자바스크립트는 클래스 기반 객체지향 언어보다 효율적이면서 강력한 **프로토타입 기반의 객체지향 언어**이다.





## 더나아가기

[v8엔진](<https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-v8-%EC%97%94%EC%A7%84%EC%9D%98-%EB%82%B4%EB%B6%80-%EC%B5%9C%EC%A0%81%ED%99%94%EB%90%9C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%8B%A4%EC%84%AF-%EA%B0%80%EC%A7%80-%ED%8C%81-6c6f9832c1d9>)

[자바스크립트 엔진](<https://velog.io/@godori/JavaScript-engine-1>)

[브렌던 아이크가 설명하는 자바스크립트의 역사](<https://www.youtube.com/watch?v=3-9fnjzmXWA>)

[Weird History of JavaScript](<https://www.youtube.com/watch?v=Sh6lK57Cuk4>)



> 이 글은 © 2019  Ung-mo Lee [poiemaweb](<https://poiemaweb.com/>)의 내용을 요약한 것입니다.

