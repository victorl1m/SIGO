const { Pool } = require("pg");

const db = new Pool({
    user: 'postgres',
    host: 'sigo.cnwuqeg9sx4r.sa-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'sigoproject',
    port: 5432
});

module.exports = db;