const router = require('express').Router();

const Users = require('../../../database/models/users')();
const paramChecker = require('../../../middleware/paramChecker/paramChecker');

const params = ['user_id'];

router.delete('/:user_id', paramChecker(params), (req, res, next) => {
  const { user_id: userId } = req.params;

  Users.destroy({ where: { id: userId } })
    .then(user => {
      if (!user) {
        res.status(401).json({ message: 'Not found.' });
      } else {
        res.status(200).json({
          user
        });
      }
    })
    .catch(err => {
      next(err);
    });
});

module.exports = { router };
