// 쪼갠 파일에서 필요로 하는 패키지나 라이브러리를 가져오는 부분
const React = require('react');
// class WordRelay extends React.Component를 줄일 수 있다.
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordRelay = require('./WordRelay'); // WordRelay 컴포넌트를 불러오는 부분

const Hot = hot(WordRelay);

ReactDom.render(<Hot />, document.querySelector('#root'));