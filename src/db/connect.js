const {Pool, Client} = require('pg');
const config = require('./config');

const client = new Client({
  user: config.db_user,
  host: config.db_host,
  database: config.db_name,
  password: config.db_password,
  port: config.db_port,
});

module.exports = client;

/*
(async () => {
  try {
    await client.connect();
    const res = await client.query('SELECT $1::text as message', ['Teste']);
    console.log(res.rows[0].message); // Hello world!
    await client.end();
  } catch (error) {
    console.log(error);
  }
})();
*/
