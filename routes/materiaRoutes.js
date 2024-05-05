const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');
const alumnoController = require('../controllers/alumnoController');

// Ruta para obtener las materias de un alumno por su ID
router.get('/alumnos/:alumnoId/materias', materiaController.obtenerMateriasDeAlumno);

// Ruta para crear una nueva materia
router.post('/materias', materiaController.crearMateria);

// Ruta para asignar una materia a un alumno
router.post('/asignar-materia', materiaController.asignarMateriaAAlumno);

// Ruta para obtener las materias de un alumno por su ID
router.get('/:id/materias', alumnoController.obtenerMateriasDeAlumno);


module.exports = router;
