const Alumno = require('../models/alumnoModel');
const Tutor = require('../models/tutorModel');

const obtenerTodosLosAlumnos = async () => {
  const alumnos = await Alumno.findAll();
  return alumnos;
};



// Función para crear un nuevo alumno
const crearAlumno = async (nombre, edad, tutorId) => {
  try {
    const nuevoAlumno = await Alumno.create({ nombre, edad, TutorId: tutorId });
    return nuevoAlumno;
  } catch (error) {
    throw new Error('Error al crear un nuevo alumno');
  }
};

const obtenerAlumnosDeTutor = async (tutorId) => {
    try {
      const alumnos = await Alumno.findAll({ where: { TutorId: tutorId } });
      return alumnos;
    } catch (error) {
      throw new Error('Error al obtener los alumnos del tutor');
    }
  };


const obtenerAlumnoPorId = async (id) => {
  try {
    const alumno = await Alumno.findByPk(id);
    if (!alumno) {
      throw new Error('Alumno no encontrado');
    }
    return alumno;
  } catch (error) {
    console.error('Error al obtener alumno por ID:', error);
    throw new Error('Error al obtener alumno por ID');
  }
};


const asignarTutorAAlumno = async (alumnoId, tutorId) => {
  try {
    const alumno = await Alumno.findByPk(alumnoId);
    const tutor = await Tutor.findByPk(tutorId);

    if (!alumno || !tutor) {
      throw new Error('No se encontró el alumno o el tutor.');
    }

    // Asignar el tutor al alumno
    alumno.setTutor(tutor);
    await alumno.save();

    return alumno;
  } catch (error) {
    throw new Error('Error al asignar tutor a alumno: ' + error.message);
  }
};

const obtenerMateriasDeAlumno = async (alumnoId) => {
  try {
    const alumno = await Alumno.findByPk(alumnoId, { include: 'Materias' });
    if (!alumno) {
      throw new Error('Alumno no encontrado');
    }
    return alumno.Materias;
  } catch (error) {
    throw new Error('Error al obtener las materias del alumno: ' + error.message);
  }
};


module.exports = {
  obtenerTodosLosAlumnos,
  crearAlumno,
  obtenerAlumnosDeTutor,
  asignarTutorAAlumno,
  obtenerAlumnoPorId,
  obtenerMateriasDeAlumno
 
  
};
