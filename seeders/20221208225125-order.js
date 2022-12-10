'use strict'
const { Customer } = require('../models')
const falso = require('@ngneat/falso')
const { DataTypes } = require('sequelize')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const customer = await Customer.findAll({ raw: true })
    let orders = [...Array(5)].map((_) => ({
      customer_id: customer[Math.floor(Math.random() * customer.length)].id,
      order_date: falso.randRecentDate(),
      item_type: falso.randFood(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('orders', orders)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders')
  }
}
