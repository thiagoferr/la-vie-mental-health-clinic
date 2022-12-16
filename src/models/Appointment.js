const { Model, DataTypes } = require('sequelize')

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        appointment_date: DataTypes.DATE,
        diagnosis: DataTypes.STRING,
        id_psychiatrist: DataTypes.INTEGER,
        id_patient: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: 'Appointment',
      },
    )
  }
  static associate(models) {
    this.belongsTo(models.Patient, { foreignKey: 'id_patient', as: 'patient' })
    this.belongsTo(models.Psychiatrist, { foreignKey: 'id_psychiatrist', as: 'psychiatrist' })
  }
}

module.exports = Appointment
