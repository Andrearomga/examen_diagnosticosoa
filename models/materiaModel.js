const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Materia = sequelize.define('Materia', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Materia;