'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('psychiatrist', {
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
      password: {
        type: Sequelize.STRING,
    },
      introduction: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('psychiatrist');
  }
};
