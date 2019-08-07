/* jshint indent: 2 */
const { sequelize, Sequelize: DataTypes } = require('../sequelize');

module.exports = () =>
  sequelize.define(
    'contacts',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      tableName: 'contacts'
    }
  );
