const express = require('express');
const app = express();
const cors = require('cors')
const port = '4005'
const database = require('./src/database/database')


app.use(cors());
app.use(express.json())
app.use('/redes', require('./src/routes/rede.routes'))

app.listen(port, ()=> {
    console.log('servidor online')
})