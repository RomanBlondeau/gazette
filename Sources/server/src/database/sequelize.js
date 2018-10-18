const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(...config.database_config);

module.exports = {
  sequelize,
  Sequelize
};
