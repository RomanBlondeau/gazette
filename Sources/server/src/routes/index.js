const router = require('express').Router();
const { passport } = require('../authentification'); // TODO use as middleware on secure root

// Middleware
const bodyChecker = require('../middleware/bodyChecker/bodyChecker');
const errorHandler = require('../middleware/errorHandler/errorHandler');

const { router: register, required: registerRequired } = require('./user/post/register');
const { router: login, required: loginRequired } = require('./user/post/login');
const { router: verify } = require('./user/head/verify');
const {
  router: forgotPassword,
  required: forgotPasswordRequired
} = require('./user/post/forgotPassword');
const {
  router: resetPassword,
  required: resetPasswordRequired
} = require('./user/post/resetPassword');
const {
  router: getByUserId
  // required: getByUserIdRequired
} = require('./projects/get/getByUserId');
const { router: newProject, required: newProjectRequired } = require('./projects/post/newProject');

router.use('/user/register', bodyChecker(registerRequired), register);
router.use('/user/login', bodyChecker(loginRequired), login);
router.use('/user/forgotPassword', bodyChecker(forgotPasswordRequired), forgotPassword);
router.use('/user/resetPassword', bodyChecker(resetPasswordRequired), resetPassword);
router.use('/user/verify', passport.authenticate('jwt', { session: false }), verify);
// TODO: check params
router.use('/projects', passport.authenticate('jwt', { session: false }), getByUserId);
router.use(
  '/projects/new',
  passport.authenticate('jwt', { session: false }),
  bodyChecker(newProjectRequired),
  newProject
);

router.use(errorHandler);

module.exports = {
  router
};
