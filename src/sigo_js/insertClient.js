const db = require('./_database')

async function insertClient(){
  await db.connect()
  const insertClient = "INSERT INTO tb_client (client_name) VALUES ($1)"
  // ex: 
  await db.query(insertClient, ['João Victor Santos'])
  await db.query(insertClient, ['Luiz Gustavo Oliveira'])
  
  await db.end()
  console.log("insertClient(): Done!");
}
insertClient()