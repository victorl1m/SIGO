
const db = require('./_database')

async function dropTables(){
  await db.connect()
  await db.query(`DROP TABLE tb_client CASCADE`)
  await db.query(`DROP TABLE tb_jobsite CASCADE`)
  await db.query(`DROP TABLE tb_client_jobsite CASCADE`)

  await db.end()

  console.log("dropTables(): Done!");
}

dropTables()
