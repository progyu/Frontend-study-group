import React, { Component, createRef } from 'react';
import TodoListClass from './TodoListClass.jsx';

class TodoClass extends Component {
  state = {
    todos: [
      // { id: 1, content: 'HTML', completed: false },
      // { id: 2, content: 'CSS', completed: true },
      // { id: 3, content: 'Javascript', completed: false }
    ],
    value: '',
  };

  inputRef = createRef();

  getId = () => {
    const { todos } = this.state;
    return todos.length ? Math.max(...todos.map(({ id }) => id)) +1 : 1;
  };
  
  delTodo = (e) => {
    const { todos } = this.state;
    if(!e.target.classList.contains('remove-todo')) return;
    this.setState({
      todos: todos.filter(todo=> todo.id !== +e.target.parentNode.id )
    });
  };

  changeCheck = (e) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => todo.id === +e.target.parentNode.id ? ({...todo, completed: !todo.completed}) : todo )
    })
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value, 
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const { todos, value } = this.state;
    this.setState({
      todos: [...todos, { id: this.getId(), content: value, completd: false}],
      value: '',
    })
  };



  render() {
    const { todos, value } = this.state;
    return (
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">2.0</div>

        <form onSubmit={this.onSubmitForm}>
          <input ref={this.inputRef} className="input-todo" placeholder="What needs to be done?" onChange={this.onChangeInput} value={value} autoFocus />
        </form>
        <ul className="nav">
          <li id="all" className="active">All</li>
          <li id="active">Active</li>
          <li id="completed">Completed</li>
        </ul>

        <ul className="todos" onClick={this.delTodo}>
          {todos.map(todo => {
              return (
                <TodoListClass key={todo.id + todo.content} todoInfo={todo} changeHandler={this.changeCheck}/>
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
    )
  }
}


export default TodoClass;