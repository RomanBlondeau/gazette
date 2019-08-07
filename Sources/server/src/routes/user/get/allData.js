const router = require('express').Router();

const Projects = require('../../../database/models/projects')();
const Contacts = require('../../../database/models/contacts')();
const paramChecker = require('../../../middleware/paramChecker/paramChecker');

const params = ['user_id'];

router.get('/:user_id', paramChecker(params), async (req, res, next) => {
  const { user_id: userId } = req.params;

  try {
    const projects = await Projects.findAll({ where: { user_id: userId } });
    const contacts = await Contacts.findAll({ where: { user_id: userId } });
    if (!projects || !contacts) {
      res.status(401).json({ message: 'Not found.' });
    } else {
      res.status(200).json({
        projects,
        contacts
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = { router };
