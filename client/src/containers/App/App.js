import React, { Component } from 'react';

import './App.css';
import TodoList from '../TodoList/TodoList';
import Header from '../../components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;
