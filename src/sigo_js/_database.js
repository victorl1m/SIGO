const db_user = 'postgres'
const db_host = 'localhost'
const db_name = 'postgres'
const db_password = 'sigo'
const db_port = '5432'

const pg = require('pg')

const client = new pg.Client({
  user: db_user,
  host: db_host,
  database: db_name,
  password: db_password,
  port: db_port,
})

module.exports = client
