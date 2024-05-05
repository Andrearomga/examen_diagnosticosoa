const alumnoRepository = require('../repositories/alumnoRepository');

const Alumno = require('../models/alumnoModel');
const Tutor = require('../models/tutorModel');
const Materia = require('../models/materiaModel');

// Función para obtener todos los alumnos
const obtenerTodosLosAlumnos = async () => {
    try {
        const alumnos = await alumnoRepository.obtenerTodosLosAlumnos();
        return alumnos;
    } catch (error) {
        throw new Error('Error al obtener todos los alumnos: ' + error.message);
    }
};

// Función para crear un nuevo alumno
const crearAlumno = async (nombre, tutorId) => {
    try {
        
        const nuevoAlumno = await alumnoRepository.crearAlumno(nombre, tutorId);
        return nuevoAlumno;
    } catch (error) {
        throw new Error('Error al crear un nuevo alumno: ' + error.message);
    }
};






// Función para obtener todos los alumnos de un tutor por su ID
const obtenerAlumnosDeTutor = async (tutorId) => {
  try {
      const alumnos = await Alumno.findAll({
          where: {
              TutorId: tutorId // Buscar alumnos que pertenecen al tutor con el ID proporcionado
          }
      });
      return alumnos;
  } catch (error) {
      throw new Error('Error al obtener los alumnos del tutor: ' + error.message);
  }
};
  


  const asignarAlumnoATutor = async (alumnoId, tutorId) => {
    try {
      const alumno = await alumnoRepository.obtenerAlumnoPorId(alumnoId);
      if (!alumno) {
        throw new Error('Alumno no encontrado');
      }
  
      const alumnoConTutor = await alumnoRepository.asignarTutorAAlumno(alumnoId, tutorId);
      return alumnoConTutor;
    } catch (error) {
      throw new Error('Error al asignar alumno a tutor: ' + error.message);
    }
  };
  



const asignarMateriaAAlumno = async (alumnoId, materiaId) => {
  try {
    const alumno = await Alumno.findByPk(alumnoId);
    const materia = await Materia.findByPk(materiaId);

    if (!alumno || !materia) {
      throw new Error('Alumno o materia no encontrada');
    }

    await alumno.addMateria(materia);
    return alumno;
  } catch (error) {
    throw new Error('Error al asignar materia a alumno: ' + error.message);
  }
};

const obtenerMateriasDeAlumno = async (alumnoId) => {
    try {
      const materias = await materiaRepository.obtenerMateriasDeAlumno(alumnoId);
      return materias;
    } catch (error) {
      throw new Error('Error al obtener las materias del alumno: ' + error.message);
    }
  };


module.exports = {
    obtenerTodosLosAlumnos,
    crearAlumno,
    asignarAlumnoATutor,
    obtenerAlumnosDeTutor,
    asignarMateriaAAlumno,
    obtenerMateriasDeAlumno 
};
