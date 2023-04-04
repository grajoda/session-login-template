
const User = require('../models/userSchema');

const createTeamMember = (req, res) => {
    const email = req.body.email;
    const emailConfirm = req.body.emailConfirm;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;

    if (email != emailConfirm){
        err = "confirme seu email";
        console.log(err);
        res.render('pages/registerPage')

    }else if (password != passwordConfirm){
        err = "confirme sua senha";
        console.log(err);
        res.render('pages/registerPage')

    } else {
        const newUser = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        newUser.save(function(err){
            if(err){
                console.log(err);
            } else {
                console.log("User registrado");
                Team.findOne({_id: newUser._id}, function(err, foundUser){
                    if (err){
                        console.log(err);
                        res.redirect('/login');
                    } else {
                        if(req.body.password == foundUser.password){
                            req.session.user = foundUser;
                            res.cookie('user', foundUser.id);
    
                            console.log('User'+" "+ foundUser.username + ', is logged');
                            console.log("Login sucsessfull!");
                            res.redirect('/logged');
                        }
                    }
            });
        }
    })
}
}

module.exports = createTeamMember