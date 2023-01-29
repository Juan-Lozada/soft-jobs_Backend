require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const indexRoute = require('./src/indexRoute/indexRoute')
const PORT = process.env.DB_PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/', indexRoute)
app.listen(PORT, `El servidor esta encendio en el puerto: ${PORT}` )

