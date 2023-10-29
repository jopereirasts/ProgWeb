'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Area),
      this.hasMany(models.Usuario)
    }
  }
  Curso.init({
    sigla: DataTypes.STRING,
    nome: DataTypes.STRING,
    areaId: DataTypes.INTEGER,
    descricao: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};