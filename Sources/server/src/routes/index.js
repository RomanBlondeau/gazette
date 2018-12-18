const router = require('express').Router();
const { passport } = require('../authentification'); // TODO use as middleware on secure root

// Middleware
const bodyChecker = require('../middleware/bodyChecker/bodyChecker');
const errorHandler = require('../middleware/errorHandler/errorHandler');

/**
 * LOGIN
 */
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

/**
 * PROJECTS
 */
const { router: projectsGetByUserId } = require('./projects/get/getByUserId');
const { router: newProject, required: newProjectRequired } = require('./projects/post/newProject');
const { router: projectsDeleteByProjectId } = require('./projects/delete/deleteByProjectId');
const { router: sendProject, required: sendProjectRequired } = require('./projects/post/send');

/**
 * CONTACTS
 */
const { router: contactsGetByUserId } = require('./contacts/get/getByUserId');
const { router: contactsDeleteByContactId } = require('./contacts/delete/deleteByContactId');
const { router: newContact, required: newContactRequired } = require('./contacts/post/newContact');

/**
 * USER
 */
const { router: getAllData } = require('./user/get/allData');
const { router: deleteByUserId } = require('./user/delete/deleteByUserId');

/**
 * ROUTER
 */

// USER
router.use('/user/register', bodyChecker(registerRequired), register);
router.use('/user/login', bodyChecker(loginRequired), login);
router.use('/user/forgotPassword', bodyChecker(forgotPasswordRequired), forgotPassword);
router.use('/user/resetPassword', bodyChecker(resetPasswordRequired), resetPassword);
router.use('/user/verify', passport.authenticate('jwt', { session: false }), verify);
router.use('/user', passport.authenticate('jwt', { session: false }), getAllData);
router.use('/user', passport.authenticate('jwt', { session: false }), deleteByUserId);

// PROJECTS
router.use('/projects', passport.authenticate('jwt', { session: false }), projectsGetByUserId);
router.use(
  '/projects/new',
  [passport.authenticate('jwt', { session: false }), bodyChecker(newProjectRequired)],
  newProject
);
router.use(
  '/projects',
  passport.authenticate('jwt', { session: false }),
  projectsDeleteByProjectId
);
router.use(
  '/projects/send',
  passport.authenticate('jwt', { session: false }),
  bodyChecker(sendProjectRequired),
  sendProject
);

// CONTACTS
router.use('/contacts', passport.authenticate('jwt', { session: false }), contactsGetByUserId);
router.use(
  '/contacts/new',
  [passport.authenticate('jwt', { session: false }), bodyChecker(newContactRequired)],
  newContact
);
router.use(
  '/contacts',
  passport.authenticate('jwt', { session: false }),
  contactsDeleteByContactId
);

router.use(errorHandler);

module.exports = {
  router
};
