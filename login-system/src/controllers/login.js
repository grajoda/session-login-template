const mongoose = require('mongoose')
const User = require('../models/userSchema')

const loginUser = (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (err) {
            console.log(err);
            res.redirect('/login');
        } else {
            if (req.body.password == foundUser.password) {
                req.session.user = foundUser;
                res.cookie('user', foundUser.id);
                
                console.log('User ' + foundUser.username + ', is logged');

                console.log("Login sucsessfull!");
                res.redirect('/logged');
            }
        }
    })
}

module.exports = loginUser;