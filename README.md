# Instalaciones
1. Instalar git
    https://git-scm.com/
2. Instalar Visual Studio Code
    https://code.visualstudio.com/
3. Nodejs
   https://nodejs.org/en/
   Verificar con: node --version
4. Crear la carpeta de la aplicacion
5. con cd de cmd ir a la carpeta de la aplicacion
6. npm init -y
7. Express (Framework de Node)
   npm install express
8. crear el archivo index.js y copiar el codigo siguiente
   ```javascript
    const express = require('express')
    const app = express()
    const port = 3000

    // cliente
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
    ```
9. crear la carpeta public
10. crear dentro de la carpeta public el archivo index.html
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Facturación</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <button class="btn btn-outline-primary" >Sitio</button>
    </body>
    </html>
    ``` 
11. crear dentro de la carpeta public el archivo admin.html
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Admin</title>
    </head>
    <body>
        <h1>Admin</h1>
    </body>
    </html>
    ```
# Documentacion
1. Node
   https://nodejs.org/es/docs/
2. Express (Framework de Nodejs)
   http://expressjs.com/
3. Git
   https://git-scm.com/docs/git

# Videos
1. Node 
   https://www.youtube.com/watch?v=fBNz5xF-Kx4
   https://www.youtube.com/watch?v=BhvLIzVL8_o&t=3550s
2. Express (Framework de Node)
   https://www.youtube.com/watch?v=L72fhGm1tfE&t=10s
   https://www.youtube.com/watch?v=794Q71KVw1k&t=537s
3. Git
   https://www.youtube.com/watch?v=zH3I1DZNovk&list=PL9xYXqvLX2kMUrXTvDY6GI2hgacfy0rId&index=1
