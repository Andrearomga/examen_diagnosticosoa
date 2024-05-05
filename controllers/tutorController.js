const tutorService = require('../services/tutorService');

// Controlador para crear un nuevo tutor
const crearTutor = async (req, res) => {
  const { nombre } = req.body;
  try {
    const nuevoTutor = await tutorService.crearTutor(nombre);
    res.status(201).json(nuevoTutor);
  } catch (error) {
    console.error('Error al crear un nuevo tutor:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerTodosLosTutores = async (req, res) => {
  try {
    const tutores = await tutorService.obtenerTodosLosTutores();
    res.json(tutores);
  } catch (error) {
    console.error('Error al obtener todos los tutores:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


// Controlador para obtener un tutor por su ID
const obtenerTutorPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const tutor = await tutorService.obtenerTutorPorId(id);
    res.json(tutor);
  } catch (error) {
    console.error('Error al obtener tutor por ID:', error);
    res.status(404).json({ error: 'Tutor no encontrado' });
  }
};

module.exports = {
  crearTutor,
  obtenerTodosLosTutores,
  obtenerTutorPorId
};
