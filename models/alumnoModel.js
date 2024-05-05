// alumnoModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Tutor = require('./tutorModel');
const Materia = require('./materiaModel');

const Alumno = sequelize.define('Alumno', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Definir relaciones
Alumno.belongsTo(Tutor); // Establece la relación con Tutor
Alumno.belongsToMany(Materia, {
  through: 'alumnoMateria', 
  foreignKey: 'AlumnoId', // Nombre del campo en la tabla intermedia que apunta a Alumno
  otherKey: 'MateriumId', // Nombre del campo en la tabla intermedia que apunta a Materia
  as: 'Materias' 
});

module.exports = Alumno;
