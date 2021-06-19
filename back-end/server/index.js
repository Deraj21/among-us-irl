const envConfig = require("dotenv").config()
const express = require("express")
const { Pool, Client } = require('pg')
const Ably = require("ably")
const app = express()

const ABLY_API_KEY = process.env.ABLY_API_KEY

////////////

let { CONNECTION_STRING, HOST, DATABASE, USER, PORT, PASSWORD } = process.env

console.log(process.env)

const client = new Client({
  connectionString: CONNECTION_STRING //,
  // user: USER,
  // host: HOST,
  // database: DATABASE,
  // password: PASSWORD,
  // port: PORT
})

client.connect()
  .then(res => console.log('db response:', res))
  .catch(err => console.log('db error:', err))


