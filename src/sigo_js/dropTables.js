const db = require('./_database')

async function dropTables(){

  await db.connect()

  await db.query(`DROP TABLE tb_client CASCADE`)
  await db.query(`DROP TABLE tb_jobsite CASCADE`)
  await db.query(`DROP TABLE tb_staff CASCADE`)
  await db.query(`DROP TABLE tb_contractor CASCADE`)
  await db.query(`DROP TABLE tb_supplier CASCADE`)
  await db.query(`DROP TABLE tb_exec_task CASCADE`)
  await db.query(`DROP TABLE tb_admin_task CASCADE`)

  await db.end()

  console.log("dropTables(): Done!");
  
}

dropTables()