### useReducer

- 리덕스에 reduce를 거의 그대로 차용하였다.

- 리덕스랑 비슷한 효과를 낼 수 있다.

- 굳이 리덕스를 사용하지 않더라도 userReducer + contextAPI 조합으로 소규모 앱은 충분히 대체 가능하다. 하지만 비동기 처리 부분을 할 때 불편하므로 결국 리덕스를 써야한다.

- state 개수 자체를 줄인다?  => useReducer를 활용하면 하나의 state와 하나의 setState로 통일 할 수 있다.

```jsx
const initialState = {
  winner: '',
  turn: '0',
  tableData: [
      ['','',''],
      ['','',''],
      ['','','']
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

// 액션을 dispatch 할 때마다 reducer 부분이 샐행된다.
// action { type: SET_WINNER, winner: 'O' }
const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner; 이렇게 하면 안됨.
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
    }
    case RESET_GAME: {
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        recentCell: [-1, -1],
      };
    }
    default:
      return state;
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
    
// dispatch 안에 들어가는 것을 액션 객체라고 한다.
// dispatch 하면 액션을 실행한다.
// 액션을 해석해서 state를 직접 바꿔주는 역할을 하는 것이 reducer이다.
  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: 'O' });
  }, []);
```

![1570113999319](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1570113999319.png)

- state는 직접 수정할 수 없고 state를 수정하고 싶으면 action을 만들고 action을 실행해야 한다. 이벤트가 발생할 때 action을 dispatch해서 state를 변경해야 한다. state를 어떻게 변경할지는 reducer에 기록한다.

- 리액트에서는 state를 변경할 때 항상 불변성을 지켜줘야 한다.

- **dispatch는 비동기로 동작**한다. 반면에 redux는 동기적으로 동작한다.
- **비동기인 처리에서 뭔가를 하기위해서는 useEffect를 사용해야 한다.** 

### useCallback

**useCallback은 자신이 인자로 받은 콜백 함수를 기억한다.** 다만, 너무 강하게 기억(함수 내부의 데이터가 변경되어도 처음 기억한 함수의 데이터만 기억한다. 변경된 데이터를 감지 하지 못한다. ) 해서 가끔 함수를 새로 만들 필요가 있는데 그 때가 **두 번째 인자의 state(바뀔 여지가 있는 데이터)가 변경될 때** 이다. **콜백 함수를 기억하는 이유는 부모 컴포넌트에서 자식 컴포넌트에게 함수를 props로 전달할 때 불필요한 렌더링이 발생한다.(계속 다른 함수를 전달하는 줄 알기 때문에)**

**간단하게 생각하면 props로 넣어주는 함수는 대부분 useCallback으로 감싸주는 것이 좋다. 함수 내부 데이터 중 바뀔 여지가 있는 것을 useCallback의 두 번째 인자로 넣어준다.** 



**무엇때문에 리렌더링이 되는지 확인하기 위해서는 어떻게 해야할까?**

=> **useEffect, useRef**를 사용한다. 

```javascript
const ref = useRef([]);
useEffect(() => {
    // false가 나오면 그 데이터 때문에 리렌더링이 발생하는 것이다.
    console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2],)
    ref.current = [rowIndex, cellIndex, dispatch];
}, [rowIndex, cellIndex, dispatch]); 
```

- React.memo를 이용하여 성능 최적화를 할 수 있다.

- React.memo를 사용하였는데도 불필요한 리렌더링 발생한다면 최후의 수단으로 useMemo를 이용하여 컴포넌트 자체를 기억할 수도 있다.



## 질문

1. 다음이 설명하는 Hook 메서드는 무엇인가?

> [`useState`](https://ko.reactjs.org/docs/hooks-reference.html#usestate)의 대체 함수이다. `(state, action) => newState`의 형태로 reducer를 받고 `dispatch` 메서드와 짝의 형태로 현재 state를 반환한다. 

답. useReducer

2. props로 전달하는 함수는 대부분 [ ]으로 감싸주는 것이 좋다. 함수 내부 데이터 중 바뀔 여지가 있는 것을 [ ]의 두 번째 인자로 넣어준다. 

답. useCallback

3. useReducer 메서드를 사용하면 state는 직접 수정할 수 없고 state를 수정하고 싶으면 [ 1 ]을 만들고 실행해야 한다. 이벤트가 발생할 때 [ 1 ]을 [ 2 ]해서 state를 변경해야 한다. state를 어떻게 변경할지는 [ 3 ]에 기록한다.

답. action, dispatch, reducer 