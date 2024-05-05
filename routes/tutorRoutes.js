const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController');

// Ruta para obtener todos los tutores
router.get('/tutores', tutorController.obtenerTodosLosTutores);

// Ruta para obtener un tutor por su ID
router.get('/tutores/:id', tutorController.obtenerTutorPorId);

// Ruta para crear un nuevo tutor
router.post('/tutores', tutorController.crearTutor);

module.exports = router;
