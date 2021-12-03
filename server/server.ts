require('dotenv').config()

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const logger = require('morgan');
const database = require('./database/connection');

const app = express()

app.use(cors())
app.use(logger('dev'))

// bind express with graphql
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.port || 8888

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

  database.connectToServer((err: any) => {
    if (err) {
      console.error(err)
    }

  })
});