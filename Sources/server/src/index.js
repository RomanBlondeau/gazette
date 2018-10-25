const express = require('express');
const initApp = require('./app');
const initDatabase = require('./database');
const { router } = require('./routes');

const app = express();

initApp(app, express);
initDatabase();

app.use(router);

module.exports = app;
