const Tutor = require('../models/tutorModel');

// Función para crear un nuevo tutor
const crearTutor = async (nombre) => {
    try {
      const nuevoTutor = await Tutor.create({ nombre });
      return nuevoTutor;
    } catch (error) {
      throw new Error('Error al crear un nuevo tutor: ' + error.message);
    }
  };
  

// Función para obtener todos los tutores
const obtenerTodosLosTutores = async () => {
  try {
    const tutores = await Tutor.findAll();
    return tutores;
  } catch (error) {
    throw new Error('Error al obtener todos los tutores');
  }
};

// Función para obtener un tutor por su ID
const obtenerTutorPorId = async (tutorId) => {
  try {
    const tutor = await Tutor.findByPk(tutorId);
    if (!tutor) {
      throw new Error('Tutor no encontrado');
    }
    return tutor;
  } catch (error) {
    throw new Error('Error al obtener tutor por ID');
  }
};

module.exports = {
  crearTutor,
  obtenerTodosLosTutores,
  obtenerTutorPorId
};
