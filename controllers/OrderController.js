const { Order } = require('../models')

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll()
    res.send(orders)
  } catch (error) {
    throw error
  }
}

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.order_id)
    res.send(order)
  } catch (error) {
    throw error
  }
}
const addOrder = async (req, res) => {
  try {
    const order = await new Order(req.body)
    await order.save()
    res.send(order)
  } catch (error) {
    throw error
  }
}
const updateOrderById = async (req, res) => {
  try {
    const orderId = parseInt(req.params.order_id)
    const updateOrder = await Order.update(req.body, {
      where: { id: orderId }
    })
    res.send(updateOrder)
  } catch (error) {
    throw error
  }
}
const deleteOrder = async (req, res) => {
  try {
    await Order.destroy({ where: { id: req.params.order_id } })
    res.send({
      msg: 'Order Removed from list',
      payload: req.params.order_id,
      status: 'OK'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrder,
  addOrder
}
