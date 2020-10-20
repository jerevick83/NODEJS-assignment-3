const express = require('express');
const path = require('path');
const home = express.Router();

home.get('/home', (req, res, next)=>res.sendFile(path.join(__dirname, '..', 'views', 'home.html'))
);

module.exports = home;