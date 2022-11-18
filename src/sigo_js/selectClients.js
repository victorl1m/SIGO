const db = require('./_database')

async function selectClients(){
  await db.connect()
  var result
  result = await db.query("SELECT * FROM tb_client")
  console.log("Clientes:")
  console.log(result.rows);
}

selectClients()