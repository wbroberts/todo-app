const { ObjectID } = require('mongodb');

const Todo = require('../../models/Todo');

// Removes todo from db by its _id
const removeTodo = (req, res) => {
  const errors = {};
  const todoID = req.params.id;

  if (!ObjectID.isValid(todoID)) {
    errors.todoID = 'Not a valid todo ID';
    return res.status(400).json({ errors });
  }

  Todo.findByIdAndRemove(todoID)
    .then(resp => {
      if (!resp) {
        errors.todo = 'Todo not found';
        throw Error();
      }

      const message = 'Todo successfully removed';
      res.status(200).json({ message, success: true });
    })
    .catch(() => res.status(404).json({ errors }));
};

module.exports = removeTodo;
