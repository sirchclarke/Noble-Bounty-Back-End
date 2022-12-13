const { Customer } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      where: { customer_email: req.body.customer_email },
      raw: true
    })
    console.log(customer)
    if (
      customer &&
      (await middleware.comparePassword(
        customer.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: customer.id,
        customer_email: customer.customer_email
      }
      let token = middleware.createToken(payload)
      console.log(payload)
      return res.send({ customer: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { customer_name, customer_address, customer_email, password } =
      req.body
    let passwordDigest = await middleware.hashPassword(password)
    const customer = await Customer.create({
      customer_name,
      customer_email,
      customer_address,
      passwordDigest
    })
    res.send(customer)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const customer = await Customer.findByPk(req.params.customer_id)
    if (
      customer &&
      (await middleware.comparePassword(
        customer.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await customer.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: customer })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
