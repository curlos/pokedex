require('dotenv').config()

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const database = require('./database/connection');

const pokemonRoute = require('./routes/pokemon')
const itemRoute = require('./routes/item')

const app = express()

app.use(cors())
app.use(logger('dev'))

app.use('/pokemon', pokemonRoute)
app.use('/item', itemRoute)



const PORT = process.env.port || 8888

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

  database.connectToServer((err: any) => {
    if (err) {
      console.error(err)
    }
  })
});