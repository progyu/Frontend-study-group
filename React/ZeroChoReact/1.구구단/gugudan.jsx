const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); // setFirst: setState 역할. 즉, first 전용 setState // useState(): 괄호 안에는 초기값 설정
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);


  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(first * second === parseInt(value)) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult('정답' + value);
      setValue('');
      inputRef.current.focus();
    }
    else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div>{first}곱하기{second}는?</div>
      <form onSubmit={onSubmitForm}>
        <input type="number" ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력!!</button>
      </form>
      <div>{result}</div>
    </>
    );
};

module.exports = GuGuDan;