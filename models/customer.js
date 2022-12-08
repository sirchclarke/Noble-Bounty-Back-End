'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Course, {
        as: 'courses',
        through: models.Grade,
        foreignKey: 'studentId'
      })
    }
  }
  Customer.init(
    {
      customer_name: DataTypes.STRING,
      customer_address: DataTypes.STRING,
      customer_email: DataTypes.STRING,
      customer_password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Customer',
      tableName: 'customers'
    }
  )
  return Customer
}
