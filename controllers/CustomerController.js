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

// const updateOrder = async (req, res) => {
//   try {
//     const grades = await Grade.findAll({
//       where: {
//         customer: req.params.student_id
//       }
//     })
//     // res.send(grades)
//     let sum = 0
//     for (const number of grades) {
//       sum += number.grade
//     }
//     let gpa = sum / grades.length
//     // Update GPA
//     const newGpa = await Student.update(
//       { gpa: gpa },
//       { where: { id: req.params.student_id }, returning: true }
//     )
//     res.send(newGpa)
//   } catch (error) {
//     throw error
//   }
// }

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
  updateOrder,
  deleteCustomer
}
