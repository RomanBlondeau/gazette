/* jshint indent: 2 */
const { sequelize, Sequelize: DataTypes } = require('../sequelize');

module.exports = () =>
  sequelize.define(
    'projects',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
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
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      timestamp: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      tableName: 'projects'
    }
  );
