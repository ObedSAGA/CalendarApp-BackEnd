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

//Toda petición http get cuya ruta no coincida con las que haz configurado anteriormente, express la redirige al archivo index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
  });


// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running in port: ${process.env.PORT}`);
})






