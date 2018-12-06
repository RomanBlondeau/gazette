const router = require('express').Router();

const Contacts = require('../../../database/models/contacts')();
const paramChecker = require('../../../middleware/paramChecker/paramChecker');

const params = ['user_id'];

router.get('/:user_id', paramChecker(params), (req, res, next) => {
  const { user_id: userId } = req.params;

  Contacts.findAll({ where: { user_id: userId } })
    .then(contacts => {
      if (!contacts) {
        res.status(401).json({ message: 'Not found.' });
      } else {
        res.status(200).json({
          contacts
        });
      }
    })
    .catch(err => {
      next(err);
    });
});

module.exports = { router };
