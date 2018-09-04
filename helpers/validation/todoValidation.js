const validator = require('validator');

const isObjEmpty = require('../functions/isEmpty');

const todoValidation = todo => {
  const errors = {};
  let { text } = todo;

  text = text.trim();

  if (!validator.isLength(text, { min: 2 })) {
    errors.text = 'Todo needs to be at least two characters';
  }

  if (validator.isEmpty(text)) {
    errors.text = 'Todo text is required';
  }

  return {
    errors,
    isValid: isObjEmpty(errors)
  };
};

module.exports = todoValidation;
