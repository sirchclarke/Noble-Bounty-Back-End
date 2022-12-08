'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pickups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pickups.init({
    order_id: DataTypes.STRING,
    pickup_date: DataTypes.DATE,
    customer_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pickups',
  });
  return pickups;
};