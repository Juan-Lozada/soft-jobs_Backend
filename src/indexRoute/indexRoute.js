const express = require('express')
const app = express()

const indexController = require('../controllers/indexController')

app.get('/usuarios', indexController.show);
app.post('/usuarios', indexController.addUser);
app.post('/login', indexController.login)
app.get('*', indexController.notFound)


module.exports = app;