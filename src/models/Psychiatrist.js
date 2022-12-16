const { Model, DataTypes } = require('sequelize')
class Psychiatrist extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        introduction: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'Psychiatrist',
      },
    )
  }
  static associate(models) {
    this.hasMany(models.Appointment, {
      foreignKey: 'id_psychiatrist',
      as: 'psychiatrist',
    })
  }
}

module.exports = Psychiatrist
