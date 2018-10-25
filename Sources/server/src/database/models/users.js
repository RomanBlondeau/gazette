/* jshint indent: 2 */
const { sequelize, Sequelize: DataTypes } = require('../sequelize');

module.exports = () =>
  sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'username'
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'email'
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'password'
      },
      firstName: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: 'firstName'
      },
      lastName: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: 'lastName'
      }
    },
    {
      tableName: 'users'
    }
  );
