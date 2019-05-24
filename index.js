const express = require('express')
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'facturacion_db',
    password: '1',
    port: 5432,
  })

const app = express()
const port = 3000

// archivos staticos(html,css,javascript) cliente
app.use(express.static('public'))

app.use(express.json());

// api (servidor)
// consultar
app.get('/api/usuarios', (req, res) => {
    pool.query('SELECT * FROM usuarios ORDER BY id_usuario ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
})

// consultar
app.get('/api/usuarios/:id', (req, res) => {
    let id = req.params.id;
    pool.query(`SELECT * FROM usuarios WHERE id_usuario=${id}`, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
})

// agregar
app.post('/api/usuarios', (req, res) => {
  const { usuario_usuario, nombre_usuario, clave_usuario } = req.body

  pool.query('INSERT INTO usuarios (usuario_usuario, nombre_usuario, clave_usuario) VALUES ($1, $2, $3)', [usuario_usuario, nombre_usuario, clave_usuario], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Usuario agregado con ID: ${results.insertId}`)
  })
})

// modificar
app.put('/api/usuarios/:id', (req, res) => {
  let id = req.params.id;
  const { usuario_usuario, nombre_usuario, clave_usuario } = req.body

  pool.query('UPDATE usuarios SET usuario_usuario=$1, nombre_usuario=$2, clave_usuario=$3 WHERE id_usuario=$4', [usuario_usuario, nombre_usuario, clave_usuario,id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Usuario modificado con ID: ${id}`)
  })
})

// eliminar
app.delete('/api/usuarios/:id', (req, res) => {
    let id = req.params.id;
    pool.query(`DELETE FROM usuarios WHERE id_usuario=${id}`, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Usuario eliminado con ID: ${id}`)
    })
})

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto 3000')
})