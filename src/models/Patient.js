const { Model, DataTypes } = require('sequelize')
class Patient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        birth: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: 'Patient',
      },
    )
  }
  static associate(models) {
    this.hasMany(models.Appointment, {
      foreignKey: 'id_patient',
      as: 'patient',
    })
  }
}

module.exports = Patient
