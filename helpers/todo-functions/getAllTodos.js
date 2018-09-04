const Todo = require('../../models/Todo');

// Returns all Todos from database
const getAllTodos = (req, res) => {
  Todo.find()
    .select('-__v')
    .sort('-dateCreated')
    .then(todos => res.status(200).json({ todos }));
};

module.exports = getAllTodos;
