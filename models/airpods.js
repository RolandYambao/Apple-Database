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
    model: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    resistant: {
      type: DataTypes.BOOLEAN,
      validate: { allowNull: false }
    },
    charge: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    life: {
      type: DataTypes.INTEGER,
      validate: { isInt: true }
    },
  }, {
    sequelize,
    modelName: 'airpods',
  });
  return airpods;
};