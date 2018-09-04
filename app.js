const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan('dev'));

// user routes
app.use('/user', require('./routes/user-routes'));
// todo routes
app.use('/todo', require('./routes/todo-routes'));

module.exports = app;
