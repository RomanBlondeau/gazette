const router = require('express').Router();
const SHA256 = require('crypto-js/sha256');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../../database/models/users')();

router.post('/', (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ where: { username, password: SHA256(password).toString() } })
    .then(user => {
      if (!user) {
        res.status(401).json({ message: 'Not found.' });
      } else {
        res.status(200).json({
          token: jwt.sign(user.id, config.secretOrKey),
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        });
      }
    })
    .catch(err => {
      next(err);
    });
});

module.exports = { router, required: ['username', 'password'] };
