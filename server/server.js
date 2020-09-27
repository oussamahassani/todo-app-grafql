const express = require("express")
const {graphqlHTTP} = require('express-graphql');

const bodyparser = require('body-parser')
const cors = require('cors')
const DB = require('./helper/mongoos')
const Schema = require('./grafql/schema')
const Resolver = require('./grafql/resolver')
require ('dotenv').config()
const app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type, Authorization');

  
  next();
});
app.use(cors({credentials: true, origin: true}));
app.use(
    '/graphql',
    graphqlHTTP({
      schema: Schema,
      rootValue: Resolver,
      graphiql: true
    })




)

app.listen(process.env.Port , () => {
    console.log(`server  runing in port ${process.env.Port}`)
})
