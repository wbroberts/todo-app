import React from 'react';

import './Todo.css';
import Button from '../Button/Button';

const todo = props => {
  // const createdAt = moment().to(props.createdAt);
  // const completedAt = moment().to(props.completedAt);
  const checked = props.completed
    ? 'fas fa-check-circle green'
    : 'far fa-circle lightgreen';

  return (
    <li className="todo-item row">
      <div className="side-btn">
        <Button icon={checked} clicked={props.updateComplete} />
      </div>

      <div className="main-text">
        <h3 className="todo-text">{props.text}</h3>
      </div>

      <div className="side-btn">
        <Button icon="far fa-trash-alt red" clicked={props.remove} />
      </div>
    </li>
  );
};

export default todo;
