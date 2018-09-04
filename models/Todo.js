const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const todoSchema = Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: moment
  },
  dateCompleted: {
    type: Date
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
