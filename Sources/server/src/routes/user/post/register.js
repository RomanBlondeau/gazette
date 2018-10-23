const router = require('express').Router();
const validator = require('validator');
const SHA256 = require('crypto-js/sha256');

const User = require('../../../database/models/users')();

router.post('/', async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!validator.isEmail(email) || password.length < 8 || password.length > 25) {
    res.status(400).json({ message: 'Invalid arguments.' });
  } else {
    User.findOrCreate({
      where: { email },
      defaults: { password: SHA256(password).toString(), username }
    })
      .spread((user, created) => {
        if (!created) {
          res.status(400).json({ message: 'Already exist in database.' });
        } else {
          res.status(200).json({ message: 'Success.' });
        }
      })
      .catch(err => {
        next(err);
      });
  }
});

module.exports = router;
