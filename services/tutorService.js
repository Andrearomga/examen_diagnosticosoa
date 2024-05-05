const tutorRepository = require('../repositories/tutorRepository');

// Función para crear un nuevo tutor
const crearTutor = async (nombre) => {
  try {
    const nuevoTutor = await tutorRepository.crearTutor(nombre);
    return nuevoTutor;
  } catch (error) {
    throw new Error('Error al crear un nuevo tutor: ' + error.message);
  }
};

const obtenerTodosLosTutores = async () => {
  try {
    const tutores = await tutorRepository.obtenerTodosLosTutores();
    return tutores;
  } catch (error) {
    throw new Error('Error al obtener todos los tutores');
  }
};

// Función para obtener un tutor por su ID
const obtenerTutorPorId = async (tutorId) => {
  const tutor = await tutorRepository.obtenerTutorPorId(tutorId);
  return tutor;
};

module.exports = {
  crearTutor,
  obtenerTodosLosTutores,
  obtenerTutorPorId
};
