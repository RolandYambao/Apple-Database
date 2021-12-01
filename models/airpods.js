'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airpods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  airpods.init({
    model: DataTypes.STRING,
    resistant: DataTypes.BOOLEAN,
    charge: DataTypes.STRING,
    life: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'airpods',
  });
  return airpods;
};