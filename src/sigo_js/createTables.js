const db = require('./_database')

async function createTables(){
  await db.connect()

  await db.query(`CREATE TABLE tb_client(
   id serial PRIMARY KEY,
   client_name VARCHAR (50) UNIQUE NOT NULL
  )`)

  await db.query(`CREATE TABLE tb_jobsite(
   id serial PRIMARY KEY,
   jobsite_name VARCHAR (50) UNIQUE NOT NULL
  )`)

  await db.query(`CREATE TABLE tb_client_jobsite(
    client_id integer NOT NULL,
    jobsite_id integer NOT NULL,
    PRIMARY KEY (client_id, jobsite_id),
    FOREIGN KEY (client_id) REFERENCES tb_client (id),
    FOREIGN KEY (jobsite_id) REFERENCES tb_jobsite (id)
  )`)

  await db.end()

  console.log("createTables(): Done!");
}

createTables()