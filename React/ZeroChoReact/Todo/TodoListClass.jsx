import React, {PureComponent} from 'react';

class TodoListClass extends PureComponent {
  render() {
    const { todoInfo, changeHandler } = this.props;
    return (
      <li id={todoInfo.id} className="todo-item">
        <input className="custom-checkbox" type="checkbox" id={`ck-${todoInfo.id}`} onChange={changeHandler} checked={todoInfo.completed} />
        <label htmlFor={`ck-${todoInfo.id}`}>{todoInfo.content}</label>
        <i className="remove-todo far fa-times-circle"></i>
      </li>
    )
  }
}

export default TodoListClass;