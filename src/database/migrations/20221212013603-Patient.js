'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('patient', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
          type: Sequelize.STRING,
      },
      email: {
          type: Sequelize.STRING,
      },
      birth: {
          type: Sequelize.DATE,
      },
      createdAt: {
          type: Sequelize.DATE,
      },
      updatedAt: {
          type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('patient');
  }
};
