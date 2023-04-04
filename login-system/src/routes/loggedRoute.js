//importe as funções que deseja utilizar 
const express = require('express');
const cookieParser = require("cookie-parser");

const loggedUser = require('../controllers/loggedPage');
const router = express.Router();

router.use(cookieParser());

//templates de rota
router.get('/logged', loggedUser);

//router.post('/logged', loginUser);

module.exports = router; 