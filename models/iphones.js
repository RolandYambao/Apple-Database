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
    model: {
      type: DataTypes.STRING,
      validate: { isString: true }
    },
    color: {
      type: DataTypes.STRING,
      validate: { isString: true }
    },
    size: {
      type: DataTypes.STRING,
      validate: { isString: true }
    },
    life: {
      type: DataTypes.INTEGER,
      validate: { isInt: true }
    },
  }, {
    sequelize,
    modelName: 'iphones',
  });
  return iphones;
};