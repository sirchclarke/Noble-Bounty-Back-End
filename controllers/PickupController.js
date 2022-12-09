const { Pickup } = require('../models')

const getAllPickups = async (req, res) => {
  try {
    const pickups = await Pickup.findAll()
    res.send(pickups)
  } catch (error) {
    throw error
  }
}

const getPickupById = async (req, res) => {
  try {
    const pickup = await Pickup.findByPk(req.params.pickup_id)
    res.send(pickup)
  } catch (error) {
    throw error
  }
}
const addPickup = async (req, res) => {
  try {
    const pickup = await new Pickup(req.body)
    await pickup.save()
    res.send(pickup)
  } catch (error) {
    throw error
  }
}
const updatePickupById = async (req, res) => {
  try {
    const pickupId = parseInt(req.params.pickup_id)
    const updatePickup = await Pickup.update(req.body, {
      where: { id: orderId }
    })
    res.send(updatePickup)
  } catch (error) {
    throw error
  }
}
const deletePickup = async (req, res) => {
  try {
    await Pickup.destroy({ where: { id: req.params.pickup_id } })
    res.send({
      msg: 'Pickup Removed from list',
      payload: req.params.pickup_id,
      status: 'OK'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllPickups,
  getPickupById,
  updatePickupById,
  deletePickup,
  addPickup
}
