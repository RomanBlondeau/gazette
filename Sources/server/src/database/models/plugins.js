/* jshint indent: 2 */
const { sequelize, Sequelize: DataTypes } = require('../sequelize');

module.exports = () =>
  sequelize.define(
    'plugins',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      order: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      fk_id_row: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'rows',
          key: 'uid'
        }
      },
      uid: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      value: {
        type: DataTypes.TEXT('medium'),
        allowNull: true
      },
      type: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      src: {
        type: DataTypes.TEXT('long'),
        allowNull: true
      },
      alt: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      href: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      width: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      height: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      padding: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      fontSize: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      color: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      fontWeight: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      textAlign: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
    },
    {
      tableName: 'plugins'
    }
  );
