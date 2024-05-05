const express = require('express');
const bodyParser = require('body-parser');
const alumnoRoutes = require('./routes/alumnoRoutes');
const tutorRoutes = require('./routes/tutorRoutes');
const materiaRoutes = require('./routes/materiaRoutes');
 
const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.use('/api', alumnoRoutes);
app.use('/api', tutorRoutes);
app.use('/api', materiaRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
