const validator = require('validator');

const registrationValidation = userInfo => {
  const errors = {};

  const {
    name,
    username,
    email,
    password,
    avatar
  } = userInfo;

  if (!validator.isLength(name, { min: 1, max: 30 })) {
    
  }
}

module.exports = registrationValidation;