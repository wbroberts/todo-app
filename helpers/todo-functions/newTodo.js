const Todo = require('../../models/Todo');

const todoValidation = require('../validation/todoValidation');

// Saves a new Todo to the db
const newTodo = (req, res) => {
  const { errors, isValid } = todoValidation(req.body);

  if (!isValid) {
    return res.status(400).json({ errors });
  }

  const { text } = req.body;

  new Todo({ text })
    .save()
    .then(todo => res.status(201).json({ todo }))
    .catch(e => res.status(400).json({ error: e }));
};

module.exports = newTodo;
