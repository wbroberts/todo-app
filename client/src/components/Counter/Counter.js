import React from 'react';

import './Counter.css';

const counter = props => {
  const incomplete = props.todos.filter(todo => !todo.completed);
  const count = incomplete.length;

  let message;
  if (count > 1) message = `${count} things to do.`;
  else if (count === 1) message = `${count} thing to do`;
  else message = 'nothing to do...';

  return <p className="counter">You have {message}</p>;
};

export default counter;
