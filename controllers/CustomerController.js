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
  getCustomerById,
  deleteCustomer
}
