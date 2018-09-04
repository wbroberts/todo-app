import React from 'react';

import './AddTodo.css';
import Button from '../Button/Button';

const addTodo = props => {
  const outlineColor = props.isValid ? 'valid' : 'invalid';
  const inputStyle = ['todo-input', outlineColor];
  const buttonStyle = !props.isValid ? 'fas fa-times red' : 'fas fa-plus green';

  return (
    <form className="todo-form" onSubmit={props.submitTodo}>
      <div className="row">
        <div className="side-btn" />
        <div className="main-text">
          <input
            className={inputStyle.join(' ')}
            type="text"
            name="add-todo"
            onChange={props.updateValue}
            autoComplete="off"
            value={props.inputValue}
            autoFocus
            placeholder="Add a todo..."
          />
        </div>
        <div className="side-btn">
          <Button icon={buttonStyle} disabled={!props.isValid} />
        </div>
      </div>
    </form>
  );
};

export default addTodo;
