'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Psychiatrist', [
      {
        name: "Marcos Rogério Garcia",
        email: "marcos@gmail.com",
        password: "ASLKD81234DSAF98LK2!?",
        introduction: "Sou o melhor psicologo do Brasil"
      },
      {
        name: "Guilherme del Toro",
        email: "guilherme@gmail.com",
        password: "ASLKD81234DSAF98LK2!?",
        introduction: "Sou formado em psicologia na USF recentemente"
      } 
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Psychiatrist');
  }
};
