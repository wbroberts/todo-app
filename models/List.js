const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = Schema({
  listTitle: {
    type: String,
    required: true
  },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const List = mongoose.model('List', listSchema);

module.exports = List;
