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
    model: {
      type: DataTypes.STRING,
      validate: { isString: true }
    },
    size: {
      type: DataTypes.INTEGER,
      validate: { isInt: true }
    },
    speed: {
      type: DataTypes.STRING,
      validate: { isString: true }
    },
    life: {
      type: DataTypes.INTEGER,
      validate: { isInt: true }
    },
  }, {
    sequelize,
    modelName: 'macbooks',
  });
  return macbooks;
};