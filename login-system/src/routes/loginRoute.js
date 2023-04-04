/*
    template de rota usando express
*/
//importe as funções que deseja utilizar 
const express = require('express');
const cookieParser = require("cookie-parser");

const loginUser = require('../controllers/login');
const router = express.Router();

router.use(cookieParser());

//templates de rota
router.get('/', (req, res) => {
    //code
    res.render('pages/mainPage');
});

router.get('/login', (req, res) => {
    //code
    res.render('pages/mainPage');
});

router.post('/login', loginUser);

module.exports = router; 