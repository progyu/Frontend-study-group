const React  = require('react');
const {useState, useRef} = require('react');

const TodoListHooks = require('./TodoListHooks');

const TodoHooks = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const getId = () => {
    return todos.length ? Math.max(...todos.map(({ id }) => id)) +1 : 1;
  };
  
  const delTodo = (e) => {
    if(!e.target.classList.contains('remove-todo')) return;
    setTodos(todos.filter(todo=> todo.id !== +e.target.parentNode.id ))
  };

  const changeCheck = (e) => {
    setTodos(todos.map(todo => todo.id === +e.target.parentNode.id ? ({...todo, completed: !todo.completed}) : todo ))
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: getId(), content: value, completd: false}])
    setValue('');
  };



  return (
    <>
    <div className="container">
      <h1 className="title">Todos</h1>
      <div className="ver">2.0</div>

      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} className="input-todo" placeholder="What needs to be done?" onChange={onChangeInput} value={value} autoFocus />
      </form>
      <ul className="nav">
        <li id="all" className="active">All</li>
        <li id="active">Active</li>
        <li id="completed">Completed</li>
      </ul>

      <ul className="todos" onClick={delTodo}>
        {todos.map(todo => {
            return (
              <TodoListHooks key={todo.id + todo.content} todoInfo={todo} changeHandler={changeCheck}/>
            );
          })
        }
      </ul>
      <div className="footer">
        <div className="complete-all">
          <input className="custom-checkbox" type="checkbox" id="ck-complete-all" />
          <label htmlFor="ck-complete-all">Mark all as complete</label>
        </div>
        <div className="clear-completed">
          <button className="btn">Clear completed (<span className="completed-todos">0</span>)</button>
          <strong className="active-todos">0</strong> items left
        </div>
      </div>
    </div>
    </>
  )
}


module.exports = TodoHooks;