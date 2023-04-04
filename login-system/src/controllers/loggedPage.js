
const loggedPage = (req, res) => {
    res.render('pages/loggedPage', {
        user: req.session.user
    });
}

module.exports = loggedPage;