const Router = require('express').Router()
const controller = require('../controllers/CustomerController')
// const middleware = require('../middleware')

Router.get('/', controller.getAllCustomers)
Router.get(
  '/:customer_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getCustomerById
)
Router.delete(
  '/:customer_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.deleteCustomer
)
// Router.put(
//   '/order/:customer_id',
//   // middleware.stripToken,
//   // middleware.verifyToken,
//   controller.updateOrder
// )

module.exports = Router
