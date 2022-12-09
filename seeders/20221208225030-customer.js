'use strict'
const falso = require('@ngneat/falso')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let customers = [...Array(5)].map((_) => ({
      name: falso.randFullName(),
      address: falso.randAddress(),
      email: falso.randEmail(),
      passwordDigest: falso.randPassword(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('customers', customers)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers')
  }
}
