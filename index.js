// Importación de módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const router = './routes/router.js';
const path = require('path');
const dotenv = require('dotenv');
const { Pool } = require('pg');

// Configuración de dotenv para variables de entorno
dotenv.config();

// Creación de la aplicación Express
const app = express();

// Middleware para parsear JSON y formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Rutas
const cancionesRoutes = require('./routes/router');
app.use('/cancion', cancionesRoutes);

// Manejador de errores genérico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
