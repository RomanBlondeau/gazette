const router = require('express').Router();

const Projects = require('../../../database/models/projects')();
const paramChecker = require('../../../middleware/paramChecker/paramChecker');

const params = ['project_id'];

router.delete('/:project_id', paramChecker(params), (req, res, next) => {
  const { project_id: projectId } = req.params;

  Projects.destroy({ where: { id: projectId } })
    .then(project => {
      if (!project) {
        res.status(401).json({ message: 'Not found.' });
      } else {
        res.status(200).json({
          project
        });
      }
    })
    .catch(err => {
      next(err);
    });
});

module.exports = { router };
