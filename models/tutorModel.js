const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Tutor = sequelize.define('Tutor', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Tutor;
