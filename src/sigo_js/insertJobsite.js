const db = require('./_database')

async function insertJobsite(){
  await db.connect()
  const insertJobsite = "INSERT INTO tb_jobsite (jobsite_name) VALUES ($1)" 
  // ex:
  await db.query(insertJobsite,['Casa Amarela'])
  await db.query(insertJobsite,['Apartamento Cobertura'])
  
  await db.end()
  console.log("insertJobsite(): Done!");
}
insertJobsite()