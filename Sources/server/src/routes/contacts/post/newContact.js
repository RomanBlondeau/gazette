const router = require('express').Router();

const Contacts = require('../../../database/models/contacts')();

router.post('/', (req, res, next) => {
  const { name, email, userId } = req.body;

  if (!email) {
    res.status(400).json({
      message: 'Invalid arguments. Email is mandatory.'
    });
  } else {
    Contacts.findOrCreate({
      where: { email },
      defaults: { name, email, user_id: userId }
    })
      .spread((contact, created) => {
        if (!created) {
          res.status(400).json({ message: 'Already exist in database.' });
        } else {
          res.status(200).json({ contact });
        }
      })
      .catch(err => {
        console.log(err);
        next(err);
      });
  }
});

module.exports = {
  router,
  required: ['name', 'email', 'userId']
};
