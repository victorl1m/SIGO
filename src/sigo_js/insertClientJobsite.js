const db = require('./_database')

async function insertClientJobsite(){
  await db.connect()
  const insertClientJobsite = "INSERT INTO tb_client_jobsite (client_id,jobsite_id) VALUES ($1, $2)"
  // ex: Relacionar Casa Amarela a Luiz Gustavo Oliveira
  await db.query(insertClientJobsite, [1, 2])
  // ex: Relacionar Apartamento Cobertura a João Victor Santos
  await db.query(insertClientJobsite, [2, 1])

  await db.end()
  console.log("insertClientJobsite(): Done!");
}
insertClientJobsite()