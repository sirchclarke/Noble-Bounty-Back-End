const Router = require('express').Router()
const controller = require('../controllers/OrderController')
const middleware = require('../middleware')

Router.get('/', controller.getAllOrders)
Router.get(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getOrderById
)
Router.put(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateOrderById
)

Router.delete(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteOrder
)
Router.post(
  '/addOrder',
  middleware.stripToken,
  middleware.verifyToken,
  controller.addOrder
)

module.exports = Router
