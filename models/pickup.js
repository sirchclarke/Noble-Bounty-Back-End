'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pickup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pickup.belongsTo(models.Order, { ForeignKey: 'order_id' })
    }
  }
  Pickup.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      pickup_date: DataTypes.DATE,
      customer_address: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Pickup',
      tableName: 'pickups'
    }
  )
  return Pickup
}
