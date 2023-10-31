// controllers/apiController.js

const db = require('../app').db; // Importa la conexión a MySQL desde app.js

exports.obtenerDatos = (req, res) => {
  const sql = 'SELECT * FROM tu-tabla';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener datos de MySQL: ' + err.message);
      res.status(500).json({ error: 'No se pueden obtener los datos' });
    } else {
      res.status(200).json(result);
    }
  });
};

// Agrega más controladores según tus necesidades
