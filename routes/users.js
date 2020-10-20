const express = require('express')
const users = express.Router()
const path = require('path')
users.get('/users', (req, res, next)=>res.sendFile(path.join(__dirname, '..', '/views', 'users.html'))
)

module.exports = users