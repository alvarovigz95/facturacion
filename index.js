const express = require('express')
const app = express()
const port = 3000

// archivos staticos(html,css,javascript) cliente
app.use(express.static('public'))


// api (servidor)
app.get('/api/users', (req, res) => {
    res.send('<h1>Hola Mundo</h1>')
})

app.get('/api/users/{id}', (req, res) => {
    res.send('<h1>About</h1>')
})

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto 3000')
})