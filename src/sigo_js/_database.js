const db_user = 'sabato';
const db_host = 'localhost';
const db_name = 'db_sigo';
const db_password = '1234';
const db_port = '5432';

const pg = require('pg');

const client = new pg.Client({
  user: db_user,
  host: db_host,
  database: db_name,
  password: db_password,
  port: db_port,
});

module.exports = client;
