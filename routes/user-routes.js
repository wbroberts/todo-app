const router = require('express').Router();

const registerUser = require('../helpers/user-functions/registerUser');

router.route('/').get(registerUser);

module.exports = router;
