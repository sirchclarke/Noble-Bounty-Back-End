const Router = require('express').Router()
const controller = require('../controllers/CustomerController')
const middleware = require('../middleware')

Router.get('/', controller.getAllCustomers)
Router.get(
  '/:customer_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getCustomerById
)
Router.put(
  '/:customer_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateCustomerById
)

Router.delete(
  '/:customer_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteCustomer
)
Router.post(
  '/addCustomer',
  middleware.stripToken,
  middleware.verifyToken,
  controller.addCustomer
)

module.exports = Router
