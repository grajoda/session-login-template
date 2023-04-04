/* configurar rotas, especificar porta de execução, e variáveis de ambiente */
require('dotenv').config();
const express = require('express');
const sessions = require('express-session');
const bodyParser = require('body-parser');

const app = express();

/*-----------------------------------------------------------------------
    GENERAL CONFIG
-----------------------------------------------------------------------*/
const path = require('path');

app.use("/public",express.static("../public"));
// Define o caminho completo para a pasta views
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "secret",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));


const Routes = require('./routes/routes');
app.use('/', Routes);


// PORT 
app.listen(2020);
console.log('2020 server online, My lord');




