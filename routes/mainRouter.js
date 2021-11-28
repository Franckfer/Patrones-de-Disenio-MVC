const express = require('express');
const router = express.Router();
const { home, about } = require('../controllers/mainController');
//hacemos destructuring de los controladores en mainController.js

router.get('/', home) // GET HOME PAGE

router.get('/about', about) // GET ABOUT PAGE

module.exports = router;
//exportamos las rutas