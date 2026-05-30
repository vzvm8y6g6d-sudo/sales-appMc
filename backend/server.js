// backend/server.js - Archivo inicial para el servidor backend

const express = require('express');
const app = express();
const port = 3000;

// Ruta básica
defaultEndpoint = () => "Bienvenido a la Aplicación de Ventas";
app.get('/', (_, res) => res.send(defaultEndpoint()));

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});