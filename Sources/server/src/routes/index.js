const router = require('express').Router();
// const { passport } = require('../authentification'); // TODO use as middleware on secure root

// Middleware
const bodyChecker = require('../middleware/bodyChecker/bodyChecker');
const errorHandler = require('../middleware/errorHandler/errorHandler');

const { router: register, required: registerRequired } = require('./user/post/register');
const { router: login, required: loginRequired } = require('./user/post/login');

router.use('/user/register', bodyChecker(registerRequired), register);
router.use('/user/login', bodyChecker(loginRequired), login);

router.use(errorHandler);

module.exports = {
  router
};
