'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('appointment', {
      
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        appointment_date: {
            type: Sequelize.DATE,
        },
        diagnosis: {
            type: Sequelize.STRING,
        },
        
        id_psychiatrist: {
            type: Sequelize.INTEGER,
            references: {
                model: 'psychiatrist',
                key: "id",
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        id_patient: {
            type: Sequelize.INTEGER,
            references: {
                model: 'patient',
                key: "id",
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
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
    return queryInterface.dropTable('appointment');
  }
};
