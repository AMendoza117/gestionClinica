const express = require('express');
const mysql = require('mysql');
const app = express();

// Configura la conexión a MySQL
const db = mysql.createConnection({
  host: 'tu-host',
  user: 'tu-usuario',
  password: 'tu-contraseña',
  database: 'tu-base-de-datos'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL: ' + err.message);
  } else {
    console.log('Conexión a MySQL exitosa');
  }
});

// Define una ruta para obtener datos desde la base de datos
app.get('/obtener-datos', (req, res) => {
  const sql = 'SELECT * FROM tu-tabla';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener datos de MySQL: ' + err.message);
      res.status(500).json({ error: 'No se pueden obtener los datos' });
    } else {
      res.status(200).json(result);
    }
  });
});

// Agrega más rutas y controladores según tus necesidades

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
