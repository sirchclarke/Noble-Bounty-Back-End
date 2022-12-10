const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const CustomerRouter = require('./CustomerRouter')
const OrderRouter = require('./OrderRouter')
const PickupRouter = require('./PickupRouter')

Router.use('/auth', AuthRouter)
Router.use('/customers', CustomerRouter)
Router.use('/orders', OrderRouter)
Router.use('/pickups', PickupRouter)

module.exports = Router
