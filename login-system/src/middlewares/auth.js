const express = require('express');

const authentication = (req, res) => {
    if (!req.session.user) {
        return next();
    } else {
        res.redirect('/login');
    }
};

module.exports = authentication;