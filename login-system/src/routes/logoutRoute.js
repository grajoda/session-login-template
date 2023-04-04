const express = require('express');
const cookieParser = require("cookie-parser");

const logout = require('../controllers/logout');
const router = express.Router();

router.use(cookieParser());

//templates de rota
router.get('/logout', (req, res) => {
    //code
    res.redirect('/');
});

router.post('/logout', logout)


module.exports = router; 