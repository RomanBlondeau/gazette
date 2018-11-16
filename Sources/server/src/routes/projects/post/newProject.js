const router = require('express').Router();

const Projects = require('../../../database/models/projects')();

router.post('/', (req, res, next) => {
  const { name, description, userId } = req.body;

  if (!name) {
    res.status(400).json({
      message: 'Invalid arguments. No project name given.'
    });
  } else {
    Projects.findOrCreate({
      where: { name },
      defaults: { name, description, user_id: userId }
    })
      .spread((project, created) => {
        if (!created) {
          res.status(400).json({ message: 'Already exist in database.' });
        } else {
          res.status(200).json({ message: 'Success.' });
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
  required: ['name', 'description', 'userId']
};
