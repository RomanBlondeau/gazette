const router = require('express').Router();

const Projects = require('../../../database/models/projects')();
const paramChecker = require('../../../middleware/paramChecker/paramChecker');

const params = ['user_id'];

router.get('/:user_id', paramChecker(params), (req, res, next) => {
  const { user_id: userId } = req.params;

  Projects.findAll({ where: { user_id: userId } })
    .then(projects => {
      if (!projects) {
        res.status(401).json({ message: 'Not found.' });
      } else {
        res.status(200).json({
          projects
        });
      }
    })
    .catch(err => {
      next(err);
    });
});

module.exports = { router };
