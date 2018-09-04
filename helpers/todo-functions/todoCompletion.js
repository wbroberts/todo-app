const { ObjectID } = require('mongodb');

const Todo = require('../../models/Todo');

// Finds a Todo by its _id and then changes its completed status.
// Incomplete becomes complete, vice versa.
const todoCompletion = (req, res) => {
  const errors = {};
  const todoID = req.params.id;

  if (!ObjectID.isValid(todoID)) {
    errors.todoID = 'Not a valid todo ID';
    return res.status(400).json({ errors });
  }

  Todo.findById(todoID)
    .then(todo => {
      if (!todo.completed) {
        todo.completed = true;
        todo.dateCompleted = Date.now();
        return todo.save();
      } else {
        todo.completed = false;
        todo.dateCompleted = null;
        return todo.save();
      }
    })
    .then(todo => res.status(200).json({ todo }))
    .catch(() => {
      errors.todo = 'Todo not found';
      res.status(404).json({ errors });
    });
};

module.exports = todoCompletion;
