'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Appointment', [
      {
        appointment_date: new Date("1994-10-20"),
        diagnosis: "O paciente está bem",
        id_psychiatrist: 1,
        id_patient: 1,
      },
      {
        appointment_date: new Date("1999-10-15"),
        diagnosis: "O paciente compareceu à consulta",
        id_psychiatrist: 2,
        id_patient: 2,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Appointment')
  }
};
