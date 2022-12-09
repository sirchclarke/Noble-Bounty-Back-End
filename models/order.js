'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer, { foreignKey: 'customer_id' })
      Order.hasOne(models.Pickup, { foreignKey: 'order_id' })
    }
  }
  Order.init(
    {
      customer_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      order_date: DataTypes.DATE,
      item_type: DataTypes.STRING,
      customer_address: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'orders'
    }
  )
  return Order
}
