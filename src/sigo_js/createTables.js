const db = require('./_database')

async function createTables(){
  await db.connect()

  await db.query(`CREATE TABLE IF NOT EXISTS tb_client(
   id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   client_cpf VARCHAR(50) UNIQUE,
   client_cnpj VARCHAR (50) UNIQUE,
   client_name VARCHAR (100) UNIQUE NOT NULL,
   client_email VARCHAR (255) NOT NULL,
   client_phone VARCHAR (50) NOT NULL,
   client_zipcode VARCHAR (50) NOT NULL,
   client_street VARCHAR (50) NOT NULL,
   client_number VARCHAR (50) NOT NULL
  );`)

  await db.query(`CREATE TABLE IF NOT EXISTS tb_jobsite(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    client_id INT FOREIGN KEY REFERENCES tb_client(id) NOT NULL,
    jobsite_zipcode VARCHAR (50) NOT NULL,
    jobsite_street VARCHAR (50) NOT NULL,
    jobsite_number VARCHAR (50) NOT NULL
  );`)

  await db.query(`CREATE TABLE IF NOT EXISTS tb_staff(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    staff_name VARCHAR (50) NOT NULL,
    staff_email VARCHAR (255) NOT NULL,
    staff_phone VARCHAR (50) NOT NULL
  );`)

  await db.query(`CREATE TABLE IF NOT EXISTS tb_contractor(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    contractor_cnpj VARCHAR (50) UNIQUE NOT NULL,
    contractor_name VARCHAR (100) NOT NULL,
    contractor_email VARCHAR (255) NOT NULL,
    contractor_phone VARCHAR (50) NOT NULL,
    contractor_zipcode VARCHAR (50) NOT NULL,
    contractor_street VARCHAR (50) NOT NULL,
    contractor_number VARCHAR (50) NOT NULL
  );`)

  await db.query(`CREATE TABLE IF NOT EXISTS tb_supplier(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    supplier_cnpj VARCHAR (50) UNIQUE NOT NULL,
    supplier_name VARCHAR (100) NOT NULL,
    supplier_email VARCHAR (255) NOR NULL,
    supplier_phone VARCHAR (50) NOT NULL,
    supplier_zipcode VARCHAR (50) NOT NULL,
    supplier_street VARCHAR (50) NOT NULL,
    supplier_number VARCHAR (50) NOT NULL
  );`)

  await db.query(`CREATE TABLE IF NOT EXISTS tb_exec_task(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    jobsite_id INT FOREIGN KEY REFERENCES tb_jobsite(id) NOT NULL,
    floor VARCHAR (50) NOT NULL,
    room VARCHAR (50) NOT NULL,
    type VARCHAR (50) NOT NULL,
    category VARCHAR (50) NOT NULL,
    subcategory VARCHAR (50) NOT NULL,
    staff_id VARCHAR (50) NOT NULL,
    priority VARCHAR (50) NOT NULL,
    status VARCHAR (50) NOT NULL
  );`)

  await db.query(`CREATE TABLE IF NOT EXISTS tb_admin_task(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    jobsite_id INT FOREIGN KEY REFERENCES tb_jobsite(id) NOT NULL,
    staff_id INT FOREIGN KEY REFERENCES tb_staff(id) NOT NULL,
    category VARCHAR (50) NOT NULL,
    subcategory VARCHAR (50) NOT NULL,
    priority VARCHAR (50) NOT NULL,
    status VARCHAR (50) NOT NULL,
    budgeted MONEY NOT NULL,
    expended MONEY NOT NULL,
    deadline DATE NOT NULL,
    notes VARCHAR (200)
  );`)

  await db.end()

  console.log("createTables(): Done!");
}

createTables()