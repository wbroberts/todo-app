const User = require('../../models/User');

const registerUser = (req, res) => {
  const { username, email, password, name } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({ error: 'user exists' });
      }

      return new User({
        username,
        email,
        password,
        name
      });
    })
    .then(user => res.status(201).json({ user }))
    .catch(() => res.status(400).json({ error: 'error' }));
};

module.exports = registerUser;
