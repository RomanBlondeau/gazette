const router = require('express').Router();
const { passport } = require('../authentification'); // TODO use as middleware on secure root

// Middleware
const bodyChecker = require('../middleware/bodyChecker/bodyChecker');
const errorHandler = require('../middleware/errorHandler/errorHandler');

const register = require('./user/post/register');
const login = require('./user/post/login');

router.use('/user/register', bodyChecker('username', 'email', 'password'), register);
router.use('/user/login', bodyChecker('username', 'password'), login);

router.use(errorHandler);

module.exports = {
  router
};
