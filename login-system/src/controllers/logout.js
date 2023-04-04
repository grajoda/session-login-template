const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.redirect('/');
    });
}

module.exports = logout