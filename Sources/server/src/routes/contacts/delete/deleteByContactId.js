const router = require('express').Router();

const Contacts = require('../../../database/models/contacts')();
const paramChecker = require('../../../middleware/paramChecker/paramChecker');

const params = ['contact_id'];

router.delete('/:contact_id', paramChecker(params), (req, res, next) => {
  const { contact_id: contactId } = req.params;

  Contacts.destroy({ where: { id: contactId } })
    .then(contact => {
      if (!contact) {
        res.status(401).json({ message: 'Not found.' });
      } else {
        res.status(200).json({
          contact
        });
      }
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

module.exports = { router };
