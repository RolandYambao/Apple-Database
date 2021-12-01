'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class macbooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  macbooks.init({
    model: DataTypes.STRING,
    size: DataTypes.INTEGER,
    speed: DataTypes.STRING,
    life: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'macbooks',
  });
  return macbooks;
};