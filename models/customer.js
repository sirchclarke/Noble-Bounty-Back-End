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
      Customer.hasone(models.Order, {
        foreignKey: 'customer_id'
      })
    }
  }
  Customer.init(
    {
      customer_name: { type: DataTypes.STRING, allowNull: false },
      customer_address: { type: DataTypes.STRING, allowNull: false },
      customer_email: { type: DataTypes.STRING, allowNull: false },
      passwordDigest: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      modelName: 'Customer',
      tableName: 'customers'
    }
  )
  return Customer
}
