/* jshint indent: 2 */
const { sequelize, Sequelize: DataTypes } = require('../sequelize');

module.exports = () =>
  sequelize.define(
    'rows',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uid: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      type: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      value: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      order: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      fk_id_project: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        }
      }
    },
    {
      tableName: 'rows'
    }
  );
