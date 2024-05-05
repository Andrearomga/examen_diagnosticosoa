// materiaService.js

const Alumno = require('../models/alumnoModel');
const materiaRepository = require('../repositories/materiaRepository');

const obtenerMateriasDeAlumno = async (alumnoId) => {
    try {
        const alumno = await Alumno.findByPk(alumnoId);
        if (!alumno) {
            throw new Error('Alumno no encontrado');
        }
        const materias = await alumno.getMaterias(); // Accede a las materias asociadas usando el alias "Materias"
        return materias;
    } catch (error) {
        throw new Error('Error al obtener las materias del alumno: ' + error.message);
    }
};

const crearMateria = async (nombre) => {
    const nuevaMateria = await materiaRepository.crearMateria(nombre);
    return nuevaMateria;
};

const asignarMateriaAAlumno = async (materiaId, alumnoId) => {
    await materiaRepository.asignarMateriaAAlumno(materiaId, alumnoId);
};

module.exports = {
    obtenerMateriasDeAlumno,
    crearMateria,
    asignarMateriaAAlumno
};
