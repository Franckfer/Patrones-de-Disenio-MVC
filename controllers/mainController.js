const path = require('path')
//requerimos el metodo path para poder trabajar con las rutas directas

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    },
    about: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/about.html'))
    }
}
//exportamos los controladores que se encargan de enviar las distintas vistas 
