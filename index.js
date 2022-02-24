const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

//crear el servidor de expres
const app = express();

//conexion con db
dbConnection();

//cors
app.use(cors());

// Directorio Público
app.use( express.static('public') );


// Lectura y parseo del body
app.use(express.json());


//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));



// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running in port: ${process.env.PORT}`);
})






