const express = require('express');
const initApp = require('./app');
const initDatabase = require('./database');

const app = express();

initApp(app, express);
initDatabase();
