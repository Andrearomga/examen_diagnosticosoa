const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

// Rutas para Alumnos
router.get('/', alumnoController.obtenerTodosLosAlumnos);
router.post('/', alumnoController.crearAlumno);

// Ruta para obtener todos los alumnos de un tutor
router.get('/tutor/:tutorId/alumnos', alumnoController.obtenerAlumnosDeTutor);

router.post('/asignar-materia-alumno', alumnoController.asignarMateriaAAlumno);
router.get('/:alumnoId/materias', alumnoController.obtenerMateriasDeAlumno);
router.post('/alumno/asignar', alumnoController.asignarAlumnoATutor);

module.exports = router;
