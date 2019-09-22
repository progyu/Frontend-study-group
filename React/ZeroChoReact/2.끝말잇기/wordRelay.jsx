const React = require('react'); // 쓰이는 애들은 다시 불러와야 한다.
const { useState, useRef } = React; // class WordRelay extends React.Component를 줄일 수 있다.

WordRelay = () => {
  // const [ word, setWord ] = useState('이규하');
  // const [ value, setValue ] = useState('');
  // const [ result, setResult ] = useState('');
  // const onRefInput = useRef(null);

  // const onSubmitForm = (e) => {
  //   e.preventDefault();
  //   if(word[word.length - 1] === value[0]) {
  //     setWord(value);
  //     setValue('');
  //     setResult('딩동댕');
  //     onRefInput.current.focus();
  //   }
  //   else {
  //     setValue('');
  //     setResult('땡');
  //     onRefInput.current.focus();
  //   }
  // }

  // const onChangeInput = (e) => {
  //   setValue(e.target.value);
  // }

  //   return (
  //   <>
  //     <div>{ word }</div>
  //     <form onSubmit= { onSubmitForm }>
  //       <label htmlFor="wordInput">글자를 입력하세요</label>
  //       <input id="wordInput" className="wordInput" type="text" value = { value } onChange = { onChangeInput } ref = { onRefInput } />
  //       <button>입력!!</button>
  //     </form>
  //     <div>{ result }</div>
  //   </>
  //   );
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
      <button onClick = { increase }>+++</button>
      <button onClick = { decrease }>-</button>
    </>
  )
}

module.exports = WordRelay;