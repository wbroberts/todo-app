const router = require('express').Router();

const getAllTodos = require('../helpers/todo-functions/getAllTodos');
const newTodo = require('../helpers/todo-functions/newTodo');
const todoCompletion = require('../helpers/todo-functions/todoCompletion');
const removeTodo = require('../helpers/todo-functions/removeTodo');
const getOneTodo = require('../helpers/todo-functions/getOneTodo');

router
  .route('/')
  .post(newTodo) // creates a new todo
  .get(getAllTodos); // gets and returns all todos

router
  .route('/:id')
  .get(getOneTodo) // gets and returns one todo
  .put(todoCompletion) // marks todo complete or incomplete
  .delete(removeTodo); // removes todo

module.exports = router;
