const alumnoRepository = require('../repositories/alumnoRepository');
const alumnoService = require('../services/alumnoService');
const materiaService = require('../services/materiaService');


// Función para obtener todos los alumnos
const obtenerTodosLosAlumnos = async (req, res) => {
    try {
        const alumnos = await alumnoRepository.obtenerTodosLosAlumnos();
        res.json(alumnos);
    } catch (error) {
        console.error('Error al obtener todos los alumnos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};






// Controlador para crear un nuevo alumno
const crearAlumno = async (req, res) => {
  const { nombre, edad, tutorId } = req.body;
  try {
    const nuevoAlumno = await alumnoRepository.crearAlumno(nombre, edad, tutorId);
    res.status(201).json(nuevoAlumno);
  } catch (error) {
    console.error('Error al crear un nuevo alumno:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};



const obtenerAlumnosDeTutor = async (req, res) => {
  const { tutorId } = req.params;
  try {
      const alumnos = await alumnoService.obtenerAlumnosDeTutor(tutorId);
      res.json(alumnos);
  } catch (error) {
      console.error('Error al obtener los alumnos del tutor:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const asignarAlumnoATutor = async (req, res) => {
  const { alumnoId, tutorId } = req.body;
  try {
    const alumno = await alumnoService.asignarAlumnoATutor(alumnoId, tutorId);
    res.json(alumno);
  } catch (error) {
    console.error('Error al asignar alumno a tutor:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};



const asignarMateriaAAlumno = async (req, res) => {
  const { alumnoId, materiaId } = req.body;
  try {
    const alumno = await alumnoService.asignarMateriaAAlumno(alumnoId, materiaId);
    res.json(alumno);
  } catch (error) {
    console.error('Error al asignar materia a alumno:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

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

// Exporta las funciones del controlador
module.exports = {
    obtenerTodosLosAlumnos,
    crearAlumno,
    asignarAlumnoATutor,
    asignarMateriaAAlumno ,
    obtenerAlumnosDeTutor,
    obtenerMateriasDeAlumno
};
