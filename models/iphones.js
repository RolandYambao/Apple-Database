'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class iphones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  iphones.init({
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    life: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'iphones',
  });
  return iphones;
};