const { Customer, Order } = require('../models')

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll()
    res.send(customers)
  } catch (error) {
    throw error
  }
}

const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.customer_id)
    res.send(customer)
  } catch (error) {
    throw error
  }
}
const addCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body)

    res.send(customer)
  } catch (error) {
    throw error
  }
}
const updateCustomerById = async (req, res) => {
  try {
    const customerId = parseInt(req.params.customer_id)
    const updateCustomer = await Customer.update(req.body, {
      where: { id: customerId }
    })
    res.send(updateCustomer)
  } catch (error) {
    throw error
  }
}
const getCustomerOrder = async (req, res) => {
  try {
    const customer = await Customer.findAll({
      include: [
        {
          model: 'order',
          as: 'customer_order',
          include: [
            {
              model: 'MenuItems',
              as: 'order_items'
            }
          ]
        }
      ]
    })
    res.send(customer)
  } catch (error) {
    throw error
  }
}

const deleteCustomer = async (req, res) => {
  try {
    await Customer.destroy({ where: { id: req.params.customer_id } })
    res.send({
      msg: 'Customer Removed from list',
      payload: req.params.customer_id,
      status: 'OK'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllCustomers,
  addCustomer,
  getCustomerById,
  deleteCustomer,
  updateCustomerById,
  getCustomerOrder
}
