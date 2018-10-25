const router = require('express').Router();
const SHA256 = require('crypto-js/sha256');

const User = require('../../../database/models/users')();

router.post('/', async (req, res, next) => {
  const { resetToken, newPassword } = req.body;

  User.findOne({ where: { reset_password: resetToken } })
    .then(user => {
      if (!user) {
        res.status(401).json({ message: 'Wrong resetToken.' });
      } else {
        user.updateAttributes({
          password: SHA256(newPassword).toString()
        });
        res.status(200).json({ message: 'Password updated.' });
      }
    })
    .catch(err => next(err));
});

module.exports = { router, required: ['resetToken', 'newPassword'] };
