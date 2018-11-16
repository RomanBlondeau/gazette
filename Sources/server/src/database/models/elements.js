/* jshint indent: 2 */
const { sequelize, Sequelize: DataTypes } = require('../sequelize');

module.exports = () => {
  sequelize.define(
    'elements',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      project_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      line: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      column: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM('TEXT', 'IMAGE', 'LINK'),
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: 'elements'
    }
  );
};
