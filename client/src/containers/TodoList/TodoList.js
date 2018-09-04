import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';

import Todo from '../../components/Todo/Todo';
import AddTodo from '../../components/AddTodo/AddTodo';
import Counter from '../../components/Counter/Counter';

import sortIncomplete from '../../functions/sortIncomplete';

class TodoList extends Component {
  state = {
    todos: [],
    value: '',
    isValid: false
  };

  componentDidMount() {
    axios
      .get('/todo')
      .then(res => {
        let todos = res.data.todos;
        todos = sortIncomplete(todos);
        this.setState({ todos });
      })
      .catch(e => console.log(e));
  }

  removeTodoHandler = id => {
    // Finds the index of the todo and then removes it from the copied array.
    const todoIndex = this.state.todos.findIndex(todo => {
      return todo._id === id;
    });
    const todos = this.state.todos.slice();
    todos.splice(todoIndex, 1);
    // Save the updated array to the state
    this.setState({ todos });
    // Update the server after state is updated
    axios.delete(`/todo/${id}`).then(res => console.log(res.data.success));
  };

  addTodoHandler = e => {
    e.preventDefault();

    if (!this.state.isValid) return;

    const todos = this.state.todos.slice();
    // Adds todo to db first so that the todo data is correct
    axios
      .post('/todo', { text: this.state.value })
      .then(res => {
        const todo = res.data.todo;
        todos.unshift(todo);

        this.setState({ todos, value: '', isValid: false });
      })
      .catch(e => console.log(e.response.data.errors));
  };

  updateCompleted = id => {
    let todos = this.state.todos.slice();
    const todoIndex = todos.findIndex(todo => {
      return todo._id === id;
    });

    axios.put(`/todo/${id}`).then(res => {
      const todo = res.data.todo;
      // Switches out old todo with the new updated one
      todos.splice(todoIndex, 1, todo);
      todos = sortIncomplete(todos);
      // This is for the animation to complete
      this.setState({ todos });
    });
  };

  updateValueHandler = e => {
    const value = e.target.value;
    let isValid;

    value.trim().length < 2 ? (isValid = false) : (isValid = true);
    this.setState({ value, isValid });
  };

  render() {
    const renderTodos = this.state.todos.map(todo => {
      return (
        <CSSTransition
          in
          appear
          mountOnEnter
          unmountOnExit
          timeout={300}
          classNames="fade"
          key={todo._id}
        >
          <Todo
            text={todo.text}
            createdAt={todo.dateCreated}
            completed={todo.completed}
            completedAt={todo.dateCompleted}
            remove={() => this.removeTodoHandler(todo._id)}
            updateComplete={() => this.updateCompleted(todo._id)}
          />
        </CSSTransition>
      );
    });

    return (
      <div>
        <Counter todos={this.state.todos} />
        <AddTodo
          submitTodo={this.addTodoHandler}
          updateValue={this.updateValueHandler}
          inputValue={this.state.value}
          isValid={this.state.isValid}
        />
        <TransitionGroup component="ul">{renderTodos}</TransitionGroup>
      </div>
    );
  }
}

export default TodoList;
