const db = require('./_database')

async function selectJobsites(){
  await db.connect()
  var result
  result = await db.query("SELECT * FROM tb_jobsite")
  console.log("Obras:")
  console.log(result.rows);
}

selectJobsites()