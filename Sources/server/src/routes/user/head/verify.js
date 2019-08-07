const router = require('express').Router();

router.head('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = { router, required: [] };
