const { Alumno } = require('../models/alumnoModel');
const { Materia } = require('../models/materiaModel');

// Función para obtener las materias de un alumno por su ID
const obtenerMateriasDeAlumno = async (alumnoId) => {
    try {
        const alumno = await Alumno.findByPk(alumnoId);
        if (!alumno) {
            throw new Error('Alumno no encontrado');
        }
        const materias = await alumno.getMaterias(); // Método de relación definido en el modelo Alumno
        return materias;
    } catch (error) {
        throw new Error('Error al obtener las materias del alumno: ' + error.message);
    }
};

module.exports = {
    obtenerMateriasDeAlumno
};
