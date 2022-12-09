const Router = require('express').Router()
const controller = require('../controllers/PickupController')
// const middleware = require('../middleware')

Router.get('/', controller.getAllPickups)
Router.get(
  '/:pickup_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getPickupById
)
Router.put(
  '/:pickup_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.updatePickupById
)

Router.delete(
  '/:pickup_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.deletePickup
)
Router.post(
  '/addPickup',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.addPickup
)

module.exports = Router
