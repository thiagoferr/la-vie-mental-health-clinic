'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Patient', [
      {
       name: "Eder Militão",
       email: "edermilitao@gmail.com",
       birth: new Date('2000-12-31'),
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
       name: "Lucas Paquetá",
       email: "lukinha@email.com",
       birth: new Date('2005-08-30'),
       createdAt: new Date(),
       updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Patient');
  }
};
