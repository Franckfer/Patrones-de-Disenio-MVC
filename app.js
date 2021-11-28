const express = require('express'); //requerimos express de node-modules
const app = express(); //variable que guarda la ejecuccion de Express para poder usar los metodos del framework
const port = 3000


/* Enrutadores */
let homeRouter = require('./routes/mainRouter')
let aboutRouter = require('./routes/mainRouter')
//guardamos en las variables los archivos requeridos que gestionan los enrutadores



/* Rutas */
app.use('/', homeRouter)
app.use('/about', aboutRouter)
//establecemos las rutas donde vamos a mostrar las vistas
 



/* Middleware a nivel aplicacion donde se establece o configura a todos los archivos */
app.use(express.static('public')); 
//utilizamos el metodo use de express necesario para la configuracion de los archivos estáticos en la carpeta /public



app.listen(port, () => { //usamos el metodo listen para levantar el servidor en nuestro puerto definido
    console.log(`---------------------------------------`);
    console.log(`Server running in the port ${port}`);
    console.log(`Now, you can open http://localhost:${port}`);
    console.log(`---------------------------------------`);
})



module.exports = app;
//exportamos el archivo app.js para poder requerirlo donde lo necesitemos