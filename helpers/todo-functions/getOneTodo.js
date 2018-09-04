const { ObjectID } = require('mongodb');

const Todo = require('../../models/Todo');

// Returns one todo by its _id
const getOneTodo = (req, res) => {
  const errors = {};
  const todoID = req.params.id;

  if (!ObjectID.isValid(todoID)) {
    errors.todoID = 'Not a valid todo ID';
    return res.status(400).json({ errors });
  }

  Todo.findById(todoID)
    .select('-__v')
    .then(todo => {
      if (!todo) {
        errors.todo = 'Todo not found';
        throw Error();
      }

      res.status(200).json({ todo });
    })
    .catch(() => res.status(404).json({ errors }));
};

module.exports = getOneTodo;
