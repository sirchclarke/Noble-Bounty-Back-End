'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customers.belongsToMany(models.Course, {
        as: 'courses',
        through: models.Grade,
        foreignKey: 'studentId'
      })
    }
  }
  Customers.init(
    {
      customer_name: DataTypes.STRING,
      customer_address: DataTypes.STRING,
      customer_email: DataTypes.STRING,
      customer_password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Customers',
      tableName: 'customers'
    }
  )
  return Customers
}
