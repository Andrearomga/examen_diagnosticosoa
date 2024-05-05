const materiaService = require('../services/materiaService');



// Controlador para obtener las materias de un alumno por su ID
const obtenerMateriasDeAlumno = async (req, res) => {
  const { alumnoId } = req.params;
  try {
    const materias = await materiaService.obtenerMateriasDeAlumno(alumnoId);
    res.json(materias);
  } catch (error) {
    console.error('Error al obtener las materias del alumno:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para crear una nueva materia
const crearMateria = async (req, res) => {
  const { nombre } = req.body;
  try {
    const nuevaMateria = await Materia.create({ nombre });
    res.status(201).json(nuevaMateria);
  } catch (error) {
    console.error('Error al crear una nueva materia:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
// Controlador para asignar una materia a un alumno
const asignarMateriaAAlumno = async (req, res) => {
  const { materiaId, alumnoId } = req.body;
  try {
    await materiaService.asignarMateriaAAlumno(materiaId, alumnoId);
    res.status(200).json({ message: 'Materia asignada correctamente al alumno' });
  } catch (error) {
    console.error('Error al asignar la materia al alumno:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerMateriasDeAlumno,
  crearMateria,
  asignarMateriaAAlumno
};
