const express = require('express');
const cors = require('cors')
const PORT = process.env.DB_PORT || 3000;
const indexRoute = require('./src/indexRoute/indexRoute');

const app = express();

app.use(cors());

app.use('/', indexRoute )

app.listen(PORT, console.log(`SERVIDOR ENCENDIDO PUERTO: ${PORT}`))

