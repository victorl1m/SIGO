const db = require('./_database')

async function createTables(){
  await db.connect()

  await db.query(`CREATE TABLE tb_clients(
   client_id serial PRIMARY KEY,
   client_cpf VARCHAR(50),
   client_cnpj VARCHAR (50),
   client_name VARCHAR (50) UNIQUE NOT NULL,
   client_email VARCHAR (255),
   client_phone VARCHAR,
   client_zipcode VARCHAR (10),
   client_street VARCHAR (50),
   client_number NUMERIC
  )`)

  await db.query(`CREATE TABLE tb_contractors(
    
  )`)

  await db.query(`CREATE TABLE tb_exec_tasks(
    jobsite_id serial NOT NULL PRIMARY KEY,
    floor VARCHAR (50),
    room VARCHAR (50),
    type VARCHAR (50),
    category VARCHAR (50),
    subcategory VARCHAR (50),
    assignee VARCHAR (50),
    priority VARCHAR (50),
    status VARCHAR (50)
  )`)

  await db.query(`CREATE TABLE tb_admin_tasks(
    jobsite_id integer NOT NULL PRIMARY KEY,
    category VARCHAR (50),
    subcategory VARCHAR (50),
    assignee VARCHAR (50),
    priority VARCHAR (50),
    status VARCHAR (50),
    budgeted MONEY,
    expended MONEY,
    deadline DATE,
    notes VARCHAR (200)
  )`)

  await db.end()

  console.log("createTables(): Done!");
}

createTables()