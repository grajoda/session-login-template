// rotas
//importe as funções que deseja utilizar 
const express = require('express');
const router = express.Router();

//importe as rotas
const loginRoute = require('./loginRoute');
//configure as rotas
router.use('/', loginRoute);

const registerRoute = require('./registerRoute');
router.use('/', registerRoute);

const loggedRoute = require('./loggedRoute');
router.use('/', loggedRoute);

const logoutRoute = require('./logoutRoute');
router.use('/', logoutRoute);

module.exports = router; 

